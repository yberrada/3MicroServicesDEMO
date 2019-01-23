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
http.open("GET","http://localhost:5000/bill/mouad/",true);
http.send();
}
update();

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
  }
  document.getElementById("input").value = "";

};
http.open("GET","http://localhost:5000/bill/pay/mouad/"+value,true);
http.send();
};
