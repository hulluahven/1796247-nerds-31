let sliderLinks = document.querySelectorAll(".slider-nav-link");
let sortList = document.querySelector(".sort-list");
let addressMailLink = document.querySelector(".address-mail-link");
let modalLetter = document.querySelector(".modal-letter");
let modalClose = document.querySelector(".modal-close");
let nameField = document.querySelector(".name-field");
let letterForm = document.querySelector(".letter-form");
let mailField = document.querySelector(".mail-field");
let directionList = document.querySelector(".direction-list");
let directionButtons = document.querySelectorAll(".direction-link");

sliderLinks.forEach(function (el) {
    el.addEventListener("click", function (evt) {
        evt.preventDefault();
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector("." + this.dataset.slider).classList.add("slider-item--active");
        document.querySelector(".slider-nav-link--active").classList.remove("slider-nav-link--active");
        this.classList.add("slider-nav-link--active");
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
    });
}

nameField.required = false;
mailField.required = false;

if (letterForm) {
    letterForm.addEventListener("submit", function (evt) {
        if (!nameField.value || !mailField.value) {
            evt.preventDefault();

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


