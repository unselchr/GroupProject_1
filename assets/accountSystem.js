var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);  
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDNODXWqLDS6-p65LOMk-y50MJfmo5lr3k",
    authDomain: "comicnewsbot.firebaseapp.com",
    databaseURL: "https://comicnewsbot.firebaseio.com",
    projectId: "comicnewsbot",
    storageBucket: "",
    messagingSenderId: "660818086311"
  };
  firebase.initializeApp(config);
