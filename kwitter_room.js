// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addUser() { 
  room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({ purpose : "adding user" });
 }