const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-btn");
const img_navBtn = document.querySelector(".img_nav-btn");

navBtn.onclick = () => {
    if(nav.classList.toggle("open")) {
        img_navBtn.src = "./img/icon/close-menu-white.png";
    } else {
        img_navBtn.src = "./img/icon/open-menu-white.png";
    }
}
