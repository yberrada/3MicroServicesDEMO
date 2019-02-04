var http = new XMLHttpRequest();
var response;

var messages = [],
  newInput = "",
  botName = 'Chatbot',
  talking = true;


function discussion() {
  if (document.getElementById("inputfield").value != "") {
    newInput =$('#inputfield').val();
    http.onreadystatechange=()=>{
      if(http.readyState==4 && http.status ==200){
        response =http.response;
        var botMessage=response;
          console.log(http.response);
          if (response.bookmark != "nil") {
            document.getElementById("inputfield").value = "";
            messages.push("<b>" + "User" + ":</b> " +newInput);;
            messages.push("<b>" + botName + ":</b> " + botMessage);
            for (var i = 1; i < 8; i++) {
              if (messages[messages.length - i])
                document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
            }
          }
      }
    };
    http.open("GET","http://173.193.122.87:30005/chatlog/"+newInput,true);
    http.send();
  }
}

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    discussion();
  }
}

if(localStorage.userID!=null ||localStorage.userID !=undefined){
  $("#Logout").show();
  $("#signup").hide();
  $("#login").hide();
  $("#Logged").show();
  $("#NotLogged").hide();
}
