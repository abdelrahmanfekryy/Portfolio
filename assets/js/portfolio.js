// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");
let lastClickedBtn = filterBtn[0];


// element toggle function
function elementToggleFunc(elem) 
{ 
    elem.classList.toggle("active"); 
}

function filterFunc(selectedValue) 
{

    for (let i = 0; i < filterItems.length; i++) 
    {
        if (selectedValue === "all") 
        {
            filterItems[i].classList.add("active");
        } 
        else if (selectedValue === filterItems[i].dataset.category) 
        {
            filterItems[i].classList.add("active");
        }
        else 
        {
            filterItems[i].classList.remove("active");
        }
    }
  
}

function filterFunc2() 
{

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

}

function largeScreen() 
{

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
}


select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", filterFunc2);
}

// add event in all filter button items for large screen
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click",largeScreen);
}