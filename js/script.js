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
    "title": "Вівсяна каша з яблуками",
    "category": "Сніданки",
    "price": 105,
    "desc": "вівсяна каша на молоці, кориця, волоські горіхи, курага, ізюм, гарбузова насіння, вершкове масло, мед, свіжі яблука"
  },
  {
    "id": 1001,
    "title": "Скрамбл-тост з 3 яєць",
    "category": "Сніданки",
    "price": 120,
    "desc": "тостовий хліб, оливкова олія, курячі яйця, вершковий сир, мікс салату, в'ялені томати, кунжут"
  },
  {
    "id": 1002,
    "title": "Яйця Бенедикт",
    "category": "Сніданки",
    "price": 110,
    "desc": "житній хліб, хамон, бекон, куряче яйце, соус Голандез, мікс салату"
  },
  {
    "id": 1003,
    "title": "Яєчня по-мисливські",
    "category": "Сніданки",
    "price": 125,
    "desc": "куряче яйце, салямі, мисливські ковбаски, свіжий помідор, житній хліб, огірок свіжий, мікрогін"
  },
  {
    "id": 1004,
    "title": "Сирники з яблучно-грушевим тар-тар",
    "category": "Сніданки",
    "price": 115,
    "desc": "подаються зі сметаною"
  },
  {
    "id": 1005,
    "title": "Салат Цезар з креветкою ",
    "category": "Салати та закуски",
    "price": 185,
    "desc": ""
  },
  {
    "id": 1006,
    "title": "Салат Цезар з куркою",
    "category": "Салати та закуски",
    "price": 165,
    "desc": ""
  },
  {
    "id": 1007,
    "title": "Салат з ростбіфом",
    "category": "Салати та закуски",
    "price": 185,
    "desc": "ростбіф, сир фета, мікс салату, томати чері, соус зі смородини, кунжут, олія оливкова, чіпси чіабатта"
  },
  {
    "id": 1008,
    "title": "Салат з лососем та яйцем пашот",
    "category": "Салати та закуски",
    "price": 215,
    "desc": ""
  },
  {
    "id": 1009,
    "title": "Салат грецький",
    "category": "Салати та закуски",
    "price": 135,
    "desc": ""
  },
  {
    "id": 1010,
    "title": "Сендвіч з лососем",
    "category": "Салати та закуски",
    "price": 155,
    "desc": ""
  },
  {
    "id": 1011,
    "title": "Сендвіч з куркою",
    "category": "Салати та закуски",
    "price": 95,
    "desc": ""
  },
  {
    "id": 1012,
    "title": "М'ясна палітра",
    "category": "Салати та закуски",
    "price": 255,
    "desc": "салямі, пепероні, хамон, томати чері, мікс салату"
  },
  {
    "id": 1013,
    "title": "Сирна палітра",
    "category": "Салати та закуски",
    "price": 230,
    "desc": "сир гауда, пармезан, дор блю, песто червоний, песто зелений,  малининовий джем, томати чері"
  },
  {
    "id": 1014,
    "title": "Борщ український з тостами і беконом",
    "category": "Супи",
    "price": 85,
    "desc": "зі сметаною та гріками"
  },
  {
    "id": 1015,
    "title": "Бульйон курячий ",
    "category": "Супи",
    "price": 75,
    "desc": "куряче філе, корінь селери, морква, лапша, яйце перепелине"
  },
  {
    "id": 1016,
    "title": "Крем - суп зі шпинату",
    "category": "Супи",
    "price": 85,
    "desc": ""
  },
  {
    "id": 1017,
    "title": "Крем-суп з грибами",
    "category": "Супи",
    "price": 95,
    "desc": "печериці, вершки, чіпси чіабатта, гриби лисички, мікрогрін"
  },
  {
    "id": 1018,
    "title": "Локшина з морепродуктами",
    "category": "Основні страви",
    "price": 185,
    "desc": ""
  },
  {
    "id": 1019,
    "title": "Локшина з ростбіфом",
    "category": "Основні страви",
    "price": 170,
    "desc": ""
  },
  {
    "id": 1020,
    "title": "Локшина з куркою",
    "category": "Основні страви",
    "price": 145,
    "desc": ""
  },
  {
    "id": 1021,
    "title": "Скумбрія з копченою сметаною і печеною картоплею",
    "category": "Основні страви",
    "price": 295,
    "desc": ""
  },
  {
    "id": 1022,
    "title": "Креветки з гуакамоле",
    "category": "Основні страви",
    "price": 245,
    "desc": ""
  },
  {
    "id": 1023,
    "title": "Філе Міньйон з соусом Бордо на сіні з лаваша",
    "category": "Основні страви",
    "price": 275,
    "desc": ""
  },
  {
    "id": 1024,
    "title": "Свинина на кістці з маринованою червоною капустою",
    "category": "Основні страви",
    "price": 235,
    "desc": ""
  },
  {
    "id": 1025,
    "title": "Курка з соусом Дор-Блю",
    "category": "Основні страви",
    "price": 195,
    "desc": ""
  },
  {
    "id": 1026,
    "title": "Картопляне пюре",
    "category": "Гарніри",
    "price": 40,
    "desc": ""
  },
  {
    "id": 1027,
    "title": "Картопля фрі",
    "category": "Гарніри",
    "price": 55,
    "desc": ""
  },
  {
    "id": 1028,
    "title": "Овочі на пару",
    "category": "Гарніри",
    "price": 70,
    "desc": ""
  },
  {
    "id": 1029,
    "title": "Рис Жасмін",
    "category": "Гарніри",
    "price": 55,
    "desc": ""
  },
  {
    "id": 1030,
    "title": "Локшина домашня",
    "category": "Гарніри",
    "price": 40,
    "desc": "локшина відварна, вершкове масло, мікрогрін"
  },
  {
    "id": 1031,
    "title": "Чіз-кейк з малиною",
    "category": "Десерти",
    "price": 115,
    "desc": ""
  },
  {
    "id": 1032,
    "title": "Брауні",
    "category": "Десерти",
    "price": 95,
    "desc": ""
  },
  {
    "id": 1033,
    "title": "Медовик",
    "category": "Десерти",
    "price": 95,
    "desc": ""
  },
  {
    "id": 1034,
    "title": "Фруткова тарілка",
    "category": "Десерти",
    "price": 140,
    "desc": ""
  },
  {
    "id": 1039,
    "title": "Піца з лососем",
    "category": "Випічка",
    "price": 245,
    "desc": "лосось філе, сир моцарелла, сир рікотта, авокадо, базилік, соус вершковий"
  },
  {
    "id": 1040,
    "title": "Піца Баварська",
    "category": "Випічка",
    "price": 180,
    "desc": "ковбаски мисливські, салямі, сир моцарелла, печериці, соус "
  },
  {
    "id": 1041,
    "title": "Піца Цезарь",
    "category": "Випічка",
    "price": 195,
    "desc": "запечене філе курчати, бекон, сир пармезан, сир моцарелла, стиглі томати, мікс салату, соус вершковий"
  },
  {
    "id": 1042,
    "title": "Чіабатта темна",
    "category": "Випічка",
    "price": 15,
    "desc": ""
  },
  {
    "id": 1043,
    "title": "Чіабатта світла",
    "category": "Випічка",
    "price": 15,
    "desc": ""
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
              <h3 class ="menu__price">${item.price + " &#8372"}</h3>
            </header>
            <p class="menu__desc">
            ${item.desc}
            </p>
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
    "title": "Serbetli",
    "category": "STANDART",
    "price": 200
  },
  {
    "id": 1101,
    "title": "Alfakher",
    "category": "STANDART",
    "price": 200
  },
  {
    "id": 1102,
    "title": "Buta",
    "category": "STANDART",
    "price": 200
  },
  {
    "id": 1103,
    "title": "Fumari",
    "category": "PREMIUM",
    "price": 250
  },
  {
    "id": 1104,
    "title": "Dark Side",
    "category": "PREMIUM",
    "price": 300
  },
  {
    "id": 1105,
    "title": "Tangiers",
    "category": "PREMIUM",
    "price": 350
  },
  {
    "id": 1106,
    "title": "Starbuzz",
    "category": "PREMIUM",
    "price": 250
  },
  {
    "id": 1107,
    "title": "Grapefruit",
    "category": "BOWL & LIQUID",
    "price": 75
  },
  {
    "id": 1108,
    "title": "Orange",
    "category": "BOWL & LIQUID",
    "price": 75
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
  },
  {
    "id": 1112,
    "title": "Absinthe",
    "category": "BOWL & LIQUID",
    "price": 110
  },
  {
    "id": 1113,
    "title": "Mojito",
    "category": "BOWL & LIQUID",
    "price": 45
  },
  {
    "id": 1114,
    "title": "Liquor",
    "category": "BOWL & LIQUID",
    "price": 90
  }
]

const menuHookah = document.querySelector('.hookah__container');

window.addEventListener("DOMContentLoaded", function () {
  displayHookahItems(hookah);
});

function displayHookahItems(hookahItems) {
  let displayHookah = hookahItems.map(function (item) {
    return `<article class="hookah__item">
          <h3 class="menu__title">${item.title}</h3>
          <div class="divide-bottom"></div>
          <h3 class="menu__price"> ${
            item.price + " &#8372"}</h3>
        </article>`;
  })
  displayHookah = displayHookah.join("");
  menuHookah.innerHTML = displayHookah;
}


// ======================
// hookah menu
// ======================