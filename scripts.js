window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {  
  showNavWithPrimaryColor();
  showBackToTopButton();
};


function showNavWithPrimaryColor(){
  const navigation = document.querySelector("#navigation");
   if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}


function showBackToTopButton(){
  const linkToTop = document.querySelector("#backToTopButton");
  if(scrollY >=400){
    linkToTop.classList.add("show");
  }else {
    linkToTop.classList.remove("show");
  }
};

const bodyElement = document.body;
function onOpenMenu() {
  bodyElement.classList.add("menu-expanded");
}

function onCloseMenu() {
  bodyElement.classList.remove("menu-expanded");
}


ScrollReveal({
    origin: 'top', 
    distance: '30px', 
    duration: 700}).reveal(`
    #home,
    #home img,
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`
    );