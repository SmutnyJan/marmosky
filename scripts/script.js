let ham = false; //false == zatáhnuto
let harburgr;
let list;
let hamburger;
let aList;
let clickable;
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
    const element = document.querySelector(href);
    const topPos = element.getBoundingClientRect().top + window.pageYOffset
    if(window.innerWidth <= 560) {
        window.scrollTo(0, topPos -250);
    }
    else {
        window.scrollTo(0, topPos -90);
    }
} 
secretText = (e) => {
    let id = e.target.getAttribute("class").split(" ")[0];
    let secret = document.getElementById(id);  
    if(window.getComputedStyle(secret, null).display == "block") {
        secret.style.display = "none"
        e.target.style.transform = "rotate(0deg)"
    }
    else {
        secret.style.display = "block";
        e.target.style.transform = "rotate(180deg)"
    }
}
switchModes = (e) => {
    if(e.target.getAttribute("src") == "./images/loga/day.png") {
        document.getElementsByClassName("nightmode")[0].src = "./images/loga/night.png"
        document.getElementsByClassName("nightmode")[1].src = "./images/loga/night.png"
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";

    }
    else {
        document.getElementsByClassName("nightmode")[0].src = "./images/loga/day.png"
        document.getElementsByClassName("nightmode")[1].src = "./images/loga/day.png"
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
}


init = () => {
    window.scrollTo(0, 0-1);
    harburgr = document.getElementById("hamburger");
    list = document.getElementById("normal-list");
    aList = document.getElementsByClassName("anchor");
    nightmode = document.getElementsByClassName("nightmode")
    showMore = document.querySelectorAll(".showMore");
    harburgr.addEventListener("click", doTheHamburger);
    window.addEventListener("resize", doAutoHamburger);
    for(let i = 0; i < aList.length; i++) {
        aList[i].addEventListener("click", specialABehav);
    }
    for(let i = 0; i < showMore.length; i++) {
        showMore[i].addEventListener("click", secretText);
    }
    nightmode[0].addEventListener("click", switchModes);
    nightmode[1].addEventListener("click", switchModes);
}

document.addEventListener("DOMContentLoaded", init);