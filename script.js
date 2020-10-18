let ham = false; //false == zatáhnuto
let menuBtn;
let hamburger;
let list;
doTheHamburger = () => {
    if(ham) { //pokud je roztáhnuto
        ham = false;
        list.style.display = "none";
        menuBtn.classList.remove('open');
    }
    else { //pokud je zatáhnuto
        ham = true;
        list.style.display = "block";
        menuBtn.classList.add('open');
    }
}
doAutoHamburger = () => {
    if(window.innerWidth > 560) {
        ham = false;
        list.style.display = "none";
    }
}
init = () => {
    hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", doTheHamburger);
    list = document.getElementById("normal-list");
    window.addEventListener("resize", doAutoHamburger);
    menuBtn = document.querySelector('.menu-btn');
}

document.addEventListener("DOMContentLoaded", init);