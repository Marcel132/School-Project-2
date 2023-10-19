// Toogle button mechanism
const toogleButtonReason = document.getElementById('toggle_menu-reason');
const menuReason = document.getElementById('reason');

toogleButtonReason.addEventListener('click', () =>{
  if(menuReason.style.display == 'none' || menuReason.style.display == ''){
    menuReason.style.display = 'block';
  }
  else if(menuReason.style.display == 'block') {
    menuReason.style.display = 'none';
  }
})