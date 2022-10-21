/* aside event */
let aside = document.querySelector('.asideArrow');
window.addEventListener('scroll', function() {
    if(scrollY > 50) {
        aside.textContent = "↑";
    } else {
        aside.textContent = "↓";
    }
});