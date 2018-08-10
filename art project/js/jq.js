
const clockGear = document.querySelector('img.clock-png');

const aboutStuffDiv = document.querySelector('.about');

const windowOffset = window.pageYOffset;

window.addEventListener('scroll', () => {
    clockGear.style.transform = 'rotate('+window.pageYOffset+'deg)';
});



window.addEventListener('scroll', scrollTop, false);

const mainContent = document.querySelector('#main-content');


function scrollTop () {
    mainContent.style.top = (window.pageYOffset / -1.5) + 'px';    
}


const sliderListener = document.getElementById('slider');
let counter = 0;
const imagesList = document.getElementsByClassName('img-array');
const sliderDescription = document.getElementsByClassName('slider-description');

function slider () {
    imagesList[counter].style.left = '-100%';
    sliderDescription[counter].style.top = '-100%';
    counter++;
    if(counter  > (imagesList.length -1)) {
        counter = 0;
    }
    setTimeout('nextSlide()', 1000);
}

function nextSlide() {
    imagesList[counter].style.transition = 'left 1s ease';
    imagesList[counter].style.left = '0';
    
    setTimeout('slider()', 6000);
    setTimeout('descriptionDivSlider(), 5000');
}


function descriptionDivSlider () {
    sliderDescription[counter].style.top = '20%';
    sliderDescription[counter].style.transition = 'top 1s ease 1s';
}

nextSlide();











