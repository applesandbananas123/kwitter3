//YOUR FIREBASE LINKS
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
//Start code

//End code
      } });  }); }
getData();
