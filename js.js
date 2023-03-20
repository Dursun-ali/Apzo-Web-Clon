window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementsByClassName("mainNavbarContainer-2")[0].style.top = "0";
  } else {
    document.getElementsByClassName("mainNavbarContainer-2")[0].style.top = "-250px";
  }
}