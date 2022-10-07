// header inspect browser size
let headerSize = function () {
    if(window.innerWidth > 1024 && header.classList.contains('mobile')) {
        header.classList.remove('mobile');
        header.classList.add('hamburgerGnb');
    } else if (window.innerWidth <= 1024 && header.classList.contains('hamburgerGnb')) {
        header.classList.remove('hamburgerGnb');
        header.classList.add('mobile');
    }
}

window.addEventListener('DOMContentLoaded', headerSize); 
window.addEventListener('resize', headerSize); 

// header scroll event
window.addEventListener('scroll', function() {
    if(scrollY > 10) {
        header.classList.add('white');
    } else if (!(header.classList.contains('active'))) {
        header.classList.remove('white');
    }
});


// gnb mouseevent
let gnb = document.querySelector('.gnb');

gnb.addEventListener('mouseover', function() {
    if(!(header.classList.contains('hamburgerGnb')) && !(header.classList.contains('mobile'))) {
        header.classList.add('white');
        header.classList.add('active');
        header.addEventListener('mouseleave', () => {
            if(scrollY < 10) {
                header.classList.remove('white');
            }
            header.classList.remove('active');
        });
    }
});


// enb language menu
let langChoice = document.querySelector('.choice');
let language = document.querySelector('.language')
langChoice.addEventListener('click', function() {
    language.classList.toggle('active');
});


// enb hamburger menu
let hamburger = document.querySelector('.hamburger');
let body = document.querySelector('body');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    body.classList.toggle('hamburger');

    if(window.innerWidth > 1024) {
        header.classList.toggle('hamburgerGnb');
    } else 
        header.classList.toggle('mobile');
});

// mobile gnb menu toggle
let depth01 = document.querySelectorAll('.depth01');
let depth02 = document.querySelectorAll('.depth02');

depth01.forEach(function(ele) {
    ele.addEventListener('click', function() {
        if(header.classList.contains('mobile') && hamburger.classList.contains('active')) {
            
            depth01.forEach(function(element) {
                if(element !== ele)
                    element.classList.remove('mobileActive');
            });

            ele.classList.toggle('mobileActive');
        }
    });
});


// mobile gnb close dark
let gnbMobileDark = document.querySelector('.gnbMobileDark');

gnbMobileDark.addEventListener('click', function() {
    header.classList.remove('mobile');
    body.classList.remove('hamburger');
    hamburger.classList.remove('active');
});