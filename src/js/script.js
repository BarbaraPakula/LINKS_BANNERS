const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('#sidebar-wrapper');


const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  // nav.classList.toggle('#sidebar-wrapper--active');
};

hamburger.addEventListener('click', handleClick);


let today = new Date().toISOString().substr(0, 10);
document.querySelector('.date_picker').value = today;

document.querySelector('.date_picker').valueAsDate = new Date();





