/*
    ------------------------
    ------ Variables -------
    ------------------------
*/

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navItems = navMenu.querySelectorAll('.nav__item');

const hamburgerIconClass = "bx-menu";
const closeIconClass = "bx-x";

let menuIsOpen = false;

/*
    ------------------------
    ------ Functions -------
    ------------------------
*/

function toggleMenu(){

    navMenu.classList.toggle('show-mobile-menu');

    if (menuIsOpen){
        navToggle.classList.remove(closeIconClass);
        navToggle.classList.add(hamburgerIconClass);
    } else {
        navToggle.classList.remove(hamburgerIconClass);
        navToggle.classList.add(closeIconClass);
    }

    menuIsOpen = !menuIsOpen;
}

function setActive(){
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');

    // Close Mobile Menu after clicking Nav Item
    toggleMenu();
}

/*
    ------------------------
    ------ Main -------
    ------------------------
*/

navToggle.addEventListener('click', toggleMenu);

navItems.forEach(item => item.addEventListener('click', setActive))