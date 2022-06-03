function onScroll(){
    const navigation = document.querySelector('#navigation');    
    if(scrollY > 0 ) {
        navigation.classList.add('scroll');
    }else {
        navigation.classList.remove('scroll');
    }  
};

