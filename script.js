let picContent = document.getElementById('picContent');
let btnShowMore = document.getElementById('btnShowMore');
let btnShowLess = document.getElementById('btnShowLess');

picContainer = [];

// initialize picture array (container)
for (let i = 0; i < 26; i++) {
    picContainer.push(`./assets/img/03_pics/${i+1}.jpg`);
}

function createElement(id) {
    picContent.innerHTML += 
        `<img onclick="popOverlay(${id})" class="img-card" src="${picContainer[id]}">`
    };



function renderInit() {
    for (let i = 0; i < 12; i++) {
        createElement(i);
}};

function renderAll() {
    picContent.innerHTML = '';
    btnShowMore.classList.add('hidden');
    btnShowLess.classList.remove('hidden');
    for (let i = 0; i < picContainer.length; i++) {
        createElement(i);
        };
};

function renderLess() {
    picContent.innerHTML = '';
    btnShowMore.classList.remove('hidden');
    btnShowLess.classList.add('hidden');
    renderInit()
};

function popOverlay(id) {
    let getOverlay = document.getElementById('overlay');
    getOverlay.classList.remove('hidden');
    getOverlay.classList.add('flex-shown');
    getOverlay.innerHTML += `
        <div class="app-max-width overlay-container">
            <div class="overlay-content">
                <button class="btn-close-slider">X</button>
                <ul class="slider">
                    <li id="btn-previous"><</li>
                    <li id="btn-forward">></li>
                </ul>
                <img src="./assets/img/03_pics/${id+1}.jpg">
            </div>
        </div>`
}



