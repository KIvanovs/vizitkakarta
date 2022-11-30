
function Sign(){
var password = document.getElementById("password").value
var confirm_password = document.getElementById("confirm_password").value;
  if(password != confirm_password) {
    alert("Passwords Don't Match");
  } else {
    alert('good');
    window.location = "../html/index.html";
  }
}
