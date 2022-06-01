function closeNav() {
    document.getElementById("this-menu-one").style.width = "0";
    document.getElementById("this-menu-two").style.width = "0";
}

function openNav() {
    if (screen.width > 700){
        document.getElementById("this-menu-one").style.width = "350px";
    } else {
        document.getElementById("this-menu-one").style.width = "100vw";
    }
}

function openNavTwo() {
    if (screen.width > 700){
        document.getElementById("this-menu-two").style.width = "700px";
    } else {
        document.getElementById("this-menu-one").style.width = "0";
        document.getElementById("this-menu-two").style.width = "100vw";
        document.getElementById("this-close-menu-two").style.height = "1.5em";
    } 
}