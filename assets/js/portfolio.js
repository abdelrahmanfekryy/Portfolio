const portfolio_section = document.querySelector(".portfolio");

portfolio_section.innerHTML =
`
<header>
<h2 class="h2 article-title">Portfolio</h2>
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

<div class="overlay" data-overlay></div>

<section class="testimonials-modal">

  <button class="modal-close-btn" data-canvas-close-btn>
    <ion-icon name="close-outline"></ion-icon>
  </button>

  <div class="modal-img-wrapper">
    <figure class="modal-avatar-box">
      <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-canvas-img>
    </figure>

    <img src="./assets/images/icon-quote.svg" alt="quote icon">
  </div>

  <div class="modal-content">

    <h4 class="h3 modal-title" data-canvas-title>Daniel lewis</h4>

    <time datetime="2021-06-14">14 June, 2021</time>
    <div data-modal-text>
      <iframe  width="80%" allowfullscreen="true" allowscriptaccess="always" frameborder="0"
              src="https://www.youtube.com/embed/Eaj7pNeIQhs" data-canvas-video>
      </iframe>
    </div>

  </div>

</section>

</div>
`

const portfolio_canvasList = portfolio_section.querySelector("[data-canvas-list]");
const portfolio_filterList = portfolio_section.querySelector("[data-filter-list]");
const portfolio_selectList = portfolio_section.querySelector("[data-select-list]");

portfolio_items = [
  {"id":"BAx0LI6NnNg","title":"الهاكر","category":"الدحيح"},
  {"id":"efigiluZEHA","title":"انسان حساس","category":"الدحيح"},
  {"id":"tXZB5AJmrvM","title":"عيال اليومين دول","category":"الدحيح"},
  {"id":"YPOiNF0riyA","title":"اخر يوم في العالم","category":"الدحيح"},
  {"id":"4lEDoOcgjPQ","title":"حماقات الاذكياء","category":"الدحيح"},
  {"id":"jRnBwscF9OU","title":"هل نلت اليوم قسطًا كافيًا من النوم؟","category":"بوكافيين"},
  {"id":"OZhcNgsTbi8","title":"عندما تستخدمك الشركات الكبرى كسلعة","category":"بوكافيين"},
  {"id":"owI9ung-T3w","title":"عندما اجتمع العرب في دولة واحدة","category":"بوكافيين"},
  ];





var portfolio_categories = _.keys(_.countBy(portfolio_items, function(portfolio_item) { return portfolio_item.category; }))


function portfolio_textFunc(value){
  // console.log(value)
  text =  `<li class="project-item  active" data-filter-item-video data-category=${value.category}>
        <a href="#" data-videos-item data-video="https://www.youtube.com/embed/${value.id}">
        
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
        
            <img src="https://i.ytimg.com/vi/${value.id}/maxresdefault.jpg" alt=${value.category} loading="lazy" data-videos-avatar>
          </figure>
        
          <h3 class="project-title" data-videos-title>${value.title}</h3>
        
          <p class="project-category">${value.category}</p>
        
        </a>
  </li>
  `;
  portfolio_canvasList.insertAdjacentHTML('beforeend', text);
}

portfolio_items.forEach(portfolio_textFunc);



function portfolio_catFunc(value){
  text = 
  `
  <li class="filter-item">

    <button data-filter-btn-video>
      ${value}
    </button>

  </li>
  `;
  portfolio_filterList.insertAdjacentHTML('beforeend', text);
  text = 
  `
  <li class="select-item">

    <button data-select-item-video>
      ${value}
    </button>

  </li>
  `;
  portfolio_selectList.insertAdjacentHTML('beforeend', text);
}

portfolio_categories.forEach(portfolio_catFunc);



// testimonials variables
const portfolio_videosItem = portfolio_section.querySelectorAll("[data-videos-item]");


// modal variable
const portfolio_canvasContainer = portfolio_section.querySelector("[data-canvas-container]");
const portfolio_canvasImg = portfolio_section.querySelector("[data-canvas-img]");
const portfolio_canvasTitle = portfolio_section.querySelector("[data-canvas-title]");
const portfolio_canvasVideo = portfolio_section.querySelector("[data-canvas-video]");
const portfolio_canvasCloseBtn = portfolio_section.querySelector("[data-canvas-close-btn]");
const portfolio_overlay = portfolio_section.querySelector("[data-overlay]");


// canvas toggle function
function portfolio_canvasToggleFunc() {

  portfolio_canvasContainer.classList.toggle("active");
  portfolio_overlay.classList.toggle("active");
  // reset source to stop the current video
  portfolio_canvasVideo.src = portfolio_canvasVideo.src;
}


function portfolio_canvasOpen() {

    portfolio_canvasImg.src = this.querySelector("[data-videos-avatar]").src;
    portfolio_canvasImg.alt = this.querySelector("[data-videos-avatar]").alt;
    portfolio_canvasTitle.innerHTML = this.querySelector("[data-videos-title]").innerHTML;
    portfolio_canvasVideo.src = this.dataset.video;
    portfolio_canvasToggleFunc();
  }

// add click event to all modal items
for (let i = 0; i < portfolio_videosItem.length; i++) {
  portfolio_videosItem[i].addEventListener("click",portfolio_canvasOpen);
}

// add click event to modal close button
portfolio_canvasCloseBtn.addEventListener("click", portfolio_canvasToggleFunc);
portfolio_overlay.addEventListener("click", portfolio_canvasToggleFunc);


//##############################################


// custom select variables
const portfolio_selectVideo = portfolio_section.querySelector("[data-select-video]");
const portfolio_selectItemsVideo = portfolio_section.querySelectorAll("[data-select-item-video]");
const portfolio_selectValueVideo = portfolio_section.querySelector("[data-select-value-video]");
const portfolio_filterBtnVideo = portfolio_section.querySelectorAll("[data-filter-btn-video]");
const portfolio_filterItemsVideo = portfolio_section.querySelectorAll("[data-filter-item-video]");
let portfolio_lastClickedBtnVideo = portfolio_filterBtnVideo[0];


// element toggle function
function portfolio_elementToggleVideoFunc(elem) 
{ 
    elem.classList.toggle("active"); 
}

function portfolio_filterFuncVideo(selectedValue) 
{

    for (let i = 0; i < portfolio_filterItemsVideo.length; i++) 
    {
        if (selectedValue === "all") 
        {
            portfolio_filterItemsVideo[i].classList.add("active");
        } 
        else if (selectedValue === portfolio_filterItemsVideo[i].dataset.category) 
        {
            portfolio_filterItemsVideo[i].classList.add("active");
        }
        else 
        {
            portfolio_filterItemsVideo[i].classList.remove("active");
        }
    }
  
}

function portfolio_filterFunc2Video() 
{

    let selectedValue = this.innerText.toLowerCase();
    portfolio_selectValueVideo.innerText = this.innerText;
    portfolio_elementToggleVideoFunc(portfolio_selectVideo);
    portfolio_filterFuncVideo(selectedValue);

}

function portfolio_largeScreenVideo() 
{

    let selectedValue = this.innerText.toLowerCase();
    portfolio_selectValueVideo.innerText = this.innerText;
    portfolio_filterFuncVideo(selectedValue);
    portfolio_lastClickedBtnVideo.classList.remove("active");
    this.classList.add("active");
    portfolio_lastClickedBtnVideo = this;
}


portfolio_selectVideo.addEventListener("click", function () { portfolio_elementToggleVideoFunc(this); });

// add event in all select items
for (let i = 0; i < portfolio_selectItemsVideo.length; i++) {
  portfolio_selectItemsVideo[i].addEventListener("click", portfolio_filterFunc2Video);
}

// add event in all filter button items for large screen
for (let i = 0; i < portfolio_filterBtnVideo.length; i++) {
  portfolio_filterBtnVideo[i].addEventListener("click",portfolio_largeScreenVideo);
}