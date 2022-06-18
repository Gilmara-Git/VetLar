
  window.addEventListener("scroll", onScroll);
  onScroll();

function onScroll() {   
  showNavWithPrimaryColor();
  showBackToTopButton();
  makeMenuLinkActiveWhenOnItsSession(home)
  makeMenuLinkActiveWhenOnItsSession(services);
  makeMenuLinkActiveWhenOnItsSession(about);
  makeMenuLinkActiveWhenOnItsSession(contact);
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


function makeMenuLinkActiveWhenOnItsSession(section){ 
  // innerHeight is the viewport height(screenSize)
  const screenSize = innerHeight;
  // Scrolling Line within the section
  const targetLine = (screenSize/2) + scrollY; 

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;
 

  const sectionTopAboveTargetLine =  sectionTop <= targetLine;
  const sectionBottomBelowTargetLine = sectionBottom >=targetLine; 
  const targetLineWithinSectionBoundaries = sectionTopAboveTargetLine && sectionBottomBelowTargetLine;

  const sectionId = section.getAttribute("id");
 
  const menuLink = document.querySelector(`.menu a[href*=${sectionId}]`);  
  
  menuLink.classList.remove('active');
  if(targetLineWithinSectionBoundaries){
    menuLink.classList.add('active')
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