const certificates_section = document.querySelector(".certificates");

certificates_section.innerHTML =
`
<header>
<h2 class="h2 article-title">Certificates</h2>
</header>

<section class="projects">

  <ul class="filter-list" data-filter-list>

    <li class="filter-item">

      <button class="active" data-filter-btn-video>
        All
      </button>

    </li>

  </ul>

  <div class="filter-select-box">

    <button class="filter-select" data-select-video>

      <div class="select-value" data-select-value-video>
        Select category
      </div>

      <div class="select-icon">
        <ion-icon name="chevron-down"></ion-icon>
      </div>

    </button>

    <ul class="select-list" data-select-list>

      <li class="select-item">

        <button data-select-item-video>
          All
        </button>

      </li>

    </ul>

  </div>

  <ul class="project-list" data-canvas-list>

  </ul>

</section>


<div class="modal-container" data-canvas-container>

  <div class="overlay" data-overlay>
  </div>

  <section class="testimonials-modal">

    <button class="modal-close-btn" data-canvas-close-btn>
      <ion-icon name="close-outline"></ion-icon>
    </button>

    <div class="modal-img-wrapper">
      <figure class="modal-avatar-box">
      <!--<img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-canvas-img>-->
      </figure>

      <img src="./assets/images/icon-quote.svg" alt="quote icon">
    </div>

    <div class="modal-content">

      <h4 class="h3 modal-title" data-canvas-title></h4>

      <time datetime="2021-06-14" data-canvas-time></time>
      <div data-modal-text>
        <img src="#" width="100%" data-canvas-img>
        <a href="#" target="_blank" data-canvas-url>
          <button class="credential-btn">
            Show credentials<ion-icon name="exit-outline"></ion-icon>
          </button>
        </a>
      <!--<iframe  width="80%" allowfullscreen="true" allowscriptaccess="always" frameborder="0" src="https://www.youtube.com/embed/Eaj7pNeIQhs" data-canvas-video>
        </iframe>-->
      </div>

    </div>

  </section>

</div>
`;

const certificates_canvasList = certificates_section.querySelector("[data-canvas-list]");
const certificates_filterList = certificates_section.querySelector("[data-filter-list]");
const certificates_selectList = certificates_section.querySelector("[data-select-list]");

certificates_items = [
  {"url":"https://www.credly.com/badges/b4c56cfc-2293-4d97-a09f-cd73a3dc7b0e/linked_in_profile",
  "thumbnail":"assets/certificates/AWS Certified Cloud Practitioner certificate.jpg",
  "title":"AWS Certified Cloud Practitioner (CLF)",
  "category":"Amazon Web Services (AWS)",
  "time":"Issued Jun 2023 · Expires Jun 2026",
  "background":"white"},
  {"url":"https://www.credly.com/badges/f5bc36cd-5f7e-4461-8db9-ab8dca322fe1/linked_in_profile",
  "thumbnail":"assets/certificates/AWS Certified Machine Learning - Specialty certificate.jpg",
  "title":"AWS Certified Machine Learning - Specialty (MLS)",
  "category":"Amazon Web Services (AWS)",
  "time":"Issued Aug 2023 · Expires Aug 2026",
  "background":"white"},
  {"url":"https://graduation.udacity.com/confirm/TGPZQQ7H",
  "thumbnail":"assets/certificates/9ec34961-e7c0-4d8e-affa-c9c60e3c0457.jpg",
  "title":"AWS Machine Learning Foundations",
  "category":"Udacity",
  "time":"Issued Oct 2021",
  "background":"white"},
  {"url":"https://graduation.udacity.com/confirm/LAP4JCEX",
  "thumbnail":"assets/certificates/e7ee9d0d-db95-4ba7-a1f0-d50be0904c5d.jpg",
  "title":"Advanced Data Analysis Nanodegree",
  "category":"Udacity",
  "time":"Issued Jul 2021",
  "background":"white"},
  {"url":"https://graduation.udacity.com/confirm/QJRXEFH7",
  "thumbnail":"assets/certificates/1f53571f-d9e4-44df-a6c5-3853c38c343f.jpg",
  "title":"Machine Learning Engineer Nanodegree",
  "category":"Udacity",
  "time":"Issued Jul 2021",
  "background":"white"},
];
  

  



var certificates_categories = _.keys(_.countBy(certificates_items, function(certificates_item) { return certificates_item.category; }))


function certificates_textFunc(value){
  // console.log(value)
  text =  `<li class="project-item  active" data-filter-item-video data-category="${value.category}">
        <a href="#" data-videos-item data-url="${value.url}" data-time="${value.time}">
        
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
        
            <img src="${value.thumbnail}" alt="${value.category}" loading="lazy" data-videos-avatar style="background-color: ${value.background};">
          </figure>
        
          <h3 class="project-title" data-videos-title>${value.title}</h3>
        
          <p class="project-category">${value.category}</p>
        
        </a>
  </li>
  `;
  certificates_canvasList.insertAdjacentHTML('beforeend', text);
}

certificates_items.forEach(certificates_textFunc);



function certificates_catFunc(value){
  text = 
  `
  <li class="filter-item">

    <button data-filter-btn-video>
      ${value}
    </button>

  </li>
  `;
  certificates_filterList.insertAdjacentHTML('beforeend', text);
  text = 
  `
  <li class="select-item">

    <button data-select-item-video>
      ${value}
    </button>

  </li>
  `;
  certificates_selectList.insertAdjacentHTML('beforeend', text);
}

certificates_categories.forEach(certificates_catFunc);



// testimonials variables
const certificates_videosItem = certificates_section.querySelectorAll("[data-videos-item]");


// modal variable
const certificates_canvasContainer = certificates_section.querySelector("[data-canvas-container]");
const certificates_canvasImg = certificates_section.querySelector("[data-canvas-img]");
const certificates_canvasTitle = certificates_section.querySelector("[data-canvas-title]");
const certificates_canvasTime = certificates_section.querySelector("[data-canvas-time]");
const certificates_canvasURL = certificates_section.querySelector("[data-canvas-url]");
const certificates_canvasCloseBtn = certificates_section.querySelector("[data-canvas-close-btn]");
const certificates_overlay = certificates_section.querySelector("[data-overlay]");


// canvas toggle function
function certificates_canvasToggleFunc() {

  certificates_canvasContainer.classList.toggle("active");
  certificates_overlay.classList.toggle("active");
}


function certificates_canvasOpen() {

    certificates_canvasImg.src = this.querySelector("[data-videos-avatar]").src;
    certificates_canvasImg.alt = this.querySelector("[data-videos-avatar]").alt;
    certificates_canvasTitle.innerHTML = this.querySelector("[data-videos-title]").innerHTML;
    certificates_canvasTime.innerHTML = this.dataset.time;
    certificates_canvasURL.href = this.dataset.url;
    certificates_canvasToggleFunc();
  }

// add click event to all modal items
for (let i = 0; i < certificates_videosItem.length; i++) {
  certificates_videosItem[i].addEventListener("click",certificates_canvasOpen);
}

// add click event to modal close button
certificates_canvasCloseBtn.addEventListener("click", certificates_canvasToggleFunc);
certificates_overlay.addEventListener("click", certificates_canvasToggleFunc);


//##############################################


// custom select variables
const certificates_selectVideo = certificates_section.querySelector("[data-select-video]");
const certificates_selectItemsVideo = certificates_section.querySelectorAll("[data-select-item-video]");
const certificates_selectValueVideo = certificates_section.querySelector("[data-select-value-video]");
const certificates_filterBtnVideo = certificates_section.querySelectorAll("[data-filter-btn-video]");
const certificates_filterItemsVideo = certificates_section.querySelectorAll("[data-filter-item-video]");
let certificates_lastClickedBtnVideo = certificates_filterBtnVideo[0];


// element toggle function
function certificates_elementToggleVideoFunc(elem) 
{ 
    elem.classList.toggle("active"); 
}

function certificates_filterFuncVideo(selectedValue) 
{

    for (let i = 0; i < certificates_filterItemsVideo.length; i++) 
    {
        if (selectedValue === "All") 
        {
            certificates_filterItemsVideo[i].classList.add("active");
        } 

        else if (selectedValue === certificates_filterItemsVideo[i].dataset.category) 
        {
            certificates_filterItemsVideo[i].classList.add("active");
        }
        else 
        {
            certificates_filterItemsVideo[i].classList.remove("active");
        }
    }
  
}

function certificates_filterFunc2Video() 
{

    let selectedValue = this.innerText; //.toLowerCase();
    certificates_selectValueVideo.innerText = this.innerText;
    certificates_elementToggleVideoFunc(certificates_selectVideo);
    certificates_filterFuncVideo(selectedValue);

}

function certificates_largeScreenVideo() 
{

    let selectedValue = this.innerText; //.toLowerCase();
    certificates_selectValueVideo.innerText = this.innerText;
    certificates_filterFuncVideo(selectedValue);
    certificates_lastClickedBtnVideo.classList.remove("active");
    this.classList.add("active");
    certificates_lastClickedBtnVideo = this;
}


certificates_selectVideo.addEventListener("click", function () { certificates_elementToggleVideoFunc(this); });

// add event in all select items
for (let i = 0; i < certificates_selectItemsVideo.length; i++) {
  certificates_selectItemsVideo[i].addEventListener("click", certificates_filterFunc2Video);
}

// add event in all filter button items for large screen
for (let i = 0; i < certificates_filterBtnVideo.length; i++) {
  certificates_filterBtnVideo[i].addEventListener("click",certificates_largeScreenVideo);
}


