//scroll of page




// HEADER
let menuOpen = false

// position fixed nav bar


document.addEventListener('scroll', function () {
    let colla = document.querySelector('#colla')
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
let width = window.innerWidth

function burgerMenu() {
    let burger = document.getElementById('hamburger_menu')
    if (width < 768) {
        if (menuOpen == false) {
            menuOpen = true
            burger.style.display = 'block'
        }
        else {
            menuOpen = false
            burger.style.display = 'none'
        }
    }
    else {
        menuOpen = false
        burger.style.display = 'none'
    }
}

// HEADER NAV MENU ON SCROLL
document.addEventListener('scroll', function () {
    let navMenu = [
        document.querySelector('#home1'),
        document.querySelector('#aboutus1'),
        document.querySelector('#blog1'),
        document.querySelector('#menu1'),
        document.querySelector('#newsletter1'),
        document.querySelector('#contacts1')]

    let pageHeight = window.innerHeight
    let distanceFromTop0 = document.querySelector('header').getBoundingClientRect().top
    let distanceFromTop1 = document.querySelector('#about-us').getBoundingClientRect().top
    let distanceFromTop2 = document.querySelector('#blog').getBoundingClientRect().top
    let distanceFromTop3 = document.querySelector('#menu').getBoundingClientRect().top
    let distanceFromTop4 = document.querySelector('#newsletter').getBoundingClientRect().top
    let distanceFromTop5 = document.querySelector('#contact-us').getBoundingClientRect().top
    let elementHeight0 = document.querySelector('header').getBoundingClientRect().bottom - distanceFromTop0
    let elementHeight1 = document.querySelector('#about-us').getBoundingClientRect().bottom - distanceFromTop1
    let elementHeight2 = document.querySelector('#blog').getBoundingClientRect().bottom - distanceFromTop2
    let elementHeight3 = document.querySelector('#menu').getBoundingClientRect().bottom - distanceFromTop3
    let elementHeight4 = document.querySelector('#newsletter').getBoundingClientRect().bottom - distanceFromTop4
    let elementHeight5 = document.querySelector('#contact-us').getBoundingClientRect().bottom - distanceFromTop5
    // HOME BUTTON
    if (distanceFromTop0 == 0 || distanceFromTop0 > (elementHeight0 * -1)) {
        navMenu[0].classList.add('scroll_underline')
    }
    else {
        navMenu[0].classList.remove('scroll_underline')
    }
    // ABOUT US BUTTON
    if (distanceFromTop1 < (pageHeight / 2) && distanceFromTop1 > (elementHeight1 * -1)) {
        navMenu[0].classList.remove('scroll_underline')
        navMenu[1].classList.add('scroll_underline')
    }
    else {
        navMenu[1].classList.remove('scroll_underline')
    }
    // BLOG BUTTON
    if (distanceFromTop2 < (pageHeight / 2) && distanceFromTop2 > (elementHeight2 * -1)) {
        navMenu[1].classList.remove('scroll_underline')
        navMenu[2].classList.add('scroll_underline')
    }
    else {
        navMenu[2].classList.remove('scroll_underline')
    }
    // MENU BUTTON
    if (distanceFromTop3 < (pageHeight / 2) && distanceFromTop3 > (elementHeight3 * -1)) {
        navMenu[2].classList.remove('scroll_underline')
        navMenu[3].classList.add('scroll_underline')
    }
    else {
        navMenu[3].classList.remove('scroll_underline')
    }
    // NEWS BUTTON
    if (distanceFromTop4 < (pageHeight / 2) && distanceFromTop4 > (elementHeight4 * -1)) {
        navMenu[3].classList.remove('scroll_underline')
        navMenu[4].classList.add('scroll_underline')
    }
    else {
        navMenu[4].classList.remove('scroll_underline')
    }
    // CONTACTS BUTTON
    if (distanceFromTop5 < (pageHeight / 2) && distanceFromTop5 > (elementHeight5 * -1)) {
        navMenu[4].classList.remove('scroll_underline')
        navMenu[5].classList.add('scroll_underline')
    }
    else {
        navMenu[5].classList.remove('scroll_underline')
    }
})


