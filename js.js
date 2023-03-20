window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementsByClassName("mainNavbarContainer-2")[0].style.top = "0";
  } else {
    document.getElementsByClassName("mainNavbarContainer-2")[0].style.top = "-300px";
  }
}
