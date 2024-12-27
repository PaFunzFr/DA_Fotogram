let picContent = document.getElementById("picContent");
let btnShowMore = document.getElementById("btnShowMore");
let btnShowLess = document.getElementById("btnShowLess");
let getOverlay = document.getElementById("overlay");
let currentIndex = 0;

picContainer = [];

// initialize picture array (container)
for (let i = 0; i < 26; i++) {
    picContainer.push(`./assets/img/03_pics/${i + 1}.jpg`);
}

function renderInit() {
    for (let i = 0; i < 12; i++) {
        createElement(i);
    }
}

function createElement(id) {
    picContent.innerHTML += `<img onclick="popOverlay(${id})" class="img-card" src="${picContainer[id]}">`;
}

function renderAll() {
    picContent.innerHTML = "";
    btnShowMore.classList.add("hidden");
    btnShowLess.classList.remove("hidden");
    for (let i = 0; i < picContainer.length; i++) {
        createElement(i);
    }
}

function renderLess() {
    picContent.innerHTML = "";
    btnShowMore.classList.remove("hidden");
    btnShowLess.classList.add("hidden");
    renderInit();
}

function popOverlay(imgId) {
    getOverlay.innerHTML = "";
    getOverlay.classList.remove("hidden");
    getOverlay.classList.add("flex-shown");
    createtOverlay(imgId);
}

function createtOverlay(imgId) {
    currentIndex = imgId;
    getOverlay.innerHTML += `
        <div class="app-max-width overlay-container">
            <div class="overlay-content">
                <button id="closeBtn" onclick="closeOverlay(event)" class="btn-close-slider">X</button>
                <ul class="slider">
                    <li onclick="prevPic(${currentIndex})" id="btn-previous"><</li>
                    <li onclick="nextPic(${currentIndex})" id="btn-forward">></li>
                </ul>
                <img class="overlay-pic" src="./assets/img/03_pics/${currentIndex + 1}.jpg">
            </div>
        </div>`;
}

function nextPic() {
    currentIndex ++
    if (currentIndex >= picContainer.length) {
        currentIndex = 0;
    }
    updateNextCurrentPic();
}

function prevPic() {
    currentIndex --;
    if (currentIndex <= 0) {
        currentIndex = picContainer.length;
    }
    updatePrevCurrentPic();
}

function updateNextCurrentPic() {
    let overlayPic = document.querySelector(".overlay-pic");
    overlayPic.src = `./assets/img/03_pics/${currentIndex + 1}.jpg`;
}

function updatePrevCurrentPic() {
    let overlayPic = document.querySelector(".overlay-pic");
    overlayPic.src = `./assets/img/03_pics/${currentIndex}.jpg`;
    console.log(overlayPic.src);
}

function closeOverlay(event) {
    if (event.target.id === "overlay" || event.target.id === "closeBtn") {
    getOverlay.classList.add("hidden");
    getOverlay.classList.remove("flex-shown");
}};