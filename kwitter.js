var firebaseConfig = {
    apiKey: "AIzaSyBuEZ2rHndRjjgiApjhHgOKk6mJoyNp14I",
    authDomain: "project-14c50.firebaseapp.com",
    databaseURL: "https://project-14c50-default-rtdb.firebaseio.com",
    projectId: "project-14c50",
    storageBucket: "project-14c50.appspot.com",
    messagingSenderId: "225959516731",
    appId: "1:225959516731:web:00ee27cf6306bc7ad81a1e",
    measurementId: "G-W6X5CVNDRW"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  function addUser() {
    var name = document.getElementById("name").value;
    localStorage.setItem("Name", name);
    window.location = "kwitter_room.html"
} 

function logout(){
  localStorage.removeItem("Room Name");
  localStorage.removeItem("Name");
  window.location = "index.html";
}