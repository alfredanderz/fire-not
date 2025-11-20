importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA7VsuY_OqIGW9gRpGoXYt-Q9G2LjppyU8",
  authDomain: "notificacionesspring.firebaseapp.com",
  projectId: "notificacionesspring",
  storageBucket: "notificacionesspring.firebasestorage.app",
  messagingSenderId: "313008938602",
  appId: "1:313008938602:web:9a5c2bece760d15e0f7413",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 Notificación recibida en segundo plano:", payload);

  const notificationTitle = payload.notification.title || "Notificación";
  const notificationOptions = {
    body: payload.notification.body || "Tienes un nuevo mensaje",
    icon: "/firebase-logo.png",
    badge: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejar clicks en las notificaciones
self.addEventListener("notificationclick", (event) => {
  console.log(" Click en notificación:", event);
  event.notification.close();

  // Abrir una URL cuando se hace click (opcional)
  event.waitUntil(
    clients.openWindow("https://notificacionesspring.firebaseapp.com")
  );
});
