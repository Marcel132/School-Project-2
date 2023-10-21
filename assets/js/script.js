// Toogle button mechanism

// November uprising - reason, content and mechanism
const toogleButtonReason = document.getElementById('toggle_menu_reason')
const menuReason = document.getElementById('reason')

toogleButtonReason.addEventListener('click', () =>{
  if(menuReason.style.display == 'none' || menuReason.style.display == ''){
    menuReason.style.display = 'block'
  }
  else if(menuReason.style.display == 'block') {
    menuReason.style.display = 'none'
  }
})

// The course of november uprising - content and mechanism
const toogleButtonCourseOf = document.getElementById('toggle_menu_course_of')
const menuCourseOf = document.getElementById('course_of')

toogleButtonCourseOf.addEventListener('click', () =>{
  if (menuCourseOf.style.display == 'none' || menuCourseOf.style.display == ''){
    menuCourseOf.style.display = 'block'
  }
  else if (menuCourseOf.style.display == 'block'){
    menuCourseOf.style.display = 'none'
  }
})

function togglePatriotsInformation() {
  if(divAM.style.display == 'none' || divAM.style.display == ''){
    divAM.style.display = 'block'
    divAM.style.zIndex = '1'
  }
  else if (divAM.style.display == 'block'){
    divAM.style.display = 'none'
    divAM.style.zIndex = '0'
  }
}

// Polish patriots
const patriotButtons = document.querySelectorAll('.patriots');
const allDivs = document.querySelectorAll('.patriots_board_class');

function hideAllPatriotDivs() {
  allDivs.forEach((div) => {
    div.style.display = 'none';
  });
}

// Funkcja do obsługi kliknięcia przycisku patriota
function togglePatriot(patriotDiv) {
  if (patriotDiv.style.display === 'flex') {
    patriotDiv.style.display = 'none';
  } else {
    hideAllPatriotDivs();
    patriotDiv.style.display = 'flex';
  }
}

patriotButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const patriotDiv = allDivs[index];
    togglePatriot(patriotDiv);
  });
});

// Dodaj event listener do okna, aby zamykać divy po kliknięciu na dowolnym obszarze strony
window.addEventListener('click', (event) => {
  if (!event.target.classList.contains('patriots')) {
    hideAllPatriotDivs();
  }
});