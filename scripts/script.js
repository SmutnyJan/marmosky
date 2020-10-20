let ham = false; //false == zatáhnuto
let harburgr;
let list;
let hamburger;
let aList;
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
specialABehav = (e) => {
    e.preventDefault();
    let href = e.target.getAttribute("href");
    const element = document.querySelector(href)
    const topPos = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo(0, topPos -100);
}
init = () => {
    window.scrollTo(0, 0-1);
    harburgr = document.getElementById("hamburger");
    list = document.getElementById("normal-list");
    aList = document.getElementsByClassName("anchor");
    harburgr.addEventListener("click", doTheHamburger);
    window.addEventListener("resize", doAutoHamburger);
    for(let i = 0; i < aList.length; i++) {
        aList[i].addEventListener("click", specialABehav);
    }
}

document.addEventListener("DOMContentLoaded", init);