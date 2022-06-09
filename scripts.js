function onScroll() {
  const navigation = document.querySelector("#navigation");
  console.log(navigation, scrollY);
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

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
    #services .card`
    );