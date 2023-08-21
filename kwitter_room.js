
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD2fO-wIxin8RauxhjQXjyXMspXXUo_YUc",
      authDomain: "kwitter-8202c.firebaseapp.com",
      databaseURL: "https://kwitter-8202c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8202c",
      storageBucket: "kwitter-8202c.appspot.com",
      messagingSenderId: "345506516979",
      appId: "1:345506516979:web:acd003e534302aaa498c86"
    };
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class = 'room_name' id = "+Room_names+" onclick ='redirectToRoomName(this.id)' >#" + Room_names + "<div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


