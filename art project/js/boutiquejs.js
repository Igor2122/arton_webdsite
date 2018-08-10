const loadGear = document.querySelector('.load-gear');
const leftGate = document.querySelector('.left-gate');
const rightGate = document.querySelector('.right-gate');
const sliderDiv = document.querySelector('.slider');

console.log(sliderDiv);
console.log(loadGear);

window.addEventListener('load', loadEvent);

    
function loadEvent () {
    loadGear.style.transform = "rotate(360deg)";
    rightGate.style.transform = 'translateX(90%)';
    leftGate.style.transform = 'translateX(-90%)';
}


    
