const hamburger_display = document.querySelector('.hamburger');
const navVisable = document.querySelector('#wrapper');

const handleClick = (event) => {
  event.preventDefault();
  hamburger_display.classList.toggle('hamburger--active');
  navVisable.classList.toggle('menuDisplayed');
};

hamburger_display.addEventListener('click', handleClick);

// input date
let today = new Date().toISOString().substr(0, 10);
document.querySelector('.date_picker').value = today;
document.querySelector('.date_picker').valueAsDate = new Date();

// /* Active pages */

const pages = document.querySelector('#page-content-wrapper').children;
const navLinks = document.querySelectorAll('#sidebar-wrapper a');

function initPages() {
  const idFromHash = window.location.hash.replace('#/', ' ');
  let pageMatchingHash = pages[3].id;

  for (let page of pages) {
    if (page.id == idFromHash) {
      pageMatchingHash = page.id;
      break;
    }
  }

  activatePage(pageMatchingHash);

  for (let link of navLinks) {
    link.addEventListener('click', function (e) {
      const clicedElement = this;
      e.preventDefault();
      //       // wydobyć id z atrybutu href
      const id = clicedElement.getAttribute('href').replace('#', '');
      console.log('id:', id);
      //       // wywołać met z apge z tym id
      activatePage(id);
      //       // ?? change url hash
      window.location.hash = '#/' + id;
    });
  }
}

function activatePage(pageId) {
  for (let page of pages)
    page.classList.toggle('active', page.id == pageId);
  for (let link of navLinks)
    link.classList.toggle(
      'active',
      link.getAttribute('href') == '#' + pageId
    );
}
activatePage();
initPages();