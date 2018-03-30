import { hasTouch } from 'detect-touch';

if (hasTouch) {
  document.body.classList.add('touchscreen');
}

console.log('test', hasTouch);
