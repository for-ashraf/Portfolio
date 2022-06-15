const mobMenu = document.querySelector('.mobile-menu');
const overlayMenu = document.querySelector('.navlinks');
const closeB = document.querySelector('.mobile-menu-close');
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', logSubmit);




mobMenu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

closeB.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelectorAll('.close').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));
  

function logSubmit(event) {
  const emailAddress= document.getElementById('emailAddress').value;
  var error_msg = document.getElementById("error_msg");
  var loweremail=emailAddress.toLowerCase();
  
  if (emailAddress!=loweremail)
  {
  error_msg.textContent="The format of the email is not correct.";
  event.preventDefault();
  }
  else
  error_msg.textContent="";
}
