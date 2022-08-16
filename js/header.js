// header
let header = document.getElementById('header');

document.addEventListener('scroll', () =>{
    scrollY >= 5 ? header.classList.add('white') :
                    header.classList.remove('white');
});


// 글로벌 네비게이션 바
let gnb = document.querySelector('.gnb');
let gnbsub = document.querySelectorAll('.gnbsub');


// 탑 메뉴
gnb.addEventListener('mouseenter', () => {
    if(!(header.classList.contains('hamburger' || 'mobile'))) {
        console.log('pc!');
        header.classList.add('white');
        header.classList.add('dropDown');
    
        for(let index of gnbsub) {
            index.style.display = 'flex';
            index.classList.add('opacity');
        }
    
        header.addEventListener('mouseleave',() => {
            header.classList.remove('dropDown');
            if(scrollY < 5) {
                header.classList.remove('white');
            }
    
            for(let index of gnbsub) {
                index.style.display = 'none';
                index.classList.remove('opacity');
            }
        });
    }
});


// 햄버거 메뉴
let hamburgerMenu = document.querySelector('.enb').childNodes[3].childNodes[1];
let hamburger = document.querySelector('.hamburger');
let body = document.getElementsByTagName('body')[0];


hamburgerMenu.addEventListener('click',() => {
    hamburger.classList.toggle('active');

    if(body.scrollWidth > 1024) {
        header.classList.toggle('hamburger');
        body.style.overflow != 'hidden' ? body.style.overflow = 'hidden' :
                                        body.style.overflow = 'auto';
    } else {
        header.classList.toggle('mobile');
        body.style.overflow != 'hidden' ? body.style.overflow = 'hidden' :
                                        body.style.overflow = 'auto';
    }
});


// 모바일 메뉴


// 언어 선택 메뉴
let langChoice = document.querySelector('.langChoice');
let langLink = document.querySelector('.langLink');

langChoice.addEventListener('click',() => {
    langLink.classList.toggle('active');
});

langLink.addEventListener('click',() => { 
    langLink.classList.toggle('active');
});