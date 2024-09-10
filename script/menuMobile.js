function menu() {
    let menuMobile = document.querySelector('.menu-mobile');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/icones/menu/Icone_sanduiche.svg";
    } 
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/icones/menu/Icone_x.svg";
    }
}