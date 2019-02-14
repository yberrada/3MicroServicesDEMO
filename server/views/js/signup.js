function signup() {
var id = $('#identif').val();
var password = $('#password').val();
var http = new XMLHttpRequest();
http.onreadystatechange=()=>{
  if(http.readyState==4 && http.status ==200){
    var response =http.response;
      console.log(http.response);
      if (response.bookmark != "nil") {
      document.getElementById("status").innerHTML = http.response;
      }
  }
};
var host = "http://"+window.location.hostname;
http.open("POST",host+":30001/register",true);
var data="user="+id+"&password="+password;
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.send(data);
};
document.getElementById("status").value = "";
