'use strict';

async function getProjectsJson() {
  let response = await fetch('assets/projects/projects.json')
  return response.json();
}

const unlock = true;

const technologie_shields = {
  'python': 'https://img.shields.io/badge/-Python-386e9d?style=flat&logo=Python&logoColor=ffd241',
  'java': 'https://img.shields.io/badge/Java-ED8B00?style=flat&amp;logo=java&amp;logoColor=white',
  'go': 'https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white',

  'fastapi': 'https://img.shields.io/badge/FastAPI-109989?style=flat&logo=fastapi&logoColor=white',
  'flask': 'https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white',
  'django': 'https://img.shields.io/badge/-Django-092E20?style=flat&logo=Django&logoColor=white',
  'drf': 'https://img.shields.io/badge/-DRF-0C4B33?style=flat&logo=Django&logoColor=white',
  'aiohttp': 'https://img.shields.io/badge/-aiohttp-005571?style=flat&logo=aiohttp&logoColor=white',

  'mysql': 'https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=MySQL&logoColor=white',
  'postgresql': 'https://img.shields.io/badge/-Postgresql-%232c3e50?style=flat&logo=Postgresql',
  'redis': 'https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=Redis&logoColor=white',
  'elasticsearch': 'https://img.shields.io/badge/-Elasticsearch-005571?style=flat&logo=Elasticsearch&logoColor=white',
  'sqlalchemy': 'https://img.shields.io/badge/-SQLAlchemy-7BAC41?style=flat&logo=SQLAlchemy&logoColor=white',

  'html': "https://img.shields.io/badge/HTML5-E34F26?style=flat&amp;logo=html5&amp;logoColor=white",
  'css': 'https://img.shields.io/badge/CSS3-1572B6?style=flat&amp;logo=css3&amp;logoColor=white',
  'javascript': 'https://img.shields.io/badge/JavaScript-323330?style=flat&amp;logo=javascript&amp;logoColor=F7DF1E',

  'rabbitmq': 'https://img.shields.io/badge/-RabbitMQ-FF6600?style=flat&logo=RabbitMQ&logoColor=white',
  
  'docker': 'https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=Docker&logoColor=white',
  'docker-compose': 'https://img.shields.io/badge/-Docker_Compose-2496ED?style=flat&logo=Docker&logoColor=white',
  
  'pyqt5': 'https://img.shields.io/badge/-PyQt5-41CD52?style=flat&logo=Qt&logoColor=white',
  'aiogram': 'https://img.shields.io/badge/-Aiogram-0088cc?style=flat&logo=Telegram&logoColor=white',
  'javafx': 'https://img.shields.io/badge/-JavaFX-007396?style=flat&logo=JavaFX&logoColor=white',
}

function funonload() {
  getProjectsJson().then(data => {
    let project_data = data;
    addInfoOfProject(project_data);
  });
}

// window.onload = funonload;

const body = document.querySelector("body");

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.id.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {
    console.log(selectedValue, filterItems[i].dataset.category)
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.id.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// popups

/* const popupLinks = document.querySelectorAll(".popup-link");
console.log(popupLinks)

for (let index = 0; index < popupLinks.length; index++) {
  const popupLink = popupLinks[index];
  popupLink.addEventListener("click", function (event) {
    event.preventDefault();
    const popupName = popupLink.getAttribute("href").replace("#", "");
    const curentPopup = document.getElementById(popupName);

    console.log(popupLink.querySelector(".project-title").innerHTML)

    getProjectsJson().then(data => {
      let project_data = data[popupLink.querySelector(".project-title").innerHTML];
      popupOpen(curentPopup, project_data);
    });
  });
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
for (let i = 0; i < popupCloseIcon.length; i++) {
  const el = popupCloseIcon[i];
  el.addEventListener("click", function (event) {
    popupClose(el.closest(".popup"));
    event.preventDefault();
  });
}

function popupOpen(curentPopup, project_data) {
  console.log(project_data)
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    projectDescription(curentPopup, project_data);

    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function projectDescription(curentPopup, project_data) {
  curentPopup.querySelector(".popup__title").getElementsByTagName(
    "h3")[0].innerHTML = project_data.name;
  curentPopup.querySelector(".popup__text").innerHTML = project_data.description;
  // curentPopup.querySelector(".popup__image").src = "../assets/images/project-" +
    project_data.category + "-" + project_data.name + ".png";
  curentPopup.querySelector(".popup__github").href = project_data.github;
  let service_item_icon = curentPopup.querySelector(".service-item-icon");
  let img;
  let technologie;
  for (let i = 0; i < project_data.technologies.length; i++) {
    img = document.createElement("img");
    technologie = project_data.technologies[i];
    img.src = technologie_shields[technologie];
    img.alt = technologie;
    service_item_icon.appendChild(img);
  }
}

function popupClose(popupActive, doUnlock = true) {
  popupActive.classList.remove("open");
  popupActive.querySelector(".service-item-icon").innerHTML = "";
  bodyUnlock();
}

function bodyLock() {
  body.classList.add("lock");
}

function bodyUnlock() {
  body.classList.remove("lock");
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

function addInfoOfProject(data) {
  let project_list = document.getElementsByClassName("project-list")[0]; 

  let keys = Object.keys(data);
  for (let index = 0; index < keys.length; index++) {
    const project = data[keys[index]];
    project_list.innerHTML += `
    <li class="project-item  active" data-filter-item data-category="${project.category}">
      <a href="#popup-project" class="popup-link">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="./assets/images/project-${project.category}-${project.name}.png" alt="${project.name}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.name}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    </li>
    `;
  }

} */



//Динамическая генерация проектов

//1) создать класс карточки и модального окна
//2) получить колличество карточек с сервера
//3) пробежаться по циклу длинной в кол-во карточек 
//4) в кажом цикле заполнять новую карточку, модальное окно и парсить его в верстку

/* const hideCard = document.querySelectorAll('.project-item');

hideCard.forEach(item => {
  item.remove();
}) */

class Card {
  constructor(img, category, name, descr) {
    this.img = img;
    this.category = category;
    this.name = name;
    this.descr = descr;
  }

  createNewCard() {
    const projectList = document.querySelector('.project-list');

    projectList.innerHTML += `
    <li class="project-item  active" data-filter-item="" data-category="${this.category}">
      <a href="#popup-project" class="popup-link">

        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline" role="img" class="md hydrated" aria-label="eye outline"></ion-icon>
          </div>

          <img src=${this.img} alt="Doc search" loading="lazy">
        </figure>

        <h3 class="project-title">${this.name}</h3>

        <p class="project-category">${this.descr}</p>

      </a>
    </li>
    `
  }

}


class Modal {
  constructor(name, descr, link, more) {
    this.name = name;
    this.descr = descr;
    this.github = link;
    this.img = more;
  }

  createNewModal() {
    const popup = document.createElement('div')

    popup.id = "popup-project";
    popup.classList.add('popup')

    popup.innerHTML = `
    <div class="popup__main">
      <div class="popup__body">
        <div class="popup__content">
          <a href="#" class="popup__close close-popup">
            <ion-icon name="close-circle-outline"></ion-icon>
          </a>
          <div class="popup__title">
            <h3>${this.name}</h3>
          </div>
          <!-- <img src="" alt="" class="popup__image" loading="lazy"> -->
          <section class="service">

            <h3 class="h3 service-title">Cтэк технологий</h3>

            <div class="service-list">
              <div class="service-item">
                <div class="service-content-box">
                  <div class="service-item-icon"></div>
                </div>
              </div>
            </div>

          </section>
          <div class="popup__text">${this.descr}</div>
          <a href=${this.github} class="popup__github social-link" target="_blank">
            <p>GitHub&nbsp;</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="popup_bottom_void"></div>
    </div>
    `

    for (let key in this.img) {
      const stack = document.createElement('img'),
            icon = popup.querySelector('.service-item-icon');

      stack.src = this.img[key];

      icon.append(stack);
    }

    document.documentElement.append(popup);
    return popup;
    
    /* this.img.forEach((img) => {
      const stack = document.createElement('img'),
            icon = popup.querySelector('.service-item-icon');

      stack.src = img;
      

      icon.append(stack);
      
    }) */
    

    
    
  }
}

function KeepCardsWithThisDataOnly(id) {
  const dataAtr = document.querySelectorAll('.project-item');

  dataAtr.forEach(item => {
    if (item.getAttribute('data-category') != id){
      item.classList.remove('active');        
    }
  })

}

function takeActiveAllCards() {
  const cards = document.querySelectorAll('.project-item');

  cards.forEach(item => {
    item.classList.add('active');
  })

}

function showCategory() {
  const category = document.querySelector('.filter-list')

  category.addEventListener('click', (e) => {
    if (e.target && e.target.getAttribute('data-filter-btn') == '') {
      if (e.target.id == 'api') {
        takeActiveAllCards();
        KeepCardsWithThisDataOnly('api');
      } else if(e.target.id == 'bot') {
        takeActiveAllCards()
        KeepCardsWithThisDataOnly('bot');
      } else if(e.target.id == 'app') {
        takeActiveAllCards();
        KeepCardsWithThisDataOnly('app');
      } else if(e.target.id == 'all') {
        takeActiveAllCards();
      }
    }
  })
}

const request = new XMLHttpRequest();

request.open('GET','assets/projects/projects.json');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();

request.addEventListener('load', () => {
    if (request.status == 200) {
      let response = JSON.parse(request.response);

      const hideCard = document.querySelectorAll('.project-item');

      hideCard.forEach(item => {
        item.remove();
      })

      let modalContainer = [],
          i = 0;
      for (let key in response) {
        const newCard = new Card(response[key].img, response[key].category, response[key].name, response[key].descr);
        newCard.createNewCard();
        const newModal = new Modal(response[key].name, response[key].description, response[key].github, response[key].stack);
        newModal.createNewModal();
        /* modalContainer.push(document.querySelector('.popup'));
        i++; */
        /* console.log(document.querySelectorAll('#popup-project')); */
        
      }
      document.querySelectorAll('.popup').forEach(item => {
        modalContainer.push(item)
      })
      
      

      document.querySelector('.project-list').addEventListener('click', (e) => {
        
        if (!e.target.classList.contains('project-list')) {
          const card = document.querySelectorAll('.project-item');
          card.forEach((item, i) => {
            if (item.contains(e.target) || e.target.classList.contains('md')) {
              modalContainer[i].classList.add('open');
              
            } 
          })
        }
        
      })

      document.documentElement.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('md') || e.target.classList.contains('popup')) {
          modalContainer.forEach(item => {
            item.classList.remove('open');
          })
        }
      })

      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' ){
          modalContainer.forEach(item => {
            item.classList.remove('open');
          })
        }
    })

      

      showCategory()
      
    } else {
      document.querySelector('.project-list').innerHTML= `
        Что-то пошло не так
      `
      document.querySelector('.project-list').style.color = 'white';
    }
})



