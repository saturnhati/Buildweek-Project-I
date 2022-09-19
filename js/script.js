// HEADER - position fixed

let colla = document.querySelector('#colla')

document.addEventListener('scroll', function () {
    let top = window.pageYOffset
    if (top > 355) {
        colla.style.position = 'fixed';
        colla.style.top = 0;
    }
    else {
        colla.style.position = 'absolute';
        colla.style.top = '355px';
    }
})
