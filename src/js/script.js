const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('#sidebar-wrapper');


const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  // nav.classList.toggle('#sidebar-wrapper--active');
};

hamburger.addEventListener('click', handleClick);



