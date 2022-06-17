window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {  
  showNavWithPrimaryColor();
  showBackToTopButton();
  makeSocialLinkActiveWhenOnItsSession();
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


function makeSocialLinkActiveWhenOnItsSession(){ 
  
  const sectionInicio = document.querySelector('.menu li:nth-child(1) a')
  const targetLine = (innerHeight/2) + scrollY; 

  if(targetLine > home.offsetTop && targetLine < services.offsetTop){ 
    sectionInicio.classList.add('active')
  }else {
    sectionInicio.classList.remove('active')
  }
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