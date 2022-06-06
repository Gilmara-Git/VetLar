function onScroll(){
    const navigation = document.querySelector('#navigation');    
    if(scrollY > 0 ) {
        navigation.classList.add('scroll');
    }else {
        navigation.classList.remove('scroll');
    }  
};

const bodyElement = document.body;

function onOpenMenu(){
    bodyElement.classList.add('menu-expanded');
};

function onCloseMenu(){
    bodyElement.classList.remove('menu-expanded');
}