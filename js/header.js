// browser width check for responsive web
let browserWidth = () => {
}

window.addEventListener('DOMContentLoaded', function() {
    browserWidth();
});

window.addEventListener('resize', function() {
    browserWidth();
});


// header scroll event
window.addEventListener('scroll', function() {
    if(scrollY > 10) {
        header.classList.add('white');
    } else {
        header.classList.remove('white');
    }
});


// gnb mouseevent
let gnb = document.querySelector('.gnb');

gnb.addEventListener('mouseover', function() {
    header.classList.add('white');
    header.classList.add('active');
    header.addEventListener('mouseleave', () => {
        if(scrollY < 10) {
            header.classList.remove('white');
        }
        header.classList.remove('active');
    });
});


// tnb language menu
let langChoice = document.querySelector('.choice');
let language = document.querySelector('.language')
langChoice.addEventListener('click', function() {
    language.classList.toggle('active');
});


// tnb hamburger menu
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    gnb.classList.toggle('hamburger');
});