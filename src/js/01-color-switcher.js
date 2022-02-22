let intervalId = null;
let btnDisabled = false;

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

switchDisabledBtns();

function onBtnStartClick() {
    switchBodyBgColor();
    intervalId = setInterval(switchBodyBgColor, 1000);
    btnDisabled = true;
    switchDisabledBtns()
 }

function onBtnStopClick() {
    clearInterval(intervalId);
    btnDisabled = false;
    switchDisabledBtns();
}

function switchDisabledBtns() {    
    refs.btnStart.disabled = btnDisabled;
    refs.btnStop.disabled = !btnDisabled;    
}

function switchBodyBgColor() {
    const bodyBgColor = getRandomHexColor()
    refs.body.style.backgroundColor = bodyBgColor;
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}