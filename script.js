function closeNav() {
    document.getElementById("this-menu-one").style.width = "0";
    document.getElementById("this-menu-two").style.width = "0";
}

function openNav() {
    document.getElementById("this-menu-one").style.width = "25em";
}

function openNavTwo(category) {
    document.getElementById("this-menu-two").style.width = "50em";
}