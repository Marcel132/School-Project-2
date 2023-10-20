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

// Patriots 
const patriotAdamMickiewiczButton = document.getElementById('adam_mickiewicz').addEventListener('click', () =>{
  togglePatriots(divAM)
})
const patriotJuliuszSlowackiButton = document.getElementById('juliusz_slowacki').addEventListener('click', () =>{
  togglePatriots(divJS)
})
const patriotJozefBemButton = document.getElementById('jozef_bem').addEventListener('click', () =>{
  togglePatriots(divJB)
})
const patriotAdamJCzarnoryskiButton = document.getElementById('adam_jerzy_czartoryski').addEventListener('click', () =>{
  togglePatriots(divAJC)
})
const patriotBonawenturaNiemojowskiButton = document.getElementById('bonawentura_niemojowski').addEventListener('click', () =>{
  togglePatriots(divBM)
})
const patriotTeodorMorawskiButton = document.getElementById('teodor_morawski').addEventListener('click', () =>{
  togglePatriots(divTM)
})
const patriotErnestMalinowskiButton = document.getElementById('ernest_malinowski').addEventListener('click', () =>{
  togglePatriots(divEM)
})
const patriotZygmuntKrasinskiButton = document.getElementById('zygmunt_krasinski').addEventListener('click', () =>{
  togglePatriots(divZK)
})
const patriotFryderykChopinButton = document.getElementById('fryderyk_chopin').addEventListener('click', () =>{
  togglePatriots(divFC)
})
const patriotMaurycyMochniackiButton = document.getElementById('maurycy_mochnacki').addEventListener('click', () =>{
  togglePatriots(divMM)
})
// Patriots div
const divAM = document.getElementById('patriots_board_am')
const divJS = document.getElementById('patriots_board_js')
const divJB = document.getElementById('patriots_board_jb')
const divAJC = document.getElementById('patriots_board_ajc')
const divBN = document.getElementById('patriots_board_gn')
const divTM = document.getElementById('patriots_board_tm')
const divEM = document.getElementById('patriots_board_em')
const divZK = document.getElementById('patriots_board_zk')
const divFC = document.getElementById('patriots_board_fc')
const divMM = document.getElementById('patriots_board_mm')

function togglePatriots(div){
  if(div.style.display == 'none' || div.style.display == ''){
    div.style.display = 'block'
    div.style.zIndex = '1'
    document.addEventListener('click', () => {
      
    })
  }
  else if (div.style.display == 'block'){
    div.style.display = 'none'
    div.style.zIndex = '0'
  }
}