const scrollstart = document.querySelector('.scrollstart');
const scrstSlide1 = document.querySelector('.scrstart-slide1');
const scrstSlide2 = document.querySelector('.scrstart-slide2');
let scrstLeft = 100;
let scrstHeight = 40;
scrstSlide1.style.left = - scrstLeft + '%';
scrstSlide2.style.left = scrstLeft + '%';
scrollstart.style.height = scrstHeight + 'vh';

const rightSlide = document.querySelector('.right-slide');
const slideBox = document.querySelector('.slide-box');
const lightgraySlide = document.querySelector('.lightgray-slide');
const darkgraySlide = document.querySelector('.darkgray-slide');

let slideBoxTop = 0;
slideBox.style.top = slideBoxTop;

// let ligrayRight = 150;
let dkgrayRight = 215;
lightgraySlide.style.right = - 140 + '%';
darkgraySlide.style.right = - dkgrayRight + '%';

const section3 = document.querySelector('#section3');
console.log(section3.offsetTop)

addEventListener('scroll', function () {
    const scrolltop = document.documentElement.scrollTop;
    scrollstart.style.height = scrstHeight + (scrolltop / 5) + 'vh';
    scrstSlide1.style.left = (scrolltop / 7) - scrstLeft + '%';
    scrstSlide2.style.left = - (scrolltop / 7) + scrstLeft + '%';

    height = `calc(${rightSlide.offsetTop}px-250vh)`;
    console.log(height);

    if (scrolltop >= rightSlide.offsetTop && scrolltop < section3.offsetTop) {
        slideBox.style.top = scrolltop - rightSlide.offsetTop + 'px';

        let ligrayRight = ((scrolltop - rightSlide.offsetTop) / 10) - 140;
        lightgraySlide.style.right = ligrayRight + '%';

        if (ligrayRight >= -50) {
            lightgraySlide.style.right = - 50 + '%';
            darkgraySlide.style.right = (scrolltop - rightSlide.offsetTop) / 10 - dkgrayRight + '%';
        }
    }
})
