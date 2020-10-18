let ham = false;
doTheHamburger = () => {
    let headerList = document.getElementById("header-list");
    if(!ham) { //default
        ham = true;
        headerList.style.display = "none";
    }
    else { //když kliknu na x
        ham = false;
        headerList.style.display = "block";
    }
}
checkWidth = () => {
    if(window.innerWidth > 560) {
        let hamburger = document.getElementById("hamburger");
        hamburger.style.removeProperty("display");
        console.log("¨.")
    }
}
init = () => {
    doTheHamburger();
    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", doTheHamburger)
    window.addEventListener("resize", checkWidth)
}

document.addEventListener("DOMContentLoaded", init);