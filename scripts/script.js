let ham = false; //false == zatáhnuto
let menuBtn;
let harburgr;
let list;
doTheHamburger = () => {
    if(ham) { //pokud je roztáhnuto
        ham = false;
        list.style.display = "none";
    }
    else { //pokud je zatáhnuto
        ham = true;
        list.style.display = "block";
    }
}
doAutoHamburger = () => {
    if(window.innerWidth > 560) {
        ham = false;
        list.style.display = "none";
    }
}
init = () => {
    harburgr = document.getElementById("hamburger");
    harburgr.addEventListener("click", doTheHamburger);
    list = document.getElementById("normal-list");
    window.addEventListener("resize", doAutoHamburger);
    menuBtn = document.querySelector('.menu-btn');

    var hamburger = document.querySelector(".hamburger"); /* animations script */
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
    });
}

document.addEventListener("DOMContentLoaded", init);