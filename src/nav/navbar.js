document.getElementById("home-link").addEventListener("mouseover", homeMouseOver);
document.getElementById("home-link").addEventListener("mouseout", homeMouseOut);
export function homeMouseOver() {
    document.getElementById("home-link").style.marginLeft = "0";
    document.getElementById("home-nood").style.display = "inherit";
}
export function homeMouseOut() {
    document.getElementById("home-link").style.marginLeft = "30px";
    document.getElementById("home-nood").style.display = "none";
}
document.getElementById("menu-link").addEventListener("mouseover", menuMouseOver);
document.getElementById("menu-link").addEventListener("mouseout", menuMouseOut);
export function menuMouseOver() {
    document.getElementById("menu-link").style.marginLeft = "0";
    document.getElementById("menu-nood").style.display = "inherit";
}
export function menuMouseOut() {
    document.getElementById("menu-link").style.marginLeft = "30px";
    document.getElementById("menu-nood").style.display = "none";
}
document.getElementById("story-link").addEventListener("mouseover", storyMouseOver);
document.getElementById("story-link").addEventListener("mouseout", storyMouseOut);
export function storyMouseOver() {
    document.getElementById("story-link").style.marginLeft = "0";
    document.getElementById("story-nood").style.display = "inherit";
}
export function storyMouseOut() {
    document.getElementById("story-link").style.marginLeft = "30px";
    document.getElementById("story-nood").style.display = "none";
}
document.getElementById("order-link").addEventListener("mouseover", orderMouseOver);
document.getElementById("order-link").addEventListener("mouseout", orderMouseOut);
export function orderMouseOver() {
    document.getElementById("order-link").style.marginLeft = "0";
    document.getElementById("order-nood").style.display = "inherit";
}
export function orderMouseOut() {
    document.getElementById("order-link").style.marginLeft = "30px";
    document.getElementById("order-nood").style.display = "none";
}
document.getElementById("contact-link").addEventListener("mouseover", contactMouseOver);
document.getElementById("contact-link").addEventListener("mouseout", contactMouseOut);
export function contactMouseOver() {
    document.getElementById("contact-link").style.marginLeft = "0";
    document.getElementById("contact-nood").style.display = "inherit";
}
export function contactMouseOut() {
    document.getElementById("contact-link").style.marginLeft = "30px";
    document.getElementById("contact-nood").style.display = "none";
}
