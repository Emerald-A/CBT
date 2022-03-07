const animation1Timer = setTimeout(animation1Hider, 2900);

function animation1Hider() {
    var animation1 = document.getElementById("animation1");
    animation1.classList.add("displayNone");
    var animation2 = document.getElementById("animation2");
    animation2.classList.add("displayBlock");
}

const animation2Timer = setTimeout(animation2Hider, 6900);

function animation2Hider() {
    var animation2 = document.getElementById("animation2");
    animation2.classList.remove("displayBlock");
    var animation3 = document.getElementById("animation3");
    animation3.classList.add("displayFlex");
}