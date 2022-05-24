const header = document.querySelector("#header");
const navLinks = document.querySelectorAll(".nav_link");
const testBtn = document.querySelector('#testBtn');

console.log(navLinks);

/*Будем менять цвет нашей шапке при скролле*/

window.addEventListener("scroll", checkScroll);

/*Проверка позиции скролла и выдача цвета*/

document.addEventListener("DOMContentLoaded", function() {
    checkScroll();
});

/*Создаем функцию чтобы не писать 100 раз одно и тоже*/

function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('grey');
    } else {
        header.classList.remove('grey');
    }
};