const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm_password').value;

  if (username === '' || email === '' || password === '' || confirm_password === '') {
    alert('All fields are required');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return false;
  }

  if (password !== confirm_password) {
    alert('Passwords do not match');
    return false;
  }

  // If all validations pass, save user data and redirect to login page
  const user = { username, email, password };
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = 'login.html';
  return true;