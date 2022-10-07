// /* taste scroll event */
// let tasteTop = taste.getBoundingClientRect().top;

// let listUp = function(top, list) {
//     if(top - scrollY < innerHeight) {
//         list.forEach(element => {
//         element.classList.add('scroll');
//     });
//     } else if (top - scrollY > innerHeight) {
//         list.forEach(element => {
//             element.removeAttribute('class');
//         });
//     }
// }

// window.addEventListener('scroll', listUp(tasteTop, tasteLi));

/* slide event  */
let btn = document.querySelectorAll('.Btn');

let itemSlide = function(listUl, listLi) {
    listUl.style.position = 'relative';
    listUl.style.right = 0;

    btn.forEach(btnn => {
        if(btnn.classList.contains('prev')) {

            btnn.addEventListener('click', function() {
                if(parseFloat(listUl.style.right) != 0) {
                    listUl.style.right = parseFloat(listUl.style.right) - parseFloat(listLi[0].clientWidth) + 'px';
                    if(parseFloat(listUl.style.right) == '0px') {
                    }
                }
            });
        } else {
            btnn.addEventListener('click', function() {
                // if(parseFloat(listUl.style.right)) {
                    listUl.style.right = parseFloat(listUl.style.right) + parseFloat(listLi[0].clientWidth) + 'px';
                // }
            });
        }
    });
}

/* taste list slide */
let tasteList = document.querySelector('.tasteSlide .list');
let tasteLi = Array.from(tasteList.children);

window.addEventListener('DOMContentLoaded', itemSlide(tasteList, tasteLi));

/* shop list slide */
let shopList = document.querySelector('.shopSlide .list');
let shopLi = Array.from(shopList.children);

window.addEventListener('DOMContentLoaded', itemSlide(shopList, shopLi));


// 슬라이드 오른쪽 멈추기