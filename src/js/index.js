import { hasTouch } from 'detect-touch';

const STICKY_HEADER_TRIGGER = 50;
const STICKY_HEADER_HEIGHT = 108;
const STICKY_HEADER_CLASSNAME = 'fixed';
const HEADER_CLASSNAME = 'navigation';
const UP_BUTTON_CLASSNAME = '.arrow-up';

if (hasTouch) {
  document.body.classList.add('touchscreen');
}

const handleScroll = () => {
  const navigation = document.querySelector(`.${HEADER_CLASSNAME}`);
  const action = (window.scrollY >= STICKY_HEADER_TRIGGER) ? 'add' : 'remove';
  navigation.classList[action](STICKY_HEADER_CLASSNAME);
};

const handleScrollUp = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const handleSkipPromo = () => {
  const promoHeight = document.querySelector('.promo').clientHeight;
  window.scrollTo({ top: promoHeight - STICKY_HEADER_HEIGHT, left: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

const skipPromo = document.querySelector('.promo__arrow-down');
if (skipPromo) {
  skipPromo.addEventListener('click', handleSkipPromo);
}

const upArrow = document.querySelector(UP_BUTTON_CLASSNAME);
if (upArrow) {
  upArrow.addEventListener('click', handleScrollUp);
}

