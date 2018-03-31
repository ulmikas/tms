import { hasTouch } from 'detect-touch';

const STICKY_HEADER_TRIGGER = 50;
const HEADER_CLASSNAME = 'navigation';
const STICKY_HEADER_CLASSNAME = 'fixed';

if (hasTouch) {
  document.body.classList.add('touchscreen');
}

const handleScroll = () => {
  const navigation = document.querySelector(`.${HEADER_CLASSNAME}`);
  const action = (window.scrollY >= STICKY_HEADER_TRIGGER) ? 'add' : 'remove';
  navigation.classList[action](STICKY_HEADER_CLASSNAME);
};

window.addEventListener('scroll', handleScroll);

console.log('test', hasTouch);
