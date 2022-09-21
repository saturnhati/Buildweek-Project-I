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
    let top = window.pageYOffset
    let homeH = document.querySelector('header').clientHeight
    let home = document.getElementById('home1')
    let aboutUsH = document.querySelector('#about-us').clientHeight
    let aboutUs = document.getElementById('aboutus1')
    let blogH = document.querySelector('#blog').clientHeight
    let blog = document.getElementById('blog1')
    let menuH = document.querySelector('#menu1').clientHeight
    let menu = document.getElementById('menu')
    let newsH = document.querySelector('#newsletter1').clientHeight
    let news = document.getElementById('newsletter')
    let contactsH = document.querySelector('#contacts1').clientHeight
    let contacts = document.getElementById('contact-us')
    if (top - homeH + 100 < 0) {
        home.classList.add('scroll_underline')
        console.log('on')
    }
    else {
        home.classList.remove('scroll_underline')
        console.log('off')

        if (top - aboutUsH + 100 < 0) {
            aboutUs.classList.add('scroll_underline')
            console.log('on1')
        }
        else {
            aboutUs.classList.remove('scroll_underline')
            console.log('off1')

            if (top - blogH + 100 < 0) {
                blog.classList.add('scroll_underline')
                console.log('on2')
            }
            else {
                blog.classList.remove('scroll_underline')
                console.log('off2')

                if (top - menuH + 100 < 0) {
                    menu.classList.add('scroll_underline')
                    console.log('on3')
                }
                else {
                    menu.classList.remove('scroll_underline')
                    console.log('off3')

                    if (top - newsH + 100 < 0) {
                        news.classList.add('scroll_underline')
                        console.log('on4')
                    }
                    else {
                        news.classList.remove('scroll_underline')
                        console.log('off4')

                        if (top - contactsH + 100 < 0) {
                            contacts.classList.add('scroll_underline')
                            console.log('on5')
                        }
                        else {
                            contacts.classList.remove('scroll_underline')
                            console.log('off5')
                        }
                    }
                }
            }
        }
    }
})