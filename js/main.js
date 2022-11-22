// /* scroll event */
// let listUp = function(section) {
//     let sectionTop = section.getBoundingClientRect().top;
//     // console.log(scrollY > Math.abs(window.innerHeight - sectionTop));

//     // if(scrollY > Math.abs(window.innerHeight - sectionTop)) {
//     //     console.log('add');
//         section.classList.add('opacityUp');
//     // } else {
//     //     console.log('remove');
//     //     section.classList.remove('opacityUp');
//     // }
// };

// /* taste scroll event */
// let taste = document.getElementById('taste');

// window.addEventListener('scroll', listUp(taste));

// /* shop scroll event */
// let shop = document.getElementById('shop');

// window.addEventListener('scroll', listUp(shop));

// /* community scroll event */
// let community = document.getElementById('community');

// window.addEventListener('scroll', listUp(community));

/* slide event  */
let itemSlide = function (slide) {
  let btnPrev = slide.parentElement.nextElementSibling;
  let btnNext = btnPrev.nextElementSibling;

  slide.style.position = "relative";
  slide.style.right = 0;

  btnPrev.addEventListener("click", function () {
    let liWidth = slide.children[0].clientWidth;
    if (slide.style.right != "0px")
      slide.style.right =
        parseFloat(slide.style.right) - parseFloat(liWidth) + "px";
  });

  btnNext.addEventListener("click", function () {
    let liWidth = slide.children[0].clientWidth;
    if (
      slide.style.right !=
      (slide.children.length - Math.round(slide.clientWidth / liWidth)) *
        liWidth +
        "px"
    )
      slide.style.right =
        parseFloat(slide.style.right) + parseFloat(liWidth) + "px";
  });
};

let listRight = function (slide) {
  if (body.clientWidth <= 768) {
    slide.style.right = "0px";
    console.log("right zero!");
  }

  let liWidth = slide.children[0].clientWidth;
  // slide.style.right = parseFloat(liWidth) + 'px';
};

/* taste list slide */
let tasteList = document.querySelector(".tasteSlide .list");

window.addEventListener("DOMContentLoaded", itemSlide(tasteList));
tasteList.addEventListener("resize", listRight(tasteList));

/* shop list slide */
let shopList = document.querySelector(".shopSlide .list");

window.addEventListener("DOMContentLoaded", itemSlide(shopList));
// shopList.addEventListener('resize', listRight(shopList));
