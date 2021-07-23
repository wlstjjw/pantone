const scrollstart = document.querySelector('.scrollstart');
const scrstSlide1 = document.querySelector('.scrstart-slide1');
const scrstSlide2 = document.querySelector('.scrstart-slide2');
let scrstLeft = 100;
let scrstHeight = 40;
scrstSlide1.style.left = - scrstLeft + '%';
scrstSlide2.style.left = scrstLeft + '%';
scrollstart.style.height = scrstHeight + 'vh';

const section2 = document.querySelector('#section2');
const rightSlide = document.querySelector('.right-slide');
const slideBox = document.querySelector('.slide-box');
const lightgraySlide = document.querySelector('.lightgray-slide');
const darkgraySlide = document.querySelector('.darkgray-slide');

let slideBoxTop = 0;
slideBox.style.top = slideBoxTop;

// let ligrayRight = 150;
// let dkgrayRight = 215;
lightgraySlide.style.right = - 140 + '%';
darkgraySlide.style.right = - 215 + '%';

const section3 = document.querySelector('#section3');

addEventListener('scroll', function () {
    const scrolltop = document.documentElement.scrollTop;
    scrollstart.style.height = scrstHeight + (scrolltop / 5) + 'vh';
    scrstSlide1.style.left = (scrolltop / 7) - scrstLeft + '%';
    scrstSlide2.style.left = - (scrolltop / 7) + scrstLeft + '%';

    const announce = document.querySelector('.pantone-announce p');

    if (scrolltop >= section2.offsetTop - this.window.innerHeight / 2) {
        announce.style.top = '50%';
        announce.style.opacity = 1;
    }

    if (scrolltop >= announce.offsetTop - this.window.innerHeigth / 2) {
        const colorvalue = this.document.querySelector('.bold-colorvalue');
        colorvalue.style.left = 0;
    }


    if (scrolltop >= rightSlide.offsetTop && scrolltop < section3.offsetTop - this.window.innerHeight) {
        slideBox.style.top = scrolltop - rightSlide.offsetTop + 'px';

        let ligrayRight = ((scrolltop - rightSlide.offsetTop) / 10) - 140;
        lightgraySlide.style.right = ligrayRight + '%';

        if (ligrayRight >= -50) {
            lightgraySlide.style.right = - 50 + '%';
            let dkgrayRight = (scrolltop - rightSlide.offsetTop) / 10 - 215;
            darkgraySlide.style.right = dkgrayRight + '%';

            if (dkgrayRight >= -70) {
                darkgraySlide.style.right = -70 + '%';
            }
        }
    }
})
