const mobMenu = document.querySelector('.mobile-menu');
const overlayMenu = document.querySelector('.navlinks');
const closeB = document.querySelector('.mobile-menu-close');
const contactForm = document.getElementById('contactForm');

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
  const emailAddress = document.getElementById('emailAddress').value;
  const errorMsg = document.getElementById('error_msg');
  const lowerEmail = emailAddress.toLowerCase();

  if (emailAddress !== lowerEmail) {
    errorMsg.textContent = 'The format of the email is not correct.';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
  }
}
