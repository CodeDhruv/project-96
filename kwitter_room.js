
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

username = localStorage.getItem("name");
document.getElementById("name").innerHTML = "Welcome " + username + "!";

function logout(){
  localStorage.removeItem("Room Name");
  localStorage.removeItem("Name");
  window.location = "index.html";
}

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name "
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id='+ Room_names + 'onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}