function login() {
var id = $('#identif').val();
var password = $('#password').val();
var http = new XMLHttpRequest();
http.onreadystatechange=()=>{
  if(http.readyState==4 && http.status ==200){
    var response =http.response;
      console.log(response);
      if (response.bookmark != "nil") {

      obj = JSON.parse(http.response);
      if(obj.docs[0].password == password){
      document.getElementById("status").innerHTML = "Log in Successful";
      localStorage.userID =obj.docs[0]._id;
      $("#Logout").show();
      $("#signup").hide();
      $("#login").hide();
      window.location.href = "index.html";

    }else {
         document.getElementById("status").innerHTML = "Log in NOT Successful";
           localStorage.userID  = undefined;
           console.log(localStorage.userID);
      }
      console.log(localStorage.userID);
      }
  }
};
http.open("POST","http://173.193.122.87:30002/login",true);
var data="user="+id+"&password="+password;
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.send(data);
};
document.getElementById("status").value = "";
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    login();
  }
}
// localStorage.clear();
// localStorage.removeItem('userID');
