'use strict';
var pageHeader = document.querySelector('.header');
var main = document.querySelector('.main');
var headerToggle = document.querySelector('.nav__toggle');

pageHeader.classList.remove('header--nojs');
main.classList.remove('main--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
    main.classList.remove('main--closed');
    main.classList.add('main--opened');
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
    main.classList.add('main--closed');
    main.classList.remove('main--opened');
  }
});
