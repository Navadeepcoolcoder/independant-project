//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBGKXgdK0-SCTYEzb6FXgqAGLGz_aY_JNU",
      authDomain: "kwitter-24a12.firebaseapp.com",
      databaseURL: "https://kwitter-24a12-default-rtdb.firebaseio.com",
      projectId: "kwitter-24a12",
      storageBucket: "kwitter-24a12.appspot.com",
      messagingSenderId: "843240914914",
      appId: "1:843240914914:web:8b250eb27ad475628f83bb"
    };
    
    // Initialize Firebase
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
