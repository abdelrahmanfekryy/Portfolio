//const items = require('../json/resume_items.json');
//import items from "../json/resume_items.json"; // assert { type: 'json' };;

//import * as items from "../json/resume_items.json" assert { type: "json" };

async function printJSON() {
  const response = await fetch('../json/resume_items.json');
  return await response.json();
};

items = printJSON();


//items = await readFile(new URL("../json/resume_items.json"))

// var xObj = new XMLHttpRequest();
// xObj.overrideMimeType("application/json");
// xObj.open('GET', '../json/resume_items.json', true);
// xObj.onreadystatechange = function() { alert(xObj.responseText)}

//var items = JSON.parse(resume_items);


const resume_section = document.querySelector(".resume");

resume_section.innerHTML =
`
<header>
<h2 class="h2 article-title">Resume</h2>
</header>

<!--<section class="skill">

<h3 class="h3 skills-title">My skills</h3>

<ul class="skills-list content-card">

  <li class="skills-item">

    <div class="title-wrapper">
      <h5 class="h5">Web design</h5>
      <data value="80">80%</data>
    </div>

    <div class="skill-progress-bg">
      <div class="skill-progress-fill" style="width: 80%;"></div>
    </div>

  </li>

  <li class="skills-item">

    <div class="title-wrapper">
      <h5 class="h5">Graphic design</h5>
      <data value="70">70%</data>
    </div>

    <div class="skill-progress-bg">
      <div class="skill-progress-fill" style="width: 70%;"></div>
    </div>

  </li>

  <li class="skills-item">

    <div class="title-wrapper">
      <h5 class="h5">Branding</h5>
      <data value="90">90%</data>
    </div>

    <div class="skill-progress-bg">
      <div class="skill-progress-fill" style="width: 90%;"></div>
    </div>

  </li>

  <li class="skills-item">

    <div class="title-wrapper">
      <h5 class="h5">WordPress</h5>
      <data value="50">50%</data>
    </div>

    <div class="skill-progress-bg">
      <div class="skill-progress-fill" style="width: 50%;"></div>
    </div>

  </li>

</ul>

</section>-->
`




// items = [
// {
// "section":"Experience",
// "icon":"briefcase-outline",
// "content":[
//           {"title":"Machine Learning Engineer",
//           "institution":"Kemet Artificial Intelligence · Full-time",
//           "time":"Jul 2023 — Present",
//           "description":"Kemet Artificial Intelligence · Full-time"},
//           {"title":"Data Scientist",
//           "institution":"CORELIA · Full-time",
//           "time":"Apr 2022 — Jul 2023",
//           "description":"CORELIA · Full-time"},
//           {"title":"Telecommunication Intern",
//           "institution":"Systel Telecom · Internship",
//           "time":"Jun 2019 - Aug 2019",
//           "description":"Systel Telecom · Internship"},
//         ]
// },
// {
//   "section":"Education",
//   "icon":"book-outline",
//   "content":[
//             {"title":"AWS Cloud Practitioner Programme",
//             "institution":"African Leadership X (ALX)",
//             "time":"2023 — 2023",
//             "description":"African Leadership X (ALX)"},
//             {"title":" AWS Data Science Programme",
//             "institution":"Practical Data Scientist Academy (MCIT-PDSA)",
//             "time":"Dec 2021 — Jul 2022",
//             "description":"Practical Data Scientist Academy (MCIT-PDSA)"},
//             {"title":"Bachelor's degree, Electrical and Electronics Engineering",
//             "institution":"Higher Technological Institute",
//             "time":"2014 — 2020",
//             "description":"Higher Technological Institute"},
//           ]
//   },
// ]


function addFunc(value)
{
  ol = ""
  for (let i = 0; i < value.content.length; i++) 
  {
    ol +=  
    `
    <li class="timeline-item">

      <h4 class="h4 timeline-item-title">${value.content[i].title}</h4>

      <p class="timeline-text">
        ${value.content[i].institution}
      </p>

      <span>${value.content[i].time}</span>

      <p class="timeline-text">
        ${value.content[i].description}
      </p>

    </li>
    `;
  }


  text = 
  `
  <section class="timeline">
      <div class="title-wrapper">
          <div class="icon-box">
              <ion-icon name=${value.icon}></ion-icon>
          </div>

          <h3 class="h3">${value.section}</h3>
      </div>
      <ol class="timeline-list">
        ${ol}
      </ol>
  </section>
  `;

  resume_section.insertAdjacentHTML('beforeend',text);
}

items.forEach(addFunc);
