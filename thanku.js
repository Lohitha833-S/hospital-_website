var nameError = document.getElementById('name-error');
var passError = document.getElementById('pass-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateName(){
	var name = document.getElementById('contact-name').value;

	if(name.length == 0){
		nameError.innerHTML = 'Name is required';
		return false;

	}
	if(!name.match(/^[A-Za-z]\s{1}[A-Za-z]$/)){
		nameError.innerHTML = 'Write full name';
		return false;
	}
	nameError.innerHTML = '<i class="fa-sharp fa-solid fa-check fa-2xl"></i>';
	return true;
}
function validateEmail(){
	var email = document.getElementById('contact-email').value;

	if(email.length == 0){
		emailError.innerHTML = 'Email is required'
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
	emailError.innerHTML = 'Email Invalid'
	return false;
}
emailError.innerHTML = '<i class="fa-sharp fa-solid fa-check fa-2xl"></i>';
return true;
}
function validatePass(){
	var pass = document.getElementById('contact-pass').value;

	if(pass.length == 0){
		passError.innerHTML = 'Password is required'
		return false;
	}
	if(pass.length !== 8){
		passError.innerHTML = 'Password should be 8 characters'
		return false;
}
if(!pass.match(/^[A-Za-z]{8}$/)){
	passError.innerHTML = 'Password Invalid'
	return false;
}
passError.innerHTML = '<i class="fa-sharp fa-solid fa-check fa-2xl"></i>';
return true;
}
function validateForm(){
	if(!validateName() || !validateEmail() || !validatePass()){
		submitError.style.display = 'block';
		submitError.innerHTML = 'Plaese fix the error to submit';
		setTimeout(function(){submitError.style.display = 'none';},3000);
		return false;
	}
}