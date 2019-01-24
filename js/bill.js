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
http.open("GET","http://localhost:7001/bill/"+localStorage.userID,true);
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
http.open("GET","http://localhost:7001/bill/pay/"+localStorage.userID+"/"+value,true);
http.send();
};

if(localStorage.userID!=null ||localStorage.userID !=undefined){
  $("#Logout").show();
  $("#signup").hide();
  $("#login").hide();
}

update();
