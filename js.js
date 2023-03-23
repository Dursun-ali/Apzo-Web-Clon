window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 300||screen.width < 991 ) {
    document.getElementsByClassName("mainNavbarContainer-2")[0].style.top = "0";
  } else {
    document.getElementsByClassName("mainNavbarContainer-2")[0].style.top = "-300px";
  }

}
scrollFunction();

function openSidebar(){
  document.getElementsByClassName('main-scroll-navbar')[0].style.display='block';
  document.getElementsByClassName('mainNavbarContainer-2')[0].style.width='58.75%';
  document.getElementsByClassName('wrapper-container')[0].style.display='block';
}
function searchOpen(){
  document.getElementsByClassName('wrapper-container')[0].style.display='block';
  document.getElementsByClassName('main-search-container')[0].style.display='block';

}
function searchClose(){
  document.getElementsByClassName('wrapper-container')[0].style.display='none';
  document.getElementsByClassName('main-search-container')[0].style.display='none';

}

function closeSideBar(){
  
  document.getElementsByClassName('main-scroll-navbar')[0].style.display='none';
  document.getElementsByClassName('mainNavbarContainer-2')[0].style.width='100%'
  document.getElementsByClassName('wrapper-container')[0].style.display='none';
}
document.getElementById('1').getElementsByClassName('plus-icon')[0].style.display='none';

function findId(id){

for (let i = 1; i <=4; i++) {
  document.getElementById(i).getElementsByClassName('plus-icon')[0].style.display='none';
  document.getElementById(i).removeAttribute('disabled','true');
}
document.getElementById(id).getElementsByClassName('plus-icon')[0].style.display='block';
document.getElementById(id).setAttribute('disabled','true');
}

function isActive(id) {
  document.getElementById(id).classList.add('navActive');
  if(!(id == 'nav-item-0'|| id== 'nav-item-00')) {
    document.getElementById('nav-item-0').classList.remove('navActive');
    document.getElementById('nav-item-00').classList.remove('navActive');
  }
}

function isPasive(id) {
  document.getElementById(id).classList.remove('navActive');
  document.getElementById(`${id}0`).classList.remove('navActive');
}

function isDefauldActive() {
  document.getElementById('nav-item-0').classList.add('navActive');
  document.getElementById('nav-item-00').classList.add('navActive');

}