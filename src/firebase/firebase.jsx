// firebase-config.js o firebase.js (o el archivo donde configures Firebase)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIxPLhh6lyioVEWTvEFlp-tUPkm-wicD0",
  authDomain: "unan-leon-guia.firebaseapp.com",
  projectId: "unan-leon-guia",
  storageBucket: "unan-leon-guia.appspot.com",
  messagingSenderId: "351179335332",
  appId: "1:351179335332:web:50c5d8723ea6fa6ddc2831",
  measurementId: "G-P8ZSE2EY0T"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta el objeto auth para usarlo en otros archivos
export const auth = getAuth(app);
