//scroll of page




// HEADER
let menuOpen = false

// position fixed nav bar
let colla = document.querySelector('#colla')

document.addEventListener('scroll', function () {
    let top = window.pageYOffset
    let burgerNotColla = document.getElementById('hamburger_menu')
    let clientHeight = document.querySelector('header').clientHeight
    let calc = (clientHeight - 85)
    if (top > calc) {
        colla.style.position = 'fixed';
        colla.style.marginTop = 0;
        colla.style.top = 0;
        if (menuOpen == true) {
            burgerNotColla.style.display = 'none';
        }
    }
    else {
        colla.style.position = 'absolute';
        colla.style.marginTop = '-85px';
        colla.style.top = 'unset';
        if (menuOpen == true) {
            burgerNotColla.style.display = 'block';
        }
    }
})

// hamburger menu
function burgerMenu() {
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