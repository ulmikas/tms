import { hasTouch } from 'detect-touch';
import smoothscroll from 'smoothscroll-polyfill';
import axios from 'axios';

const STICKY_HEADER_TRIGGER = 50;
const STICKY_HEADER_HEIGHT = 88;
const STICKY_HEADER_CLASSNAME = 'fixed';
const HEADER_CLASSNAME = 'navigation';
const UP_BUTTON_CLASSNAME = '.arrow-up';
const DOWN_BUTTON_CLASSNAME = '.promo__arrow-down';
const NAV_TOGGLE_ICON = '.nav-toggle';
const HEADER_NAV = '.header-nav';
const PROMO_BLOCK = '.promo';
const BTN_TERMS = '#btn-terms';
const BTN_CONTACTS = '#btn-contact-us';

const addEvent = (selector, event, handler) => {
  const el = document.querySelector(selector);
  if (el) {
    el.addEventListener(event, handler);
  }
};

const verticalSmoothScroll = (to) => {
  window.scrollTo({ top: to, left: 0, behavior: 'smooth' });
};

const scrollToSection = (selector) => {
  const section = document.querySelector(selector);
  if (section) {
    verticalSmoothScroll(section.offsetTop - STICKY_HEADER_HEIGHT);
  }
};

const handleLoad = () => {
  const target = window.location.hash;
  if (target) {
    scrollToSection(target);
  }
};

const handleScroll = () => {
  const navigation = document.querySelector(`.${HEADER_CLASSNAME}`);
  const action = window.pageYOffset >= STICKY_HEADER_TRIGGER ? 'add' : 'remove';
  navigation.classList[action](STICKY_HEADER_CLASSNAME);
  document.body.classList[action](`${STICKY_HEADER_CLASSNAME}-nav`);
};

const handleScrollUp = () => {
  verticalSmoothScroll(0);
};

const handleSkipPromo = () => {
  const promoHeight = document.querySelector(PROMO_BLOCK).clientHeight;
  verticalSmoothScroll(promoHeight - STICKY_HEADER_HEIGHT);
};

const handleOpenMenu = () => {
  const headerNav = document.querySelector(HEADER_NAV);
  const headerNavToggle = document.querySelector(NAV_TOGGLE_ICON);
  headerNavToggle.classList.add('active');
  headerNav.classList.add('open');
};

const handleCloseMenu = () => {
  const headerNav = document.querySelector(HEADER_NAV);
  const headerNavToggle = document.querySelector(NAV_TOGGLE_ICON);
  headerNavToggle.classList.remove('active');
  headerNav.classList.remove('open');
};

const handleToggleMenu = () => {
  const headerNav = document.querySelector(HEADER_NAV);
  const headerNavToggle = document.querySelector(NAV_TOGGLE_ICON);
  headerNavToggle.classList.toggle('active');
  headerNav.classList.toggle('open');
};

const handleNavigation = (e) => {
  if (document.querySelector(e.target.hash)) {
    e.preventDefault();
    scrollToSection(e.target.hash);
    handleCloseMenu();
  }
};

const handleGoToBtn = (e) => {
  const sel = e.target.id.replace('btn-', '#');
  scrollToSection(sel);
};

const handleRgionSelect = (e) => {
  if (e.target.value === 'other') {
    document.querySelector('#custom-region').style.display = 'block';
  } else {
    document.querySelector('#custom-region').style = '';
    document.querySelector('#custom-region input.form-input').value = '';
  }
};

const handleClosePopup = () => {
  const popup = document.querySelector('.popup-wrapper');
  popup.remove();
};

const handleClearForm = () => {
  const form = document.querySelector('#contact-us-form');
  const customRegion = document.querySelector('#custom-region');
  customRegion.style = '';

  [...form.elements].forEach((i) => {
    i.value = '';
    if (i.tagName.toLowerCase() === 'input' && i.type.toLowerCase() !== 'submit') {
    }
    if (i.tagName.toLowerCase() === 'textarea') {
      i.value = '';
    }
    if (i.tagName.toLowerCase() === 'select') {
      i.value = '0';
    }
  });
};


// const handleOverlayClick = () => {

// };

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  // const n = name.match(/^[A-Za-zА-Яа-я ]*[A-Za-zА-Яа-я ]+$/);
  // if (!n) {
  //   alert("Имя введено неверно, пожалуйста исправьте ошибку");
  //   return false;
  // }

  const phone = form.phone.value;
  // const p = phone.match(/^[0-9+][0-9- ]*[0-9- ]+$/);
  // if (!p) {
  //   alert("Телефон введен неверно");
  //   return false;
  // }

  const email = form.email.value;
  // const m = mail.match(/^[A-Za-z0-9][A-Za-z0-9._-]*[A-Za-z0-9_]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]+$/);
  // if (!m) {
  //   alert("E-mail введен неверно, пожалуйста исправьте ошибку");
  //   return false;
  // }

  const message = form.message.value;
  const region = form.region.value;
  const customregion = form.customregion.value;


  axios({
    method: 'post',
    url: 'http://tms-wiha.ru/mail.php',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: {
      name,
      phone,
      email,
      message,
      region,
      customregion,
    },
  }).then(
    (response) => {
      const popup = document.createElement('div');
      popup.className = 'popup-wrapper';
      popup.innerHTML = response.data;
      document.body.appendChild(popup);
      popup.addEventListener('click', handleClosePopup);
      if (popup.querySelector('.popup').classList.contains('popup--success')) {
        setTimeout(() => {
          handleClearForm();
          handleClosePopup();
        }, 2000);
      }
    },
    (error) => { console.error(error); },
  );

  return false;
};

smoothscroll.polyfill();
if (hasTouch) {
  document.body.classList.add('touchscreen');
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleLoad);

addEvent(DOWN_BUTTON_CLASSNAME, 'click', handleSkipPromo);
addEvent(UP_BUTTON_CLASSNAME, 'click', handleScrollUp);
addEvent(NAV_TOGGLE_ICON, 'click', handleToggleMenu);
addEvent(HEADER_NAV, 'click', handleNavigation);
addEvent(BTN_TERMS, 'click', handleGoToBtn);
addEvent(BTN_CONTACTS, 'click', handleGoToBtn);
addEvent('#region', 'change', handleRgionSelect);
addEvent('#contact-us-form', 'submit', handleSubmit);
