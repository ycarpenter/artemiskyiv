'use strict'

const navButton = document.getElementById('navBtn');
navButton.addEventListener('click', showMenu);

function showMenu() {
  const burgerMenu = document.getElementById('nav');
  burgerMenu.classList.toggle('toggleMenu');
}