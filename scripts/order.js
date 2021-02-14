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
        tel: urlParams.get("tel"),
        doprava: urlParams.get("doprava")
    }
    let names = [["Borůvka", info.boruvka], ["Malina", info.malina], ["Jahoda", info.jahoda], ["Hruška", info.hruska], ["Jméno a příjmení", info.jmenoAPrijmeni], ["Město", info.mesto], ["Poštovní směrovací číslo", info.psc], ["Ulice a číslo domu", info.uliceACisloDomu], ["Telefonní číslo", info.tel], ["Doprava", info.doprava]];
    let table = document.getElementsByClassName("center")[0]
    for(var i = 0; i < names.length; i++) {
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.appendChild(document.createTextNode(names[i][0]));
        td2.appendChild(document.createTextNode(names[i][1]));
        let tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    for (const key in info) {
        let form = document.getElementById(key);
        form.value = info[key];
    }
    let price = (parseInt(info.boruvka) + parseInt(info.malina) + parseInt(info.jahoda) + parseInt(info.hruska)) * 60;
    p = document.createElement("p");
    p.appendChild(document.createTextNode("Celková cena: " + price + "KČ"))//celková cena
    document.getElementById("price").appendChild(p);
    document.getElementById("cena").value = price;
}

document.addEventListener("DOMContentLoaded", init);