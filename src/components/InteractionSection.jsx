import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faReply, faUserCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../supabase/supabase';

const InteractionSection = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [respuestas, setRespuestas] = useState({});
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState('Anonymous');

  useEffect(() => {
    cargarComentarios();
    obtenerUsuarioActual();
    const channel = supabase
      .channel('realtime likes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'likes' }, () => {
        cargarComentarios();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const obtenerUsuarioActual = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUsuario(user);
    if (user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .single();
      if (data && data.name) {
        setNombreUsuario(data.name);
      } else {
        setNombreUsuario('Anonymous');
      }
    } else {
      setNombreUsuario('Anonymous');
    }
  };

  const cargarComentarios = async () => {
    try {
      const { data, error } = await supabase
        .from('datos')
        .select(`
          *,
          respuestas (*),
          likes (*),
          profiles (name)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (Array.isArray(data)) {
        setComentarios(data);
      }
    } catch (error) {
      console.error('Error al cargar comentarios:', error);
      setError('Error al cargar comentarios. Por favor, intenta de nuevo más tarde.');
    }
  };

  const publicarComentario = async () => {
    if (nuevoComentario.trim() === '') return;

    // Usar el nombre de usuario anónimo si no está logueado
    const nombre = usuario ? nombreUsuario : 'Anonymous';

    try {
      const { data, error } = await supabase
        .from('datos')
        .insert([{ 
          information: nuevoComentario, 
          nombre_usuario: nombre,
          user_id: usuario ? usuario.id : null // Setear user_id a null si no está logueado
        }]);

      if (error) throw error;
      setNuevoComentario('');
      await cargarComentarios();
    } catch (error) {
      console.error('Error al publicar comentario:', error);
      setError('Error al publicar comentario. Por favor, verifica tu conexión e intenta de nuevo.');
    }
  };

  const toggleLike = async (comentarioId) => {
    if (!usuario) {
      setError('Debes iniciar sesión para dar like a un comentario.');
      return;
    }

    try {
      const { data: existingLike, error: existingLikeError } = await supabase
        .from('likes')
        .select('*')
        .eq('comentario_id', comentarioId)
        .eq('user_id', usuario.id)
        .single();

      if (existingLikeError && existingLikeError.code !== 'PGRST116') throw existingLikeError;

      if (existingLike) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('id', existingLike.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('likes')
          .insert([{ comentario_id: comentarioId, user_id: usuario.id }]);

        if (error) throw error;
      }

      await cargarComentarios();
    } catch (error) {
      console.error('Error al gestionar like:', error);
      setError('Error al gestionar like. Por favor, intenta de nuevo.');
    }
  };

  const toggleRespuesta = (comentarioId) => {
    setRespuestas({ ...respuestas, [comentarioId]: respuestas[comentarioId] ? '' : 'Escribe tu respuesta aquí...' });
  };

  const responderComentario = async (comentarioId) => {
    const respuesta = respuestas[comentarioId];
    if (respuesta.trim() === '') return;

    // Usar el nombre de usuario anónimo si no está logueado
    const nombre = usuario ? nombreUsuario : 'Anonymous';

    try {
      const { error } = await supabase
        .from('respuestas')
        .insert([{ 
          contenido: respuesta, 
          nombre_usuario: nombre,
          user_id: usuario ? usuario.id : null, // Setear user_id a null si no está logueado
          comentario_id: comentarioId
        }]);

      if (error) throw error;
      setRespuestas({ ...respuestas, [comentarioId]: '' });
      await cargarComentarios();
    } catch (error) {
      console.error('Error al responder comentario:', error);
      setError('Error al responder comentario. Por favor, verifica tu conexión e intenta de nuevo.');
    }
  };

  return (
    <section id="interaction" className="py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Foro de Estudiantes</h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">Comparte tus experiencias, haz preguntas y colabora con otros estudiantes en este espacio interactivo.</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Lista de comentarios */}
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUserCircle} className="text-5xl mr-4 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{comentario.nombre_usuario || 'Anonymous'}</h3>
                <p className="text-gray-500 text-sm">{new Date(comentario.created_at).toLocaleString()}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {comentario.information}
            </p>
            <div className="flex justify-between items-center">
              <button 
                className="flex items-center text-blue-500 text-sm hover:text-blue-700 transition duration-300"
                onClick={() => toggleRespuesta(comentario.id)}
              >
                <FontAwesomeIcon icon={faReply} className="mr-2" />
                Responder
              </button>
              <div className="flex items-center gap-3">
                {usuario && (
                  <button 
                    className={`flex items-center text-sm transition duration-300 ${
                      comentario.likes && comentario.likes.some(like => like.user_id === usuario.id)
                        ? 'text-green-700'
                        : 'text-green-500 hover:text-green-700'
                    }`}
                    onClick={() => toggleLike(comentario.id)}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
                    {comentario.likes && comentario.likes.some(like => like.user_id === usuario.id) ? 'Quitar like' : 'Me gusta'}
                  </button>
                )}
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {comentario.likes ? comentario.likes.length : 0}
                </span>
              </div>
            </div>
            {respuestas[comentario.id] !== undefined && (
              <div className="mt-4">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  rows="2"
                  placeholder="Escribe tu respuesta aquí..."
                  value={respuestas[comentario.id]}
                  onChange={(e) => setRespuestas({ ...respuestas, [comentario.id]: e.target.value })}
                ></textarea>
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-4 rounded-full transition duration-300 text-sm"
                  onClick={() => responderComentario(comentario.id)}
                >
                  Responder
                </button>
              </div>
            )}
            {/* Lista de respuestas */}
            {comentario.respuestas && comentario.respuestas.map((respuesta) => (
              <div key={respuesta.id} className="mt-4 ml-8 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faUserCircle} className="text-4xl mr-2 text-blue-400" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{respuesta.nombre_usuario || 'Anonymous'}</h4>
                    <p className="text-gray-500 text-sm">{new Date(respuesta.created_at).toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-gray-700">{respuesta.contenido}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Formulario para nuevo comentario */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Publica un comentario</h3>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            rows="4"
            placeholder="Escribe tu comentario..."
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
          ></textarea>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300"
            onClick={publicarComentario}
          >
            Publicar
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractionSection;
