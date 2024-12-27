let picContent = document.getElementById('picContent');
let btnShowMore = document.getElementById('btnShowMore');
let btnShowLess = document.getElementById('btnShowLess');
picContainer = [];

for (let i = 0; i < 26; i++) {
    picContainer.push(`./assets/img/03_pics/${i+1}.jpg`);
}


function renderInit() {
    for (let i = 0; i < 12; i++) {
        picContent.innerHTML += 
        `<img class="img-card" src="${picContainer[i]}">`
        }
};

function renderAll() {
    picContent.innerHTML = '';
    btnShowMore.classList.add('hidden');
    btnShowLess.classList.remove('hidden');
    for (let i = 0; i < picContainer.length; i++) {
        picContent.innerHTML += 
        `<img class="img-card" src="${picContainer[i]}">`
        };
};

function renderLess() {
    picContent.innerHTML = '';
    btnShowMore.classList.remove('hidden');
    btnShowLess.classList.add('hidden');
    for (let i = 0; i < 12; i++) {
        picContent.innerHTML += 
        `<img class="img-card" src="${picContainer[i]}">`
        }
};