const form = document.getElementById('appointment-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const department = document.getElementById('department').value;
  const doctor = document.getElementById('doctor').value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Date: ${date}`);
  console.log(`Time: ${time}`);
  console.log(`Department: ${department}`);
  console.log(`Doctor: ${doctor}`);