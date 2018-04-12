import { hasTouch } from 'detect-touch';
import smoothscroll from 'smoothscroll-polyfill';

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

smoothscroll.polyfill();
if (hasTouch) {
  document.body.classList.add('touchscreen');
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

addEvent(DOWN_BUTTON_CLASSNAME, 'click', handleSkipPromo);
addEvent(UP_BUTTON_CLASSNAME, 'click', handleScrollUp);
addEvent(NAV_TOGGLE_ICON, 'click', handleToggleMenu);
addEvent(HEADER_NAV, 'click', handleNavigation);
addEvent(BTN_TERMS, 'click', handleGoToBtn);
addEvent(BTN_CONTACTS, 'click', handleGoToBtn);
