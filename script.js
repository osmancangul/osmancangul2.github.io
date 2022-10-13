const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu li');
    burger.addEventListener('click',() => {
        nav.classList.toggle('menu-active');
    });


}

navShow();