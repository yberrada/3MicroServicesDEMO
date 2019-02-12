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
//
// function print2page(i){
//   setTimeout(function() {
//     document.getElementById("chatlog"+i).innerHTML = userMessages[userMessages.length - i];
//   }, 1000);
// }
// function updateBot (){
//   for (var i = 1; i <= 22; i++) {
//     if (userMessages[userMessages.length- i])
//       {
//         $( ".chatentry" ).append( "<p>Test</p>" );
//
//       //   console.log(i)
//       //   document.getElementById("chatentry"+i).innerHTML = userMessages[userMessages.length - i];
//       //   if(i%2==0){
//       //   document.getElementById("chatentry"+i).style.background="#2FB231";
//       //   document.getElementById("chatentry"+i).style.float="right";
//       // }
//       //   else{
//       //   document.getElementById("chatentry"+i).style.background="#2F83B2";
//       //   document.getElementById("chatentry"+i).style.float="left";
//       //
//       // }
//       //   /* border-style: solid; */
//       //   document.getElementById("chatentry"+i).style.border="solid";
//       //   document.getElementById("chatentry"+i).style.padding="5px 5px 5px 5px";
//   //    $( ".chatentry" ).append( "<p>Test</p>" );
//     }
//   }
// }

function discussion() {
  newInput =$('#inputfield').val();
  document.getElementById("inputfield").value = "";
  $( ".chatentry" ).append( '<p id="chatentry1">'+newInput +' </br> </p>' );
  // userMessages.push("<b style='color:#DB7093;'>" + "User" + ":</b> " +newInput);
  userMessages.push(newInput);
  http.onreadystatechange=()=>{
    if(http.readyState==4 && http.status ==200){
      // userMessages.push("<b style='color:gray;'>" + 'Chatbot' + ":</b> " + http.response);
      userMessages.push(http.response);
      $( ".chatentry" ).append( '<p id="chatentry2">'+http.response +' </br> </p>' );
      //updateBot();
    }
  }
  http.open("GET","http://127.0.0.1:5000/chatlog/"+newInput,true);
  http.send();
}

if(localStorage.userID!=null ||localStorage.userID !=undefined){
  $("#Logout").show();
  $("#signup").hide();
  $("#login").hide();
  $("#Logged").show();
  $("#NotLogged").hide();
}
window.setInterval(function() {
  var elem = document.getElementById('chat');
  elem.scrollTop = elem.scrollHeight;
}, 500);
//
// for (var i = 1; i <= 22; i++) {
//   if(i%2==0)
//   document.getElementById("chatentry"+i).style.background="gray";
//   else
//   document.getElementById("chatentry"+i).style.background="yellow";
//
// }
