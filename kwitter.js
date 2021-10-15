// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPeuM-FxvNrIzqi5NRId4Nhb7dfXfQJcE",
    authDomain: "lets-chat-b6753.firebaseapp.com",
    databaseURL: "https://lets-chat-b6753-default-rtdb.firebaseio.com",
    projectId: "lets-chat-b6753",
    storageBucket: "lets-chat-b6753.appspot.com",
    messagingSenderId: "764716277121",
    appId: "1:764716277121:web:c2ad8b1c29902513d45c80",
    measurementId: "G-V65R163D4K"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "kwitter_room.html";
}