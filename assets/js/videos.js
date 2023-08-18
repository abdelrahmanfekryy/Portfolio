const canvasList = document.querySelector("[data-canvas-list]");
const filterList = document.querySelector("[data-filter-list]");
const selectList = document.querySelector("[data-select-list]");

items = [
//{"id":"Eaj7pNeIQhs","title":"1","category":"1"},
{"id":"BAx0LI6NnNg","title":"الهاكر","category":"الدحيح"},
{"id":"efigiluZEHA","title":"انسان حساس","category":"الدحيح"},
{"id":"tXZB5AJmrvM","title":"عيال اليومين دول","category":"الدحيح"},
{"id":"YPOiNF0riyA","title":"اخر يوم في العالم","category":"الدحيح"},
{"id":"4lEDoOcgjPQ","title":"حماقات الاذكياء","category":"الدحيح"},
{"id":"jRnBwscF9OU","title":"هل نلت اليوم قسطًا كافيًا من النوم؟","category":"بوكافيين"},
{"id":"OZhcNgsTbi8","title":"عندما تستخدمك الشركات الكبرى كسلعة","category":"بوكافيين"},
{"id":"owI9ung-T3w","title":"عندما اجتمع العرب في دولة واحدة","category":"بوكافيين"},
];



var categories = _.keys(_.countBy(items, function(item) { return item.category; }))


function textFunc(value){
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
  canvasList.insertAdjacentHTML('beforeend', text);
}

items.forEach(textFunc);



function catFunc(value){
  text = 
  `
  <li class="filter-item">

    <button data-filter-btn-video>
      ${value}
    </button>

  </li>
  `;
  filterList.insertAdjacentHTML('beforeend', text);
  text = 
  `
  <li class="select-item">

    <button data-select-item-video>
      ${value}
    </button>

  </li>
  `;
  selectList.insertAdjacentHTML('beforeend', text);
}

categories.forEach(catFunc);



// testimonials variables
const videosItem = document.querySelectorAll("[data-videos-item]");


// modal variable
const canvasContainer = document.querySelector("[data-canvas-container]");
const canvasImg = document.querySelector("[data-canvas-img]");
const canvasTitle = document.querySelector("[data-canvas-title]");
const canvasVideo = document.querySelector("[data-canvas-video]");
const canvasCloseBtn = document.querySelector("[data-canvas-close-btn]");
const overlay = document.querySelector("[data-overlay]");


// canvas toggle function
function canvasToggleFunc() {

  canvasContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  // reset source to stop the current video
  canvasVideo.src = canvasVideo.src;
}


function canvasOpen() {

    canvasImg.src = this.querySelector("[data-videos-avatar]").src;
    canvasImg.alt = this.querySelector("[data-videos-avatar]").alt;
    canvasTitle.innerHTML = this.querySelector("[data-videos-title]").innerHTML;
    canvasVideo.src = this.dataset.video;
    canvasToggleFunc();
  }

// add click event to all modal items
for (let i = 0; i < videosItem.length; i++) {
  videosItem[i].addEventListener("click",canvasOpen);
}

// add click event to modal close button
canvasCloseBtn.addEventListener("click", canvasToggleFunc);
overlay.addEventListener("click", canvasToggleFunc);


//##############################################


// custom select variables
const selectVideo = document.querySelector("[data-select-video]");
const selectItemsVideo = document.querySelectorAll("[data-select-item-video]");
const selectValueVideo = document.querySelector("[data-select-value-video]");
const filterBtnVideo = document.querySelectorAll("[data-filter-btn-video]");
const filterItemsVideo = document.querySelectorAll("[data-filter-item-video]");
let lastClickedBtnVideo = filterBtnVideo[0];


// element toggle function
function elementToggleVideoFunc(elem) 
{ 
    elem.classList.toggle("active"); 
}

function filterFuncVideo(selectedValue) 
{

    for (let i = 0; i < filterItemsVideo.length; i++) 
    {
        if (selectedValue === "all") 
        {
            filterItemsVideo[i].classList.add("active");
        } 
        else if (selectedValue === filterItemsVideo[i].dataset.category) 
        {
            filterItemsVideo[i].classList.add("active");
        }
        else 
        {
            filterItemsVideo[i].classList.remove("active");
        }
    }
  
}

function filterFunc2Video() 
{

    let selectedValue = this.innerText.toLowerCase();
    selectValueVideo.innerText = this.innerText;
    elementToggleVideoFunc(selectVideo);
    filterFuncVideo(selectedValue);

}

function largeScreenVideo() 
{

    let selectedValue = this.innerText.toLowerCase();
    selectValueVideo.innerText = this.innerText;
    filterFuncVideo(selectedValue);
    lastClickedBtnVideo.classList.remove("active");
    this.classList.add("active");
    lastClickedBtnVideo = this;
}


selectVideo.addEventListener("click", function () { elementToggleVideoFunc(this); });

// add event in all select items
for (let i = 0; i < selectItemsVideo.length; i++) {
  selectItemsVideo[i].addEventListener("click", filterFunc2Video);
}

// add event in all filter button items for large screen
for (let i = 0; i < filterBtnVideo.length; i++) {
  filterBtnVideo[i].addEventListener("click",largeScreenVideo);
}