'use strict'

const navButton = document.getElementById('navBtn');
navButton.addEventListener('click', showMenu);

function showMenu() {
  const burgerMenu = document.getElementById('nav');
  burgerMenu.classList.toggle('toggleMenu');
}

// items
const menu = [{
    id: 1,
    title: "Салат з авокадо",
    category: "Салати",
    price: 120,
    img: "./img-menu/menu-item.webp",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sunt! Voluptatem inventore dolor excepturi aperiam, laboriosam modi ab hic numquam."
  },
  {
    id: 2,
    title: "Meat",
    category: "Сніданки",
    price: 120,
    img: "./img-menu/menu-item.webp",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sunt! Voluptatem inventore dolor excepturi aperiam, laboriosam modi ab hic numquam."
  }

]

const sectionCenter = document.querySelector('.section__center')
const menuButtons = document.querySelector('.menu__buttons');

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu__item">
          <img src=${item.img} alt=${item.title} class="menu__img">
          <div class="menu__info">
            <header>
              <h3 class="menu__title">${item.title}</h3>
              <h3 class ="menu__price">${item.price}</h3>
            </header>
            <p class="menu__desc">
            ${item.desc}
            </p>
          </div>
        </article>`;
  })
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (value, item) {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ['Всі']
  );
  const buttonsCategory = categories.map(function (category) {
    return `<button class="buttons__filter" type="button" data-id="${category}">${category}</button>`
  }).join("");
  menuButtons.innerHTML = buttonsCategory;
  const buttonsFilter = document.querySelectorAll('.buttons__filter');

  // filter items
  buttonsFilter.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const category = event.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Всі") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}