import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Efecto para verificar el estado de autenticación en Supabase
  useEffect(() => {
    const checkSupabaseAuth = async () => {
      try {
        const {
          data: { user: supabaseUser },
        } = await supabase.auth.getUser();
        if (supabaseUser) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error("Error al verificar el estado de autenticación de Supabase:", err);
      }
    };

    checkSupabaseAuth();
  }, []);

  // Manejador de login con correo y contraseña usando Supabase
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        setIsAuthenticated(true); // Autenticación exitosa
        // Guardar datos en la tabla profiles
        const { error: insertError } = await supabase
          .from('profiles')
          .insert([
            { email, password }
          ]);
        if (insertError) throw insertError;
      } catch (error) {
        setError("Credenciales inválidas. Por favor, intente de nuevo.");
      } finally {
        setLoading(false);
      }
    },
    [email, password]
  );

  // Manejador de login con Google usando Supabase
  const handleGoogleLogin = useCallback(async () => {
    try {
      // Iniciar sesión con Google
      const { error: signInWithOAuthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (signInWithOAuthError) throw signInWithOAuthError;
  
      setIsAuthenticated(true); // Autenticación exitosa
  
      // Obtener datos del usuario autenticado
      const { data: { user: supabaseUser } } = await supabase.auth.getUser();
      
      // Verificar si el usuario ya existe en la tabla profiles
      const { data: existingProfile, error: fetchProfileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.id)  // Asegúrate de que estás usando el ID correcto
        .single();
  
      if (fetchProfileError && fetchProfileError.code !== 'PGRST116') {
        throw fetchProfileError;  // Manejar errores al buscar el perfil
      }
  
      // Si el perfil no existe, insertarlo
      if (!existingProfile) {
        const { error: insertProfileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: supabaseUser.id,  // Usar el ID del usuario
              created_at: new Date(), // Asignar la fecha de creación
              name: supabaseUser.user_metadata.full_name || supabaseUser.email.split('@')[0], // Usar el nombre completo o parte del email
              email: supabaseUser.email,
              password: null, // No hay contraseña para autenticaciones externas
            },
          ]);
  
        if (insertProfileError) throw insertProfileError;
      } else {
        console.log('El usuario ya existe en profiles');
      }
  
    } catch (error) {
      setError(
        "Hubo un problema al iniciar sesión con Google. Por favor, intente más tarde."
      );
    }
  }, []);

  // Redirecciona si el usuario está autenticado
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-800">
          Iniciar Sesión
        </h2>
        {error && (
          <p
            className="text-red-500 text-sm mb-4 text-center"
            aria-live="assertive"
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              aria-label="Correo Electrónico"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              aria-label="Contraseña"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            disabled={loading}
          >
            {loading ? (
              <span className="loader">Cargando...</span>
            ) : (
              "Iniciar Sesión"
            )}
          </button>
        </form>

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                O inicia sesión con
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Google Login"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-500" />
            Google
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-indigo-600 hover:underline"
          >
            Regístrate aquí
          </button>
        </p>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Olvidaste tu contraseña?{" "}
          <button
            onClick={() => navigate("/forgot")}
            className="text-indigo-600 hover:underline"
          >
            Recuperar contraseña
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
