var http = new XMLHttpRequest();
var response;

var messages = [], //array that hold the record of each string in chat
  newInput = "", //keeps track of the most recent input string from the user
  botName = 'Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work


//this runs each time enter is pressed.
//It controls the overall input and output
function discussion() {
  //if the message from the user isn't empty then run
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
    http.open("GET","http://173.193.122.87:30003/chatlog/"+newInput,true);
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
  if (key == 38) {
    console.log('hi')
  }
}

if(localStorage.userID!=null ||localStorage.userID !=undefined){
  $("#Logout").show();
  $("#signup").hide();
  $("#login").hide();
}
