import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import unan from "../../public/img/escudo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../pages/Footer";
import { supabase } from '../supabase/supabase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth as firebaseAuth } from '../firebase/firebase';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("Usuario");
  const [authProvider, setAuthProvider] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);

  const handleAuthStateChange = async (supabaseUser, firebaseUser) => {
    if (supabaseUser) {
      setUser(supabaseUser);
      setAuthProvider("supabase");
      const { data, error } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', supabaseUser.id)
        .single();
      setUserName(data?.name || "Usuario");
    } else if (firebaseUser) {
      setUser(firebaseUser);
      setAuthProvider("firebase");
      setUserName(firebaseUser.displayName || "Usuario");
    } else {
      setUser(null);
      setAuthProvider("");
      setUserName("Usuario");
    }
  };

  useEffect(() => {
    const fetchSupabaseUser = async () => {
      const { data: { user: supabaseUser } } = await supabase.auth.getUser();
      handleAuthStateChange(supabaseUser, null);
    };

    const fetchFirebaseUser = () => {
      onAuthStateChanged(firebaseAuth, (firebaseUser) => {
        handleAuthStateChange(null, firebaseUser);
      });
    };

    fetchSupabaseUser();
    fetchFirebaseUser();

    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthStateChange(session?.user, null);
    });

    return () => authListener.data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleRedirects = () => {
      if (!user && (location.pathname === '/login' || location.pathname === '/register')) {
        navigate('/');
      }
    };

    handleRedirects();
  }, [navigate, location, user]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (userMenuOpen) setUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (menuOpen) setMenuOpen(false);
  };

  const handleLogin = () => {
    navigate('/login');
    setMenuOpen(false);
  };

  const handleRegister = () => {
    navigate('/register');
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    if (authProvider === "supabase") {
      await supabase.auth.signOut();
    } else if (authProvider === "firebase") {
      await signOut(firebaseAuth);
    }
    navigate('/');
    setUserMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const AuthButtons = () => (
    <>
      <button 
        className="block w-full md:w-auto md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700 border border-input bg-background"
        onClick={handleLogin}
      >
        Iniciar Sesión
      </button>
      <button 
        className="block w-full md:w-auto md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-700 hover:text-white bg-blue-600 text-white mt-2 md:mt-0 md:ml-2"
        onClick={handleRegister}
      >
        Registrarse
      </button>
    </>
  );

  return (
    <div className="relative min-h-screen flex flex-col">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <img src={unan} alt="UNAN Logo" className="w-60 h-70 animate-pulse" />
        </div>
      )}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-blue-500"
          >
            <img src={unan} alt="Logo" className="h-8 w-8" />
            <span>UNAN-León</span>
          </Link>
          <nav
            ref={menuRef}
            className={`md:flex md:space-x-4 ${menuOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent shadow-md md:shadow-none z-50`}
          >
            <button
              onClick={() => handleNavigation("/orientacion")}
              className="block w-full md:w-auto md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              Orientación
            </button>
            <button
              onClick={() => handleNavigation("/aulas-virtuales")}
              className="block w-full md:w-auto md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              Aulas Virtuales
            </button>
            <button
              onClick={() => handleNavigation("/correo-institucional")}
              className="block w-full md:w-auto md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              Correo Institucional
            </button>
            <button
              onClick={() => handleNavigation("/mapa")}
              className="block w-full md:w-auto md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              Mapa
            </button>
            {!user && <div className="md:hidden"><AuthButtons /></div>}
          </nav>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white"
                  onClick={toggleUserMenu}
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <p className="px-4 py-2 text-sm text-gray-700">{userName}</p>
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                      Desconectar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex md:space-x-2">
                <AuthButtons />
              </div>
            )}
            <button
              className="flex items-center justify-center w-10 h-10 rounded-md md:hidden"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
