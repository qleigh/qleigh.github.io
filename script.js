// Menu functions
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

// configuration functions
function openConfig(){
    document.getElementById("collapsed-config").style.display = "none";
    document.getElementById("expanded-config").style.display = "block";
}

function closeConfig(){
    document.getElementById("collapsed-config").style.display = "block";
    document.getElementById("expanded-config").style.display = "none";
}

currColour = 0;
function selectLynxColour(option){
    if (currColour != 0){
        document.getElementById(currColour).style.border = "none";
    }
    currColour = option;
    document.getElementById(option).style.border = "4px solid var(--colour-main)";
}

currConfig = 0;
function selectLynxConfig(option){
    if (currConfig != 0){
        document.getElementById(currConfig).style.border = "none";
    }
    currConfig = option;
    document.getElementById(option).style.border = "4px solid var(--colour-main)";
}

currStyle = 0;
function selectChaseStyle(option){
    if (currStyle != 0){
        document.getElementById(currStyle).style.border = "none";
    }
    currStyle = option;
    document.getElementById(option).style.border = "4px solid var(--colour-main)";
}