const wheel = document.querySelector(".wheel");
const spin = document.querySelector(".box");
const winner = document.querySelector(".winner");
const win = document.querySelector(".winner p");

let value = 0;
function playRolette() {
  let randomRotate = () => {
    let rand = Math.ceil(Math.random() * 10800);
    while (rand < 3600) {
      rand = Math.ceil(Math.random() * 10800);
    }
    return rand;
  };
  value += randomRotate();
  let alreadyRot = value % 360;
  //   console.log(`randomRotate is ${value}`);
  //   console.log(`alreadyRot is ${alreadyRot}`);
  alreadyRot <= 105 && alreadyRot > 45
    ? (win.textContent = `مبروك كسبت سندوتش رقم 1`)
    : alreadyRot <= 165 && alreadyRot > 105
    ? (win.textContent = `مبروك كسبت سندوتش رقم 2`)
    : alreadyRot <= 225 && alreadyRot > 165
    ? (win.textContent = `حظ سئ`)
    : alreadyRot <= 285 && alreadyRot > 225
    ? (win.textContent = `مبروك كسبت سندوتش رقم 3`)
    : alreadyRot <= 345 && alreadyRot > 285
    ? (win.textContent = `مبروك كسبت سندوتش رقم 4`)
    : (win.textContent = `مبروك كسبت سندوتش رقم 5`);

  checkScreenSize(value);
  winner.style.display = "none";

  setTimeout(() => {
    winner.style.display = "flex";
  }, 8300);
}
spin.onclick = playRolette;

// التحقق من حجم الشاشة
function checkScreenSize(rotationAngle) {
  // احصل على عرض الشاشة
  let screenWidth = window.innerWidth;

  // قم بتحديث التحول بناءً على حجم الشاشة
  if (screenWidth >= 750) {
    wheel.style.transform = `translate(-50%, -83%) rotate(${rotationAngle}deg)`;
  } else {
    wheel.style.transform = `translate(-50%, -114%) rotate(${rotationAngle}deg)`;
  }
}

// تحديث التحول عند تحميل الصفحة وعند تغيير حجم الشاشة
window.addEventListener("load", checkScreenSize(45));
window.addEventListener("resize", checkScreenSize(45));
