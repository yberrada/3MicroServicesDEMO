function update (){var http = new XMLHttpRequest();
http.onreadystatechange=()=>{
  if(http.readyState==4 && http.status ==200){
    var response =http.response;
    console.log(response);
//console.log(http.response);
      if (response.bookmark != "nil") {
        document.getElementById("amount").innerHTML = response;
      }
  }
};
console.log(localStorage.userID)
http.open("GET","http://127.0.0.1:7001/bill/"+localStorage.userID,true);
http.send();
}

function payBill() {
var value = $('#input').val();
var http = new XMLHttpRequest();
http.onreadystatechange=()=>{
  if(http.readyState==4 && http.status ==200){
    var response =JSON.parse(http.response);
      console.log(http.response);
      if (response.bookmark != "nil") {
      //  $("#info1").html(http.response);
      update();
      }
      console.log(localStorage.userID);
  }
  document.getElementById("input").value = "";

};
http.open("GET","http://127.0.0.1:7001/bill/pay/"+localStorage.userID+"/"+value,true);
http.send();
};
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    payBill();
  }
}

if(localStorage.userID!=null ||localStorage.userID !=undefined){
  $("#Logout").show();
  $("#signup").hide();
  $("#login").hide();
  $("#Logged").show();
  $("#NotLogged").hide();
}

console.log(localStorage.userID);
update();
