let sliderLinks = document.querySelectorAll(".slider-nav-link");
let sortList = document.querySelector(".sort-list");
let addressMailLink = document.querySelector(".address-mail-link");
let modalLetter = document.querySelector(".modal-letter");
let modalClose = document.querySelector(".modal-close");
let nameField = document.querySelector(".name-field");
// let letterForm = document.querySelector(".letter-form");
// let mailField = document.querySelector(".mail-field");
let directionList = document.querySelector(".direction-list");
let directionButtons = document.querySelector(".direction-svg");

if(directionButtons){

    directionButtons.forEach(function(el){
        el.addEventListener("click", function(evt){
            evt.preventDefault();
            document.querySelector(".direction-svg--active").classList.remove("direction-svg--active");
            document.querySelector("." + this.dataset.direction).classList.add("direction-svg--active");
           
            
        });
    };
}


if(sortList){
sortList.addEventListener("click", function(evt){
    evt.preventDefault();
    if(evt.target.tagName != 'A') return;
    document.querySelector(".sort-link--active").classList.remove("sort-link--active");
    evt.target.classList.add("sort-link--active");
});

}

// почему-то не убирает класс с сортирвки

// if(directionButtons){
// directionList.addEventListener("click", function(evt){
//     evt.preventDefault();
//     if(evt.target.tagName != 'A') return;
//     document.querySelector(".direction-svg--active").classList.remove("direction-svg--active");
//     evt.target.classList.add("direction-svg--active");
//     });
//     }
// Не работат, почему-пока не понял

if(addressMailLink){
    addressMailLink.addEventListener("click", function(evt){
        evt.preventDefault();
        modalLetter.classList.add("modal--show");
        nameField.focus();
    });

}
if(modalClose){
    modalClose.addEventListener("click", function(evt){
        evt.preventDefault();
        modalLetter.classList.remove("modal--show");
    });
}

modalLetter.addEventListener("click", function(evt){
    console.log(evt.target);
    console.log(modalLetter.classList.contains("modal--show"));
    if(modalLetter.classList.contains("modal--show")){

    
    if(!evt.target.classList.contains("form-wrapper")){
        modalLetter.classList.remove("modal--show");
    }
}
},   true);




// if(letterForm){
//     letterForm.addEventListener("submit", function(evt){
//         if(!nameField.value || !mailField.value) {
//         evt.preventDefault();

//     } else {
//         localStorage.setItem("name", nameField.value);
//     }
// });