import { initializeApp,  } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:"AIzaSyAO_k0A72V5Ui6vaC2VNmC5hxv_xcKqBL4",
  authDomain:"cleverpy-3a03d.firebaseapp.com",
  databaseURL:"cleverpy-3a03d.firebaseapp.com",
  projectId: "cleverpy-3a03d",
  storageBucket:"cleverpy-3a03d.appspot.com",
  messagingSenderId: "536501842901",
  appId:"1:536501842901:web:8c5291e65e6823cdcb835c",
}

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
