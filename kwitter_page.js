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

    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
   function send()
   {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
    
    document.getElementById("msg").value = "";
   }
   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function logout(){
  localStorage.removeItem("Room Name");
  localStorage.removeItem("Name");
  window.location = "index.html";
}