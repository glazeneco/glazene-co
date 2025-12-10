const openWebmenuBtn = document.getElementById("openModal");
const closeWebmenuBtn = document.getElementById("closeWebmenu");
const webmenu = document.getElementById("nav-menu-popup");

openWebmenuBtn.addEventListener("click", () => {
    webmenu.classList.add("open");
});

closeWebmenuBtn.addEventListener("click", () => {
    webmenu.classList.remove("open");
});

const openPopupBtn = document.getElementById("button-PpaY2q26b1E");
const closePopupBtn = document.getElementById("closeLPmodal");
const popupModal = document.getElementById("modal");

openPopupBtn.addEventListener("click", () => {
    popupModal.classList.add("open");
});

closePopupBtn.addEventListener("click", () => {
    popupModal.classList.remove("open");
});

