let sliderLinks = document.querySelectorAll(".slider-nav-link");
let sortList = document.querySelector(".sort-list");
let addressMailLink = document.querySelector(".address-mail-link");
let modalLetter = document.querySelector(".modal-letter");
let modalClose = document.querySelector(".modal-close");

if(sliderLinks){

sliderLinks.forEach(function(el){
    el.addEventListener("click", function(evt){
        evt.preventDefault();
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector("." + this.dataset.slider).classList.add("slider-item--active");
        document.querySelector(".slider-nav-link--active").classList.remove("slider-nav-link--active");
        this.classList.add("slider-nav-link--active");
    });

});
}

if(sortList){
sortList.addEventListener("click", function(evt){
    evt.preventDefault();
    if(evt.target.tagName != 'A') return;
    document.querySelector(".sort-link--active").classList.remove("sort-link--active");
    evt.target.classList.add("sort-link--active");
});
}
if(addressMailLink){
    addressMailLink.addEventListener("click", function(evt){
        evt.preventDefault();
        modalLetter.classList.add("modal--show");
    });

}
if(modalClose){
    modalClose.addEventListener("click", function(evt){
        evt.preventDefault();
        modalLetter.classList.remove("modal--show")
    });
}