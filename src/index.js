const icon = document.querySelector('.start__choose-icon');
const more = document.querySelector('.start__contact-link');
const active = document.querySelector('.start__contact-item-text');

more.addEventListener('click', addMore);

function addMore() {
  active.classList.toggle('visually-hidden');
  icon.classList.toggle('start__choose-icon-active');
}
const icon2 = document.querySelector('.start__choose-icon-2');
const more2 = document.querySelector('.start__contact-link-2');
const active2 = document.querySelector('.start__contact-item-text-2');

more2.addEventListener('click', addMore2);

function addMore2() {
  active2.classList.toggle('visually-hidden');
  icon2.classList.toggle('start__choose-icon-active');
}
const icon3 = document.querySelector('.start__choose-icon-3');
const more3 = document.querySelector('.start__contact-link-3');
const active3 = document.querySelector('.start__contact-item-text-3');

more3.addEventListener('click', addMore3);

function addMore3() {
  active3.classList.toggle('visually-hidden');
  icon3.classList.toggle('start__choose-icon-active');
}
