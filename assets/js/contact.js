// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

function formFunc() 
{
    // check form validation
    if (form.checkValidity())
    {
        formBtn.removeAttribute("disabled");
    }
    else 
    {
        formBtn.setAttribute("disabled", "");
    }
}


// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", formFunc);
}