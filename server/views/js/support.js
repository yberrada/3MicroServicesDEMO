var http = new XMLHttpRequest();
var response;

var messages = [],
  newInput = "",
  botName = 'Chatbot',
  talking = true;
var botMessages=[];
var userMessages=[];


document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    discussion();
  }
}
function discussion() {
  newInput =$('#inputfield').val();
  document.getElementById("inputfield").value = "";
  $( ".chatentry" ).append( '<p id="chatentry1">'+newInput +' </br> </p>' );
  userMessages.push(newInput);
  http.onreadystatechange=()=>{
    if(http.readyState==4 && http.status ==200){
      userMessages.push(http.response);
      $( ".chatentry" ).append( '<p id="chatentry2">'+http.response +' </br> </p>' );
      //updateBot();
    }
  }
  var elem = document.getElementById('chat');
  elem.scrollTop = elem.scrollHeight;
  var host = "http://"+window.location.hostname;
  http.open("GET",host+":30005/chatlog/"+newInput,true);
  http.send();
}

if(localStorage.userID!=null ||localStorage.userID !=undefined){
  $("#Logout").show();
  $("#signup").hide();
  $("#login").hide();
  $("#Logged").show();
  $("#NotLogged").hide();
}
