'use strict';

async function getProjectsJson() {
  let response = await fetch('assets/projects/projects.json')
  return response.json();
}

const unlock = true;

const technologie_shields = {
  'html': "https://img.shields.io/badge/HTML5-E34F26?style=flat&amp;logo=html5&amp;logoColor=white",
  'css': 'https://img.shields.io/badge/CSS3-1572B6?style=flat&amp;logo=css3&amp;logoColor=white',
  'javascript': 'https://img.shields.io/badge/JavaScript-323330?style=flat&amp;logo=javascript&amp;logoColor=F7DF1E',
  'postgresql': 'https://img.shields.io/badge/-Postgresql-%232c3e50?style=flat&logo=Postgresql',
  'mysql': 'https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=ffffff',
  'redis': 'https://img.shields.io/badge/redis-%23DD0031.svg?&style=flat&logo=redis&logoColor=white',
  'python': 'https://img.shields.io/badge/-Python-386e9d?style=flat&logo=Python&logoColor=ffd241&',
  'fastapi': 'https://img.shields.io/badge/FastAPI-109989?style=flat&logo=fastapi&logoColor=white',
  'django': 'https://img.shields.io/badge/-Django-0aad48?style=flat&amp;logo=Django',
  'django-rest-framework': 'https://img.shields.io/badge/DRF-092E20?style=flat&logo=django&logoColor=white',
  'flask': 'https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white',
  'pyqt5': 'https://img.shields.io/badge/-PyQt5-09db1f?style=flat&amp;logo=PyQt5',
  'sqlalchemy': 'https://img.shields.io/badge/-sqlalchemy-4479A7?style=flat&amp;&amp;logoColor=ffffff',
  'aiogram': 'https://img.shields.io/badge/-Aiogram-blue?style=flat&amp;logo=',
  'java': 'https://img.shields.io/badge/Java-ED8B00?style=flat&amp;logo=java&amp;logoColor=white',
  'javafx': 'https://img.shields.io/badge/JavaFX-000000?style=flat&logo=javafx&logoColor=white',
  'docker': 'https://img.shields.io/badge/-Docker-46a2f1?style=flat&amp;logo=docker&amp;logoColor=white',
  'docker-compose': 'https://img.shields.io/badge/Docker%20Compose-2496ED?style=flat&logo=docker&logoColor=white',
  'go': 'https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white',
  'rabbitmq': 'https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=flat&logo=rabbitmq&logoColor=white',
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

const popupLinks = document.querySelectorAll(".popup-link");
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

}