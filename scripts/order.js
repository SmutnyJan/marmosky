let ham = false; //false == zatáhnuto
let harburgr;
let list;
let hamburger;
let aList;
let clickable;
doTheHamburger = () => {
    hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("is-active"); /* prohození stavu*/
    list.removeAttribute("style"); 
    if(ham) { //pokud je roztáhnuto
        ham = false;
        list.classList.add("toogle-anim-up");
        list.classList.remove("toogle-anim-down");

    }
    else { //pokud je zatáhnuto
        ham = true;
        list.classList.add("toogle-anim-down");
        list.classList.remove("toogle-anim-up")
    }
}
doAutoHamburger = () => {
    hamburger = document.getElementById("hamburger");
    if(window.innerWidth > 560) {
        ham = false;
        hamburger.classList.remove("is-active");
        list.style.display = "none"
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
    secret.classList.remove("none");
    if(secret.classList.contains("secret-anim-hide")) {
        secret.classList.remove("secret-anim-hide")
        secret.classList.add("secret-anim-reveal")
        e.target.style.transform = "rotate(180deg)"
    }
    else {
        secret.classList.remove("secret-anim-reveal")
        secret.classList.add("secret-anim-hide")
        e.target.style.transform = "rotate(0deg)"
    }
}

init = () => {
    window.scrollTo(0, 0-1);
    harburgr = document.getElementById("hamburger");
    list = document.getElementById("normal-list");
    aList = document.getElementsByClassName("anchor");
    showMore = document.querySelectorAll(".showMore");
    harburgr.addEventListener("click", doTheHamburger);
    window.addEventListener("resize", doAutoHamburger);
    for(let i = 0; i < aList.length; i++) {
        aList[i].addEventListener("click", specialABehav);
    }
    for(let i = 0; i < showMore.length; i++) {
        showMore[i].addEventListener("click", secretText);
    }

    const urlParams = new URLSearchParams(window.location.search);
    let info = {
        boruvka: urlParams.get("boruvka"),
        malina: urlParams.get("malina"),
        jahoda: urlParams.get("jahoda"),
        hruska: urlParams.get("hruska"),
        jmenoAPrijmeni: urlParams.get("jmenoAPrijmeni"),
        mesto: urlParams.get("mesto"),
        psc: urlParams.get("psc"),
        uliceACisloDomu: urlParams.get("uliceACisloDomu"),
        tel: urlParams.get("tel")
    }
    let names = [["Borůvka", info.boruvka], ["Malina", info.malina], ["Jahoda", info.jahoda], ["Hruška", info.hruska], ["Jméno a příjmení", info.jmenoAPrijmeni], ["Město", info.mesto], ["Poštovní směrovací číslo", info.psc], ["Ulice a číslo domu", info.uliceACisloDomu], ["Telefonní číslo", info.tel]];
    let orderList = document.getElementById("order");
    for(var i = 0; i < names.length; i++) {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.appendChild(document.createTextNode(names[i][0]));
        p2.appendChild(document.createTextNode(names[i][1]));
        div.appendChild(p1);
        div.appendChild(p2);
        orderList.appendChild(div);
    }
    p = document.createElement("p");
    p.appendChild(document.createTextNode("Celková cena: " + (parseInt(info.boruvka) + parseInt(info.malina) + parseInt(info.jahoda) + parseInt(info.hruska)) * 60 + "KČ"))//celková cena
    orderList.appendChild(p);
    let message = "mailto:info-marmosky@seznam.cz?subject=Objednavka&body=" + `Objednávka:
    %0A%20%20%20%20Jméno%20a%20příjmení:%20${info.jmenoAPrijmeni}
    %0A%20%20%20%20Město:%20${info.mesto}
    %0A%20%20%20%20Ulice%20a%20číslo%20domu:%20${info.uliceACisloDomu}
    %0A%20%20%20%20PSČ:%20${info.psc}
    %0A%20%20%20%20Telefonní%20číslo:%20${info.tel}
    %0A%20%20%20%20Borůvka:%20${info.boruvka}
    %0A%20%20%20%20Malina:%20${info.malina}
    %0A%20%20%20%20Jahoda:%20${info.jahoda}
    %0A%20%20%20%20Hruška:%20${info.hruska}%0A`
    let submit = document.getElementById("submit");
    submit.setAttribute("href", message);
}

document.addEventListener("DOMContentLoaded", init);