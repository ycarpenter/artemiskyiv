'use strict'
// ===============
// burger menu
// ===============
const navButton = document.getElementById('navBtn');
const burgerMenu = document.getElementById('nav');
const navMenu = document.getElementById('nav-menu');

function closeMenu() {
  burgerMenu.classList.remove('toggleMenu');
}

navButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('toggleMenu');
});

navMenu.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('nav__link')) {
    closeMenu();
  }
});




// ===============
// end burger menu
// ===============

// ====================
// button on home page
// ====================
const menuBtn = document.querySelector('.button__menu');
menuBtn.addEventListener('click', function () {
  location.href = "#section-menu"
});

const reservedBtn = document.querySelector(".button__reserved");
reservedBtn.addEventListener('click', function () {
  location.href = "#reserved"
});

// ====================
// end button on home page
// ====================


// ===============
// menu 
// ===============

// item txt
const menu = [{
    "id": 1000,
    "title": "Салат з овочів та листя салату з крем- фетою та горіхами",
    "category": "Стартери та салати",
    "price": "140  ₴"
  },
  {
    "id": 1001,
    "title": "Салат Цезар з креветками",
    "category": "Стартери та салати",
    "price": "220  ₴"
  },
  {
    "id": 1002,
    "title": "Салат Цезар з куркою",
    "category": "Стартери та салати",
    "price": "180  ₴"
  },
  {
    "id": 1003,
    "title": "Гуакамоле з лососем,  міксом зелені та овочів",
    "category": "Стартери та салати",
    "price": "240  ₴"
  },
  {
    "id": 1004,
    "title": "Ростбіф з запеченими баклажанами та “Вітелло тонато”",
    "category": "Стартери та салати",
    "price": "270  ₴"
  },
  {
    "id": 1005,
    "title": "Мікс томатів з домашнім сиром та беконом",
    "category": "Стартери та салати",
    "price": "170  ₴"
  },
  {
    "id": 1006,
    "title": "Форшмак з підсмаженим хлібом",
    "category": "Стартери та салати",
    "price": "160  ₴"
  },
  {
    "id": 1007,
    "title": "Картопляні оладки з лососем та крем-фреш",
    "category": "Стартери та салати",
    "price": "180  ₴"
  },
  {
    "id": 1008,
    "title": "Карпаччо з телятини з перцевим соусом та ароматом трюфеля",
    "category": "Стартери та салати",
    "price": "300  ₴"
  },
  {
    "id": 1009,
    "title": "Мікс печених овочів з горіховим соусом та зеленню",
    "category": "Стартери та салати",
    "price": "160  ₴"
  },
  {
    "id": 1010,
    "title": "Хрусткі креветки з цитрусовим айолі",
    "category": "Стартери та салати",
    "price": "190  ₴"
  },
  {
    "id": 1011,
    "title": "Моцарелла фреска з песто та фермерскими томатами",
    "category": "Стартери та салати",
    "price": "189  ₴"
  },
  {
    "id": 1012,
    "title": "Сет італійскіх сирів з сезонним джемом та ягодами",
    "category": "Плато антіпасті",
    "price": "390  ₴"
  },
  {
    "id": 1013,
    "title": "Брускетти з перцем та горгонзолою",
    "category": "Плато антіпасті",
    "price": "110  ₴"
  },
  {
    "id": 1014,
    "title": "Брускетти з прошутто",
    "category": "Плато антіпасті",
    "price": "120  ₴"
  },
  {
    "id": 1015,
    "title": "Брускетти з лососем",
    "category": "Плато антіпасті",
    "price": "140  ₴"
  },
  {
    "id": 1016,
    "title": "Брускетти з томатами",
    "category": "Плато антіпасті",
    "price": "95  ₴"
  },
  {
    "id": 1017,
    "title": "Плато антіпасті",
    "category": "Плато антіпасті",
    "price": "490  ₴"
  },
  {
    "id": 1018,
    "title": "Борщ з реберцями та пампушками",
    "category": "Супи",
    "price": "120  ₴"
  },
  {
    "id": 1019,
    "title": "Бульон з  курки та домашною локшиною",
    "category": "Супи",
    "price": "90  ₴"
  },
  {
    "id": 1020,
    "title": "Сезонний крем-суп *",
    "category": "Супи",
    "price": "95  ₴"
  },
  {
    "id": 1021,
    "title": "Мінестроне з овочів та червоним  песто",
    "category": "Супи",
    "price": "120  ₴"
  },
  {
    "id": 1022,
    "title": "Середземноморська юшка",
    "category": "Супи",
    "price": "190  ₴"
  },
  {
    "id": 1023,
    "title": "Ребра BBQ в азіатському маринаді ",
    "category": "Основні страви",
    "price": "230  ₴"
  },
  {
    "id": 1024,
    "title": "Ошийок у паніровці із соусом з печеної паприки",
    "category": "Основні страви",
    "price": "220  ₴"
  },
  {
    "id": 1025,
    "title": "Запечений філе міньон  з картопляним пюре та лісовими грибами",
    "category": "Основні страви",
    "price": "350  ₴"
  },
  {
    "id": 1026,
    "title": "Медальйони з телятини в соусі Porcini та сирним броколі",
    "category": "Основні страви",
    "price": "365  ₴"
  },
  {
    "id": 1027,
    "title": "Фірмовий бургер з відбірної яловичини з картоплею фрі",
    "category": "Основні страви",
    "price": "210  ₴"
  },
  {
    "id": 1028,
    "title": "Стейк із лосося з шпинатом та горіхами",
    "category": "Основні страви",
    "price": "360  ₴"
  },
  {
    "id": 1029,
    "title": "Стейк рібай* у винному соусі",
    "category": "Основні страви",
    "price": "180  ₴"
  },
  {
    "id": 1030,
    "title": "Філе курчати у місо-маринаді у морквяно-кокосовому пюре",
    "category": "Основні страви",
    "price": "190  ₴"
  },
  {
    "id": 1031,
    "title": "Качина грудка з фруктовим чатні",
    "category": "Основні страви",
    "price": "310  ₴"
  },
  {
    "id": 1032,
    "title": "Котлета з курки та картопляне пюре",
    "category": "Основні страви",
    "price": "150  ₴"
  },
  {
    "id": 1033,
    "title": "Філе дорадо по сицілійскі — з овочами та картоплею",
    "category": "Основні страви",
    "price": "290  ₴"
  },
  {
    "id": 1034,
    "title": "Мідії у винно-вершковому соусі",
    "category": "Основні страви",
    "price": "219  ₴"
  },
  {
    "id": 1035,
    "title": "Смажена рибка з картоплею та соусом “тар-тар”",
    "category": "Основні страви",
    "price": "150  ₴"
  },
  {
    "id": 1036,
    "title": "Спагетті карбонара",
    "category": "Паста та Різотто",
    "price": "160  ₴"
  },
  {
    "id": 1037,
    "title": "Тальятеле чотири сири",
    "category": "Паста та Різотто",
    "price": "180  ₴"
  },
  {
    "id": 1038,
    "title": "Паста з грибами, ростбіфом та ароматом трюфеля",
    "category": "Паста та Різотто",
    "price": "190  ₴"
  },
  {
    "id": 1039,
    "title": "Чорні спагеті з дарунками моря",
    "category": "Паста та Різотто",
    "price": "290  ₴"
  },
  {
    "id": 1040,
    "title": "Різотто з креветками та шафраном",
    "category": "Паста та Різотто",
    "price": "300  ₴"
  },
  {
    "id": 1041,
    "title": "Різотто з білими грибами",
    "category": "Паста та Різотто",
    "price": "190  ₴"
  },
  {
    "id": 1042,
    "title": "Шпинат з вершками",
    "category": "Гарнір",
    "price": "120  ₴"
  },
  {
    "id": 1043,
    "title": "Печені овочі з часником та соусом “балзамік”",
    "category": "Гарнір",
    "price": "120  ₴"
  },
  {
    "id": 1044,
    "title": "Кус-кус з овочами",
    "category": "Гарнір",
    "price": "90  ₴"
  },
  {
    "id": 1045,
    "title": "Картопля фрі",
    "category": "Гарнір",
    "price": "70  ₴"
  },
  {
    "id": 1046,
    "title": "Картопляне пюре",
    "category": "Гарнір",
    "price": "70  ₴"
  },
  {
    "id": 1047,
    "title": "Рис паровий",
    "category": "Гарнір",
    "price": "60  ₴"
  },
  {
    "id": 1048,
    "title": "Маргарита",
    "category": "Піца",
    "price": "190  ₴"
  },
  {
    "id": 1049,
    "title": "Кватро формаджі",
    "category": "Піца",
    "price": "260  ₴"
  },
  {
    "id": 1050,
    "title": "Піца з виноградом та горгонзолою",
    "category": "Піца",
    "price": "220  ₴"
  },
  {
    "id": 1051,
    "title": "Фірмова з ростбіфом та руколою ",
    "category": "Піца",
    "price": "270  ₴"
  },
  {
    "id": 1052,
    "title": "Штрудель з яблуками",
    "category": "Десерти ",
    "price": "100  ₴"
  },
  {
    "id": 1053,
    "title": "Чізкейк",
    "category": "Десерти ",
    "price": "150  ₴"
  },
  {
    "id": 1054,
    "title": "Фруктове асорті",
    "category": "Десерти ",
    "price": "250  ₴"
  }
]

const menuContainer = document.querySelector('.menu__container');
const menuButtons = document.querySelector('.menu__buttons');

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu__item">
            <header>
              <h3 class="menu__title">${item.title}</h3>
              <div class="divide-bottom"></div>
              <h3 class ="menu__price">${item.price}</h3>
            </header>
        </article>`;
  })
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
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
    return `<button class="button button__filter" type="button" data-id="${category}">${category}</button>`
  }).join("");
  menuButtons.innerHTML = buttonsCategory;
  const buttonsFilter = document.querySelectorAll('.button__filter');

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
// ===============
// end menu 
// ===============


// ===================
// button back to top
// ===================
const scroll = document.getElementById('topBtn');

window.addEventListener('scroll', function () {
  scroll.classList.toggle("active", window.scrollY > 500);
})

scroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

// ======================
// end button back to top
// ======================

// ======================
// hookah menu
// ======================
const hookah = [{
    "id": 1100,
    "title": "Jibiar",
    "category": "STANDART",
    "price": 300
  },
  {
    "id": 1101,
    "title": "Alfakher",
    "category": "STANDART",
    "price": 300
  },
  {
    "id": 1102,
    "title": "Basio",
    "category": "STANDART",
    "price": 300
  },
  {
    "id": 1103,
    "title": "Daily Hookah",
    "category": "PREMIUM",
    "price": 400
  },
  {
    "id": 1104,
    "title": "Dark Side",
    "category": "PREMIUM",
    "price": 400
  },
  {
    "id": 1107,
    "title": "Grapefruit",
    "category": "BOWL & LIQUID",
    "price": 70
  },
  {
    "id": 1108,
    "title": "Orange",
    "category": "BOWL & LIQUID",
    "price": 50
  },
  {
    "id": 1109,
    "title": "Juice",
    "category": "BOWL & LIQUID",
    "price": 30
  },
  {
    "id": 1110,
    "title": "Milk",
    "category": "BOWL & LIQUID",
    "price": 30
  },
  {
    "id": 1111,
    "title": "Wine",
    "category": "BOWL & LIQUID",
    "price": 60
  }
];

const menuHookah = document.querySelector('.hookah__container');

window.addEventListener("DOMContentLoaded", function () {
  displayHookahItems(hookah);
});

function displayHookahItems(hookahItems) {
  let displayHookah = hookahItems.map(function (item) {
    return `<article class="hookah__item">
              <h3 class="menu__title">${item.title}</h3>
              <div class="divide-bottom"></div>
              <h3 class="menu__price"> ${item.price + " &#8372"}</h3>
        </article>`;
  })
  displayHookah = displayHookah.join("");
  menuHookah.innerHTML = displayHookah;
}


// ======================
// hookah menu
// ======================