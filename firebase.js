// FIREBASE IMPORTS

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* =========================
   FIREBASE CONFIG
========================= */

const firebaseConfig = {
  apiKey: "AIzaSyDuoCfzRCVWKoBkve_6U8e6Cs5xmluUSGA",

  authDomain: "ddvs-portal.firebaseapp.com",

  projectId: "ddvs-portal",

  storageBucket: "ddvs-portal.firebasestorage.app",

  messagingSenderId: "636997326768",

  appId: "1:636997326768:web:c1273713a9c761b612e875",

  measurementId: "G-47PXNPND59",
};

/* =========================
   INITIALIZE FIREBASE
========================= */

const app = initializeApp(firebaseConfig);

/* =========================
   FIRESTORE DATABASE
========================= */

const db = getFirestore(app);

/* =========================
   FIREBASE AUTHENTICATION
========================= */

const auth = getAuth(app);

/* =========================
   EXPORTS
========================= */

export { db, auth };
