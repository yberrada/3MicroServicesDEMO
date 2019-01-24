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
    }else {
         document.getElementById("status").innerHTML = "Log in NOT Successful";
      }
      localStorage.userID =obj.docs[0]._id;
      console.log(localStorage.userID);
      $("#Logout").show();
      $("#signup").hide();
      $("#login").hide();
      }
  }
};
http.open("POST","http://localhost:7000/login",true);
var data="user="+id+"&password="+password;
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.send(data);
};
document.getElementById("status").value = "";
// localStorage.clear();
// localStorage.removeItem('userID');
