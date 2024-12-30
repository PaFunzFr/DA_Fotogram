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
  picContent.innerHTML += `
        <div class="card-wrapper">
            <img onclick="popOverlay(${id})" class="img-card" src="${picContainer[id]}">
        </div>`;
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
        <button id="closeBtn" onclick="closeOverlay(event)" class="btn-close-slider">X</button>
        <div class="app-max-width overlay-container">
            <div class="overlay-content">
                <ul class="slider">
                    <li onclick="prevPic(${currentIndex})" id="btn-previous"><</li>
                    <li onclick="nextPic(${currentIndex})" id="btn-forward">></li>
                </ul>
                <img class="overlay-pic" src="./assets/img/03_pics/${
                  currentIndex + 1
                }.jpg">
            </div>
        </div>`;
}

function nextPic() {
  currentIndex++;
  if (currentIndex >= picContainer.length) {
    currentIndex = 0;
  }
  updateCurrentPic();
}

function prevPic() {
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = picContainer.length - 1;
  }
  updateCurrentPic();
}

function updateCurrentPic() {
  let overlayPic = document.querySelector(".overlay-pic");
  overlayPic.src = `./assets/img/03_pics/${currentIndex + 1}.jpg`; // index = 0, picture name = 1 => +1
}

function closeOverlay(event) {
  if (event.target.id === "overlay" || event.target.id === "closeBtn") {
    getOverlay.classList.add("hidden");
    getOverlay.classList.remove("flex-shown");
  }
}
