const sliderLinks = document.querySelectorAll(".slider-navigation-link");
const sortList = document.querySelector(".sort-list");
const addressMailLink = document.querySelector(".address-mail-link");
const modalLetter = document.querySelector(".modal-letter");
const modalClose = document.querySelector(".modal-close");
const nameField = document.querySelector(".name-field");
const letterForm = document.querySelector(".letter-form");
const mailField = document.querySelector(".mail-field");
const directionList = document.querySelector(".direction-list");
const directionButtons = document.querySelectorAll(".direction-link");
const letterFormWrapper = document.querySelector(".form-wrapper");

sliderLinks.forEach(function (el) {
    el.addEventListener("click", function (evt) {
        evt.preventDefault();
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector("." + this.dataset.slider).classList.add("slider-item--active");
        document.querySelector(".slider-navigation-link--active").classList.remove("slider-navigation-link--active");
        this.classList.add("slider-navigation-link--active");
    });

});

if (directionButtons) {

    directionButtons.forEach(function (el) {
        el.addEventListener("click", function (evt) {
            evt.preventDefault();
            document.querySelector(".direction-svg--active").classList.remove("direction-svg--active");
            this.querySelector(".direction-svg").classList.add("direction-svg--active");

        });
    });

}

if (sortList) {
    sortList.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (evt.target.tagName != 'A') return;
        document.querySelector(".sort-link--active").classList.remove("sort-link--active");
        evt.target.classList.add("sort-link--active");
    });

}

if (addressMailLink) {
    addressMailLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalLetter.classList.add("modal--show");
        nameField.focus();
    });

}

if (modalClose) {
    modalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalLetter.classList.remove("modal--show");
        letterFormWrapper.classList.remove("modal--error");
        document.querySelectorAll(".error").forEach(function (el) {
            el.classList.remove("error");
        });
    });

}

nameField.required = false;
mailField.required = false;

if (letterForm) {
    letterForm.addEventListener("submit", function (evt) {
        if (!nameField.value || !mailField.value) {
            evt.preventDefault();

            letterFormWrapper.classList.remove("modal--error");
            letterFormWrapper.offsetWidth = letterFormWrapper.offsetWidth;
            letterFormWrapper.classList.add("modal--error");

            if (!nameField.value) {
                nameField.classList.add("error");
            }
            if (!mailField.value) {
                mailField.classList.add("error");
            }


        } else {
            localStorage.setItem("name", nameField.value);
        }
    });
    nameField.addEventListener("focus", function (evt) {
        this.classList.remove("error");
    });

    mailField.addEventListener("focus", function (evt) {
        this.classList.remove("error");
    });

}

