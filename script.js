function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "") {
    alert("Username must be filled out");
    return false;
  }
  
  if (password == "") {
    alert("Password must be filled out");
    return false;
  }
  
  // Add your additional validation rules here
  
  // Redirect to appointment.html if username and password are valid
  if (username == !==" " && password == !=" ") {
    window.location.href = "appointment.html";
    return false;
  }
  else {
    alert("Invalid username or password");
    return false;
  }
}




