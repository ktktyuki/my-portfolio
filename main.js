const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const reflection = document.getElementById("reflection");
const img = document.getElementById("imageee");
let slotNumber1 = 1;
let slotNumber2 = 2;
let slotNumber3 = 3;
const slotfunction1 = function () {
  min = Math.ceil(1);
  max = Math.floor(10);
  slotNumber1 = Math.floor(Math.random() * (max - min) + min);
  console.log(slotNumber1);
  slot1.textContent = slotNumber1;
};
const slotfunction2 = function () {
  min = Math.ceil(1);
  max = Math.floor(10);
  slotNumber2 = Math.floor(Math.random() * (max - min) + min);
  console.log(slotNumber2);
  slot2.textContent = slotNumber2;
};
const slotfunction3 = function () {
  min = Math.ceil(1);
  max = Math.floor(10);
  slotNumber3 = Math.floor(Math.random() * (max - min) + min);
  console.log(slotNumber3);
  slot3.textContent = slotNumber3;
};
const leech = function () {
  reflection.textContent = "リーチ！！";
  if (slotNumber1 === slotNumber2 && slotNumber2 === slotNumber3) {
    reflection.textContent = "Congratulations!!";
    restartButton.removeAttribute("disabled");
    img.src = "https://img.pachist.jp/article_images/o1390/momokyun_036.jpg";
    slot1.classList.add("colorr");
    slot2.classList.add("colorr");
    slot3.classList.add("colorr");
  }
};
startButton.onclick = function (min, max) {
  if (slotNumber1 === slotNumber2 && slotNumber2 === slotNumber3) {
    reflection.textContent = "Congratulations!!";
    restartButton.removeAttribute("disabled");
    img.src = "https://img.pachist.jp/article_images/o1390/momokyun_036.jpg";
    slot1.classList.add("colorr");
    slot2.classList.add("colorr");
    slot3.classList.add("colorr");
  } else if (slotNumber1 === slotNumber3) {
    setTimeout(slotfunction2, 500);
    leech();
  } else {
    reflection.textContent = "回せ！！";
    setTimeout(slotfunction1, 500);
    setTimeout(slotfunction2, 1000);
    setTimeout(slotfunction3, 1500);
    if (slotNumber1 === slotNumber2 && slotNumber2 === slotNumber3) {
      reflection.textContent = "Congratulations!!";
      restartButton.removeAttribute("disabled");
      img.src = "https://img.pachist.jp/article_images/o1390/momokyun_036.jpg";
    }
  }
};
restartButton.onclick = function () {
  setTimeout(slotfunction1, 500);
  setTimeout(slotfunction2, 1000);
  setTimeout(slotfunction3, 1500);
  restartButton.setAttribute("disabled", true);
  reflection.textContent = "回せ！！";
  slot1.classList.remove("colorr");
  slot2.classList.remove("colorr");
  slot3.classList.remove("colorr");
};
