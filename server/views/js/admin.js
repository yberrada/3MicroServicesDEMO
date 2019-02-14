function submit() {
var id = $('#identif').val();
var password = $('#password').val();
var due = $('#amountDue').val();

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
// http.open("PUT","http://127.0.0.1:3000/due",true);
// 173.193.122.87
http.open("POST","http://173.193.122.87:30002/due",true);
var data="user="+id+"&password="+password+"&amount="+due;
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.send(data);
};
document.getElementById("status").value = "";
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    submit();
  }
}
