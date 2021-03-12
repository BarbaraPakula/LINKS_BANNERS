/* sidbar &hamburger button    */
const hamburger_display = document.querySelector('.hamburger');
const navVisable = document.querySelector('#wrapper');

const handleClick = (event) => {
  event.preventDefault();
  hamburger_display.classList.toggle('hamburger--active');
  navVisable.classList.toggle('menuDisplayed');
};

hamburger_display.addEventListener('click', handleClick);

/* input date*/
let today = new Date().toISOString().substr(0, 10);
document.querySelector('.date_picker').value = today;
document.querySelector('.date_picker').valueAsDate = new Date();

/* Active pages */

const pages = document.querySelector('#page-content-wrapper').children;
const navLinks = document.querySelectorAll('#sidebar-wrapper a');

function initPages() {
  const idFromHash = window.location.hash.replace('#/', ' ');
  let pageMatchingHash = pages[0].id;

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
      const id = clicedElement.getAttribute('href').replace('#', '');
      activatePage(id);
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

/* modal */

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}
//podpinamy ją pod przyciski zamykające z klasą js--close-modal:
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});
// zamykanie modala po kliknięciu w tło overlaya.
document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});
//zamykanie na klawiaturze
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});


function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

const icon_quit = document.querySelectorAll('.icon-quit ');
for (let quit of icon_quit) {
  quit.addEventListener('click', function (e) {
    e.preventDefault();
    openModal('#quit_icon');
  });
}
const icon_profile = document.querySelectorAll('.icon-profile');
for (let quit of icon_profile) {
  quit.addEventListener('click', function (e) {
    e.preventDefault();
    openModal('#icon-profile');
  });
}
const icon_chat = document.querySelectorAll('.icon-notification');
for (let quit of icon_chat) {
  quit.addEventListener('click', function (e) {
    e.preventDefault();
    openModal('#icon-notification');
  });
}

/*canvas*/
var ctx = document.getElementById('myChart').getContext('2d');
var Chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [250, 200, 250, 300, 400, 350, 230, 190, 180],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [350, 180, 200, 390, 410, 110, 200, 440, 200],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48],
      hidden: true,
    }]
  },
});

