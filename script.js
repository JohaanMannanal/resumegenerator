let container = document.querySelector('#container')
let paper = document.querySelector('#paper')
let generateButton = document.querySelector('#generate')
let jobPositionInput = document.querySelector('#job-position-input')
let nameInput = document.querySelector('#name-input')
let professionalProfileInput = document.querySelector('#professional-profile-input')
let education1NameInput = document.querySelector('#education1-name-input')
let education1TypeInput = document.querySelector('#education1-type-input')
let education1DateInput = document.querySelector('#education1-date-input')
let education2NameInput = document.querySelector('#education2-name-input')
let education2TypeInput = document.querySelector('#education2-type-input')
let education2DateInput = document.querySelector('#education2-date-input')
let skill1Input = document.querySelector('#skill1-input')
let skill2Input = document.querySelector('#skill2-input')
let skill3Input = document.querySelector('#skill3-input')
let skill4Input = document.querySelector('#skill4-input')
let skill5Input = document.querySelector('#skill5-input')
let experience1PositionInput = document.querySelector('#experience1-position-input')
let experience1DateInput = document.querySelector('#experience1-date-input')
let experience1CompanyInput = document.querySelector('#experience1-company-input')
let experience1ExplanationInput = document.querySelector('#experience1-explanation-input')
let experience2PositionInput = document.querySelector('#experience2-position-input')
let experience2DateInput = document.querySelector('#experience2-date-input')
let experience2CompanyInput = document.querySelector('#experience2-company-input')
let experience2ExplanationInput = document.querySelector('#experience2-explanation-input')


function generateResume() {
  paper.style.opacity = 1
  container.remove()
  console.log('hey')
  paper.innerHTML += (
    `<div id='container'>
      <div id='header'>
        <div id='border-box'>
          <p id='header-role'>${jobPositionInput.value}</p>
          <h1 id='header-name'>${nameInput.value}</h1>
        </div>
      </div>
      <div id='body'>
        <div id='professional-profile'>
          <h3 id='professional-profile-header'>PROFESSIONAL PROFILE</h3>
          <p id='professional-profile-text'>${professionalProfileInput.value}</p>
        </div>
        <div id='education-skills'>
          <div id='education-container'>
            <h3 id='education-container-header'>EDUCATION</h3>
            <div id='education'>
              <p id='education-length'>${education1DateInput.value} --- <strong id='education-place'>${education1NameInput.value}</strong></p>
              <p id='education-type'>${education1TypeInput.value}</p>
            </div>
            <div id='education'>
              <p id='education-length'>${education2DateInput.value} --- <strong id='education-place'>${education2NameInput.value}</strong></p>
              <p id='education-type'>${education2TypeInput.value}</p>
            </div>
          </div>
          <div id='skills'>
            <h3 id='skills-header'>TECHNICAL SKILLS</h3>
            <ul>
              <li id='skill-item'>${skill1Input.value}</li>
              <li id='skill-item'>${skill2Input.value}</li>
              <li id='skill-item'>${skill3Input.value}</li>
              <li id='skill-item'>${skill4Input.value}</li>
              <li id='skill-item'>${skill5Input.value}</li>
            </ul>
          </div>
        </div>
        <div id='professional-experience'>
          <h3 id='professional-experience-header'>PROFESSIONAL EXPERIENCE</h3>
          <div id='professional-experience-container'>
            <strong id='professional-experience-role-date-company'>${experience1PositionInput.value}, ${experience1DateInput.value}, ${experience1CompanyInput.value}</strong>
            <p id='professional-experience-text'>${experience1ExplanationInput.value}</p>
          </div>
          <div id='professional-experience-container'>
            <strong id='professional-experience-role-date-company'>${experience2PositionInput.value}, ${experience2DateInput.value}, ${experience2CompanyInput.value}</strong>
            <p id='professional-experience-text'>${experience2ExplanationInput.value}</p>
          </div>
        </div> 
      </div>
      <div id='footer'></div>
    </div>`
  );
}

generateButton.addEventListener('click', generateResume)