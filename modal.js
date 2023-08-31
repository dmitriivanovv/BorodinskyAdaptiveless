const link = document.querySelector(".login-link");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = popup.querySelector("[name=login]");
const form = popup.querySelector("form");
const mapLink = document.querySelector(".contact-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close")

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
login.focus()
});

close.addEventListener("click" , function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }
    }
})

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    });

mapClose.addEventListener("click" , function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt){
        if (evt.keyCode === 27) {
            if (mapPopup.classList.contains("modal-show")) {
                evt.preventDefault();
                mapPopup.classList.remove("modal-show");
            }
        }
    })