function signup() {
var id = $('#identif').val();
var password = $('#password').val();
var http = new XMLHttpRequest();
http.onreadystatechange=()=>{
  if(http.readyState==4 && http.status ==200){
    var response =http.response;
      console.log(http.response);
      if (response.bookmark != "nil") {
      //  $("#info1").html(http.response);
      document.getElementById("status").innerHTML = http.response;
      }
  }
};
http.open("POST","http://173.193.122.87:30002/register",true);
var data="user="+id+"&password="+password;
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.send(data);
};
document.getElementById("status").value = "";
