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
darkgraySlide.style.right = - 200 + '%';

const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');
const section6 = document.querySelector('#section6');
const section7 = document.querySelector('#section7');
const section8 = document.querySelector('#section8');
const section9 = document.querySelector('#section9');
const section10 = document.querySelector('#section10');

addEventListener('scroll', function () {
    const scrolltop = document.documentElement.scrollTop;
    scrollstart.style.height = scrstHeight + (scrolltop / 5) + 'vh';
    scrstSlide1.style.left = (scrolltop / 7) - scrstLeft + '%';
    scrstSlide2.style.left = - (scrolltop / 7) + scrstLeft + '%';

    //section2 시작
    if (scrolltop >= section2.offsetTop - this.window.innerHeight / 2) {
        const announce = document.querySelector('.pantone-announce p');
        announce.style.top = '50%';
        announce.style.opacity = 1;
    }

    if (scrolltop >= section2.offsetTop + this.window.innerHeight / 3) {
        const colorvalue = this.document.querySelector('.colorvalue');
        colorvalue.style.left = '0';
    }

    //스크롤 할때 회색 슬라이드가 오른쪽에서 나오도록

    lightgraySlide.style.position ='absolute';
    lightgraySlide.style.right = 100 + '%';
    darkgraySlide.style.position ='absolute';
    darkgraySlide.style.right = 100 + '%';


    if (scrolltop >= rightSlide.offsetTop && scrolltop < section3.offsetTop - this.window.innerHeight) {
        
        let ligrayRight = ((scrolltop - rightSlide.offsetTop) / 10) - 140;
        lightgraySlide.style.position ="fixed";
        lightgraySlide.style.bottom = "0";
        lightgraySlide.style.right = ligrayRight + '%';


        if (ligrayRight >= -50) {
            lightgraySlide.style.right = -50 + '%'; 

            let dkgrayRight = (scrolltop - rightSlide.offsetTop) / 15 - 200;
            darkgraySlide.style.position ="fixed";
            darkgraySlide.style.bottom = "0";
            darkgraySlide.style.right = dkgrayRight + '%';

            if (dkgrayRight >= -75) {
                darkgraySlide.style.right = -75 + '%';
            }
            
        }
    }
    //회색슬라이드가 정해진 영역까지 다 나왔을 때, 스크롤 해도 더 이상 위치가 변하지 않도록 고정
    if (scrolltop >= section3.offsetTop - this.window.innerHeight) {
        lightgraySlide.style.position = "absolute";
        lightgraySlide.style.right = 0 + '%';

        darkgraySlide.style.position ="absolute";
        darkgraySlide.style.right = -50 + '%';
    }

    if (scrolltop >= section3.offsetTop - 500) {
        const colorpallet = document.querySelector('.colorpallet');
        colorpallet.style.left = '0';
    }
    //section2 끝


    //section3 시작
    //컬러 블록이 스크롤 할 때 왼쪽과 오른쪽으로 움직이도록
    const colorblockL = document.querySelector('#section3 .go-left-block');
    const colorblockR = document.querySelector('#section3 .go-right-block');
    const fixedblock = document.querySelector('#section3 .fixed-block');
    

    colorblockR.style.position = 'absolute';
    colorblockR.style.top = 450 + 'px';
    colorblockR.style.right = 0 + '%';

    fixedblock.style.position = 'absolute';
    fixedblock.style.top = '900px';
    fixedblock.style.left = 0;


    if (scrolltop >= section3.offsetTop + 750 && scrolltop < section3.offsetTop + 750 + 1600) {
        colorblockL.style.position = 'fixed';
        colorblockL.style.top = 0 + 'px';
        colorblockL.style.left = - (scrolltop - (section3.offsetTop + 750)) + 'px';

        colorblockR.style.position = 'fixed';
        colorblockR.style.top = 450 + 'px';
        colorblockR.style.right = - (scrolltop - (section3.offsetTop + 750)) + 'px';

        fixedblock.style.position = 'fixed';
        fixedblock.style.top = '900px';
    }

    console.log(scrolltop, section3.offsetTop + 750 + 1600)
    if (scrolltop >= section3.offsetTop + 750 + 1600) {
        colorblockL.style.position = 'absolute';
        colorblockL.style.bottom = 450 + 'px';
        colorblockL.style.left = -100 + '%';

        colorblockR.style.position = 'absolute';
        colorblockR.style.bottom = 0 + 'px';
        colorblockR.style.right = -100 + '%';
    }

    if (scrolltop >= section4.offsetTop - 500) {
        const socialmedia = document.querySelector('.socialmedia');
        socialmedia.style.left = '0';
    }
    if (scrolltop >= section4.offsetTop + 1000) {
        const fashion = document.querySelector('.fashion');
        fashion.style.left = '0';
    }

    if (scrolltop >= section5.offsetTop - 500) {
        const adobestock = document.querySelector('.adobestock');
        adobestock.style.left = 0;
        const textHidden = document.querySelector('.text-hidden');
        textHidden.style.opacity = 1;
        textHidden.style.top = '300px';
    }
    if (scrolltop >= section5.offsetTop + 1000) {
        const cosmetic = document.querySelector('.cosmetic');
        cosmetic.style.left = '0';
    }
    if (scrolltop >= section5.offsetTop + 1300) {
        const cosImg = document.querySelector('.cosimg-bigger');
        cosImg.style.width = 300 + (scrolltop - section5.offsetTop - 1300) / 5 + 'px';
        if ((scrolltop - section5.offsetTop - 1300) / 5 > 300) {
            cosImg.style.width = '600px';
        }
    }

    if (scrolltop >= section6.offsetTop && scrolltop <= section6.offsetTop + 2000) {
        const visualTextBox = document.querySelector('.visual div');
        visualTextBox.style.top = scrolltop - section6.offsetTop + 'px';
        const visualText = document.querySelector('.visual div p');
        visualText.style.transform = `translateX(-${(scrolltop - section6.offsetTop) * 2.5}px)`;
    }

    const colorblockL2 = document.querySelector('#section7 .go-left-block');
    const colorblockR2 = document.querySelector('#section7 .go-right-block');
    const fixedblock3 = document.querySelector('#section7 .fixed-block1');
    const fixedblock4 = document.querySelector('#section7 .fixed-block2');

    if (scrolltop >= section7.offsetTop && scrolltop <= section7.offsetTop + this.window.innerWidth) {
        colorblockL2.style.top = scrolltop - section7.offsetTop + 'px';
        colorblockL2.style.left = -(scrolltop - section7.offsetTop) + 'px';

        colorblockR2.style.top = scrolltop - section7.offsetTop + 450 + 'px';
        colorblockR2.style.right = -(scrolltop - section7.offsetTop) + 'px';

        fixedblock3.style.top = scrolltop - section7.offsetTop + 900 + 'px';
        fixedblock4.style.top = scrolltop - section7.offsetTop + 1350 + 'px';
    }

    const interImg = document.querySelector('.interimg-bigger');
    if (scrolltop >= section8.offsetTop + 700) {
        interImg.style.width = (scrolltop - section8.offsetTop - 700) / 5 + 400 + 'px';
    }

    const shoppantone = document.querySelector('.shoppantone');
    const itemImg = document.querySelectorAll('.item-img');
    const moreBox = document.querySelector('.more-box');
    if (scrolltop >= section9.offsetTop - 700) {
        shoppantone.style.left = '0';
        itemImg.forEach(item => item.style.opacity = 1);
    }
    if (scrolltop >= section9.offsetTop + 500) {
        moreBox.style.height = '150px';
    }
})
