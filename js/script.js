// HEADER

// position fixed nav bar
let colla = document.querySelector('#colla')

document.addEventListener('scroll', function () {
    let top = window.pageYOffset
    let clientHeight = document.querySelector('header').clientHeight;
    let calc = (clientHeight - 85)
    if (top > calc) {
        colla.style.position = 'fixed';
        colla.style.marginTop = 0;
        colla.style.top = 0;
    }
    else {
        colla.style.position = 'absolute';
        colla.style.marginTop = '-85px';
        colla.style.top = 'unset';
    }
})

// hamburger menu
let menuOpen = false
function burgerMenu() {
    let width = screen.width
    let burger = document.getElementById('hamburger_menu')
    if (menuOpen == false) {
        menuOpen = true
        burger.style.display = 'block'
    }
    else {
        menuOpen = false
        burger.style.display = 'none'
    }
}