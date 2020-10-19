let ham = false; //false == zatáhnuto
let harburgr;
let list;
let hamburger;
doTheHamburger = () => {
    hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("is-active"); /* prohození stavu*/
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
    hamburger = document.getElementById("hamburger");
    if(window.innerWidth > 560) {
        ham = false;
        list.style.display = "none";
        hamburger.classList.remove("is-active");
    }
}
init = () => {
    harburgr = document.getElementById("hamburger");
    harburgr.addEventListener("click", doTheHamburger);
    list = document.getElementById("normal-list");
    window.addEventListener("resize", doAutoHamburger);


    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top -100
        }, 1000);

    });

}

document.addEventListener("DOMContentLoaded", init);