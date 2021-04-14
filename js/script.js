'use strict'

const navButton = document.getElementById('navBtn');
navButton.addEventListener('click', showMenu);

function showMenu() {
  const burgerMenu = document.getElementById('nav');
  burgerMenu.classList.toggle('toggleMenu');
}
// item txt
const menu = [{
    "id": 1000,
    "title": "Вівсяна каша з яблуками",
    "category": "Сніданки",
    "price": "105 UAH",
    "desc": "вівсяна каша на молоці, кориця, волоські горіхи, курага, ізюм, гарбузова насіння, вершкове масло, мед, свіжі яблука"
  },
  {
    "id": 1001,
    "title": "Скрамбл-тост з 3 яєць",
    "category": "Сніданки",
    "price": "120 UAH",
    "desc": "тостовий хліб, оливкова олія, курячі яйця, вершковий сир, мікс салату, в'ялені томати, кунжут"
  },
  {
    "id": 1002,
    "title": "Яйця Бенедикт",
    "category": "Сніданки",
    "price": "110 UAH",
    "desc": "житній хліб, хамон, бекон, куряче яйце, соус Голандез, мікс салату"
  },
  {
    "id": 1003,
    "title": "Яєчня по-мисливські",
    "category": "Сніданки",
    "price": "125 UAH",
    "desc": "куряче яйце, салямі, мисливські ковбаски, свіжий помідор, житній хліб, огірок свіжий, мікрогін"
  },
  {
    "id": 1004,
    "title": "Сирники з яблучно-грушевим тар-тар",
    "category": "Сніданки",
    "price": "115 UAH",
    "desc": "подаються зі сметаною"
  },
  {
    "id": 1005,
    "title": "Салат Цезар з креветкою ",
    "category": "Салати",
    "price": "185 UAH",
    "desc": ""
  },
  {
    "id": 1006,
    "title": "Салат Цезар з куркою",
    "category": "Салати",
    "price": "165 UAH",
    "desc": ""
  },
  {
    "id": 1007,
    "title": "Салат з ростбіфом",
    "category": "Салати",
    "price": "185 UAH",
    "desc": "ростбіф, сир фета, мікс салату, томати чері, соус зі смородини, кунжут, олія оливкова, чіпси чіабатта"
  },
  {
    "id": 1008,
    "title": "Салат з лососем та яйцем пашот",
    "category": "Салати",
    "price": "215 UAH",
    "desc": ""
  },
  {
    "id": 1009,
    "title": "Салат грецький",
    "category": "Салати",
    "price": "135 UAH",
    "desc": ""
  },
  {
    "id": 1010,
    "title": "Сендвіч з лососем",
    "category": "Закуски",
    "price": "155 UAH",
    "desc": ""
  },
  {
    "id": 1011,
    "title": "Сендвіч з куркою",
    "category": "Закуски",
    "price": "95 UAH",
    "desc": ""
  },
  {
    "id": 1012,
    "title": "М'ясна палітра",
    "category": "Закуски",
    "price": "255 UAH",
    "desc": "салямі, пепероні, хамон, томати чері, мікс салату"
  },
  {
    "id": 1013,
    "title": "Сирна палітра",
    "category": "Закуски",
    "price": "230 UAH",
    "desc": "сир гауда, пармезан, дор блю, песто червоний, песто зелений,  малининовий джем, томати чері"
  },
  {
    "id": 1014,
    "title": "Борщ український з тостами і беконом",
    "category": "Супи",
    "price": "85 UAH",
    "desc": "зі сметаною та гріками"
  },
  {
    "id": 1015,
    "title": "Бульйон курячий ",
    "category": "Супи",
    "price": "75 UAH",
    "desc": "куряче філе, корінь селери, морква, лапша, яйце перепелине"
  },
  {
    "id": 1016,
    "title": "Крем - суп зі шпинату",
    "category": "Супи",
    "price": "85 UAH",
    "desc": ""
  },
  {
    "id": 1017,
    "title": "Крем-суп з грибами",
    "category": "Супи",
    "price": "95 UAH",
    "desc": "печериці, вершки, чіпси чіабатта, гриби лисички, мікрогрін"
  },
  {
    "id": 1018,
    "title": "Локшина з морепродуктами",
    "category": "Локшина",
    "price": "185 UAH",
    "desc": ""
  },
  {
    "id": 1019,
    "title": "Локшина з ростбіфом",
    "category": "Локшина",
    "price": "170 UAH",
    "desc": ""
  },
  {
    "id": 1020,
    "title": "Локшина з куркою",
    "category": "Локшина",
    "price": "145 UAH",
    "desc": ""
  },
  {
    "id": 1021,
    "title": "Скумбрія з копченою сметаною і печеною картоплею",
    "category": "Основні страви",
    "price": "295 UAH",
    "desc": ""
  },
  {
    "id": 1022,
    "title": "Креветки з гуакамоле",
    "category": "Основні страви",
    "price": "245 UAH",
    "desc": ""
  },
  {
    "id": 1023,
    "title": "Філе Міньйон з соусом Бордо на сіні з лаваша",
    "category": "Основні страви",
    "price": "275 UAH",
    "desc": ""
  },
  {
    "id": 1024,
    "title": "Свинина на кістці з маринованою червоною капустою",
    "category": "Основні страви",
    "price": "235 UAH",
    "desc": ""
  },
  {
    "id": 1025,
    "title": "Курка з соусом Дор-Блю",
    "category": "Основні страви",
    "price": "195 UAH",
    "desc": ""
  },
  {
    "id": 1026,
    "title": "Картопляне пюре",
    "category": "Гарніри",
    "price": "40 UAH",
    "desc": ""
  },
  {
    "id": 1027,
    "title": "Картопля фрі",
    "category": "Гарніри",
    "price": "55 UAH",
    "desc": ""
  },
  {
    "id": 1028,
    "title": "Овочі на пару",
    "category": "Гарніри",
    "price": "70 UAH",
    "desc": ""
  },
  {
    "id": 1029,
    "title": "Рис Жасмін",
    "category": "Гарніри",
    "price": "55 UAH",
    "desc": ""
  },
  {
    "id": 1030,
    "title": "Локшина домашня",
    "category": "Гарніри",
    "price": "40 UAH",
    "desc": "локшина відварна, вершкове масло, мікрогрін"
  },
  {
    "id": 1031,
    "title": "Чіз-кейк з малиною",
    "category": "Десерти",
    "price": "115 UAH",
    "desc": ""
  },
  {
    "id": 1032,
    "title": "Брауні",
    "category": "Десерти",
    "price": "95 UAH",
    "desc": ""
  },
  {
    "id": 1033,
    "title": "Медовик",
    "category": "Десерти",
    "price": "95 UAH",
    "desc": ""
  },
  {
    "id": 1034,
    "title": "Фруткова тарілка",
    "category": "Десерти",
    "price": "140 UAH",
    "desc": ""
  },
  {
    "id": 1035,
    "title": "Соус зі смородини",
    "category": "Соуси",
    "price": "30 UAH",
    "desc": ""
  },
  {
    "id": 1036,
    "title": "Соус дор-блю",
    "category": "Соуси",
    "price": "30 UAH",
    "desc": ""
  },
  {
    "id": 1037,
    "title": "Соус тар-тар",
    "category": "Соуси",
    "price": "30 UAH",
    "desc": ""
  },
  {
    "id": 1038,
    "title": "Аджика",
    "category": "Соуси",
    "price": "30 UAH",
    "desc": ""
  },
  {
    "id": 1039,
    "title": "Піца з лососем",
    "category": "Піца",
    "price": "245 UAH",
    "desc": "лосось філе, сир моцарелла, сир рікотта, авокадо, базилік, соус вершковий"
  },
  {
    "id": 1040,
    "title": "Піца Баварська",
    "category": "Піца",
    "price": "180 UAH",
    "desc": "ковбаски мисливські, салямі, сир моцарелла, печериці, соус "
  },
  {
    "id": 1041,
    "title": "Піца Цезарь",
    "category": "Піца",
    "price": "195 UAH",
    "desc": "запечене філе курчати, бекон, сир пармезан, сир моцарелла, стиглі томати, мікс салату, соус вершковий"
  },
  {
    "id": 1042,
    "title": "Чіабатта темна",
    "category": "Хліб",
    "price": "15 UAH",
    "desc": ""
  },
  {
    "id": 1043,
    "title": "Чіабатта світла",
    "category": "Хліб",
    "price": "15 UAH",
    "desc": ""
  },
  {
    "id": 1044,
    "title": "Грінки з пармезаном",
    "category": "До пива",
    "price": "35 UAH",
    "desc": ""
  },
  {
    "id": 1045,
    "title": "Моцарелла з фрі з соусом тар-тар",
    "category": "До пива",
    "price": "155 UAH",
    "desc": ""
  },
  {
    "id": 1046,
    "title": "Курячі крильця в соусі BBQ",
    "category": "До пива",
    "price": "115 UAH",
    "desc": ""
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
            <header>
              <h3 class="menu__title">${item.title}</h3>
              <h3 class ="menu__price">${item.price}</h3>
            </header>
            <p class="menu__desc">
            ${item.desc}
            </p>
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