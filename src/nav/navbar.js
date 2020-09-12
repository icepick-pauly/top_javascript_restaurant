document.getElementById("home-link").addEventListener("mouseover", homeMouseOver);
document.getElementById("home-link").addEventListener("mouseout", homeMouseOut);
function homeMouseOver() {
    document.getElementById("home-link").style.marginLeft = "0";
    document.getElementById("home-nood").style.display = "inherit";
}
function homeMouseOut() {
    document.getElementById("home-link").style.marginLeft = "30px";
    document.getElementById("home-nood").style.display = "none";
}
document.getElementById("menu-link").addEventListener("mouseover", menuMouseOver);
document.getElementById("menu-link").addEventListener("mouseout", menuMouseOut);
function menuMouseOver() {
    document.getElementById("menu-link").style.marginLeft = "0";
    document.getElementById("menu-nood").style.display = "inherit";
}
function menuMouseOut() {
    document.getElementById("menu-link").style.marginLeft = "30px";
    document.getElementById("menu-nood").style.display = "none";
}
document.getElementById("story-link").addEventListener("mouseover", storyMouseOver);
document.getElementById("story-link").addEventListener("mouseout", storyMouseOut);
function storyMouseOver() {
    document.getElementById("story-link").style.marginLeft = "0";
    document.getElementById("story-nood").style.display = "inherit";
}
function storyMouseOut() {
    document.getElementById("story-link").style.marginLeft = "30px";
    document.getElementById("story-nood").style.display = "none";
}
document.getElementById("order-link").addEventListener("mouseover", orderMouseOver);
document.getElementById("order-link").addEventListener("mouseout", orderMouseOut);
function orderMouseOver() {
    document.getElementById("order-link").style.marginLeft = "0";
    document.getElementById("order-nood").style.display = "inherit";
}
function orderMouseOut() {
    document.getElementById("order-link").style.marginLeft = "30px";
    document.getElementById("order-nood").style.display = "none";
}
document.getElementById("contact-link").addEventListener("mouseover", contactMouseOver);
document.getElementById("contact-link").addEventListener("mouseout", contactMouseOut);
function contactMouseOver() {
    document.getElementById("contact-link").style.marginLeft = "0";
    document.getElementById("contact-nood").style.display = "inherit";
}
function contactMouseOut() {
    document.getElementById("contact-link").style.marginLeft = "30px";
    document.getElementById("contact-nood").style.display = "none";
}

export function navbarHoverEffects() {
    homeMouseOver();
    homeMouseOut();
    menuMouseOver();
    menuMouseOut();
    storyMouseOver();
    storyMouseOut();
    orderMouseOver();
    orderMouseOut();
    contactMouseOver();
    contactMouseOut();
}
