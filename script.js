const qoshuv1 = document.querySelector(".qoshuv-1");
const qoshuv2 = document.querySelector(".qoshuv-2");
const javob = document.querySelector(".qoshuv-text-3");
// ////////////////////////////////////////////////////
const ayiruv1 = document.querySelector(".ayiruv-1");
const ayiruv2 = document.querySelector(".ayiruv-2");
const javob2 = document.querySelector(".ayiruv-text-3");
// ////////////////////////////////////////////////////
const kopaytiruv1 = document.querySelector(".kopaytiruv-1");
const kopaytiruv2 = document.querySelector(".kopaytiruv-2");
const javob3 = document.querySelector(".kopaytiruv-text-3");
// //////////////////////////////////////////////////////
const boluv1 = document.querySelector(".boluv-1");
const boluv2 = document.querySelector(".boluv-2");
const javob4 = document.querySelector(".boluv-text-3");
///////////////////////////////////////////
function qosh() {
  const qoshuvqiymat1 = Number(qoshuv1.value);
  const qoshuvqiymat2 = Number(qoshuv2.value);
  const hisobkitobla1 = qoshuvqiymat1 + qoshuvqiymat2;
  javob.textContent = hisobkitobla1;
}
javob.addEventListener("click", qosh);
//////////////////////
function ayir() {
  const ayiruvqiymat1 = Number(ayiruv1.value);
  const ayiruvqiymat2 = Number(ayiruv2.value);
  const hisobkitobla2 = ayiruvqiymat1 - ayiruvqiymat2;
  javob2.textContent = hisobkitobla2;
}
javob2.addEventListener("click", ayir);
// /////////////////////////////////////////
function kopaytir() {
  const kopaytiruvqiymat1 = Number(kopaytiruv1.value);
  const kopaytiruvqiymat2 = Number(kopaytiruv2.value);
  const hisobkitobla3 = kopaytiruvqiymat1 * kopaytiruvqiymat2;
  javob3.textContent = hisobkitobla3;
}
javob3.addEventListener("click", kopaytir);
////////////////////////////////////////////
function bol() {
  const boluvqiymat1 = Number(boluv1.value);
  const boluvqiymat2 = Number(boluv2.value);
  const hisobkitobla4 = boluvqiymat1 / boluvqiymat2;
  javob4.textContent = hisobkitobla4;
}
javob4.addEventListener("click", bol);
// ///////////////////////////////////////
// //////PERIMETR OF RESTANGLE
let inputPerimert1 = document.querySelector(".inp");
let inputPerimetr2 = document.querySelector(".inp2");
let javobPer1 = document.querySelector(".javobPer1");

let inputYuza1 = document.querySelector(".inp-2");
let inputYuza2 = document.querySelector(".inp2-2");
let javobYuza2 = document.querySelector(".javobYuza2");

function Perimetr() {
  const forNumTip1 = Number(inputPerimert1.value);
  const forNumTip2 = Number(inputPerimetr2.value);
  const perhisob = 2 * (forNumTip1 + forNumTip2);
  javobPer1.textContent = perhisob;
  if (forNumTip1 < 0) {
    javobPer1.textContent = "🟫 manfiy bo'lmaydi";
  }
  if (forNumTip2 < 0) {
    javobPer1.textContent = "🟫 manfiy bo'lmaydi";
  }
}
javobPer1.addEventListener("click", Perimetr);

function Yuza() {
  const forNumTip3 = Number(inputYuza1.value);
  const forNumTip4 = Number(inputYuza2.value);
  const yuzaHisob = forNumTip3 * forNumTip4;
  javobYuza2.textContent = yuzaHisob;
  if (forNumTip3 < 0) {
    javobYuza2.textContent = "🟫 manfiy bo'lmaydi";
  }
  if (forNumTip4 < 0) {
    javobYuza2.textContent = "🟫 manfiy bo'lmaydi";
  }
}
javobYuza2.addEventListener("click", Yuza);
// ////////////////////////
const tenglamaInp1 = document.querySelector(".tenglama-inp-1");
const tenglamaInp2 = document.querySelector(".tenglama-inp-2");
const tenglamaInp3 = document.querySelector(".tenglama-inp-3");
const tenglamaBtn = document.querySelector(".tenglama-btn");
///////////////////////////
const tenglamaInp4 = document.querySelector(".tenglama-inp-4");
const tenglamaInp5 = document.querySelector(".tenglama-inp-5");
const tenglamaInp6 = document.querySelector(".tenglama-inp-6");
const tenglamaBtn2 = document.querySelector(".tenglama-btn-2");
//////////////////////////
const tenglamaInp7 = document.querySelector(".tenglama-inp-7");
const tenglamaInp8 = document.querySelector(".tenglama-inp-8");
const tenglamaInp9 = document.querySelector(".tenglama-inp-9");
const tenglamaBtn3 = document.querySelector(".tenglama-btn-3");
////////////////////////////////
const tenglamaInp10 = document.querySelector(".tenglama-inp-10");
const tenglamaInp11 = document.querySelector(".tenglama-inp-11");
const tenglamaInp12 = document.querySelector(".tenglama-inp-12");
const tenglamaBtn4 = document.querySelector(".tenglama-btn-4");

function tenglamaJavob() {
  let inp1 = Number(tenglamaInp1.value);
  let inp2 = Number(tenglamaInp2.value);
  let inp3 = Number(tenglamaInp3.value);
  const inpJavob = (inp3 - inp2) / inp1;
  tenglamaBtn.textContent = inpJavob;
}
tenglamaBtn.addEventListener("click", tenglamaJavob);
// /////////////////////
function tenglamaJavob2() {
  let inp4 = Number(tenglamaInp4.value);
  let inp5 = Number(tenglamaInp5.value);
  let inp6 = Number(tenglamaInp6.value);
  const inpJavob2 = (inp6 + inp5) / inp4;
  tenglamaBtn2.textContent = inpJavob2;
}
tenglamaBtn2.addEventListener("click", tenglamaJavob2);
//////////////////////////////////
function tenglamaJavob3() {
  let inp7 = Number(tenglamaInp7.value);
  let inp8 = Number(tenglamaInp8.value);
  let inp9 = Number(tenglamaInp9.value);
  const inpJavob3 = inp9 / inp8 / inp7;
  tenglamaBtn3.textContent = inpJavob3;
}
tenglamaBtn3.addEventListener("click", tenglamaJavob3);
////////////////////////////////////////
function tenglamaJavob4() {
  let inp10 = Number(tenglamaInp10.value);
  let inp11 = Number(tenglamaInp11.value);
  let inp12 = Number(tenglamaInp12.value);
  const inpJavob4 = (inp12 * inp11) / inp10;
  tenglamaBtn4.textContent = inpJavob4;
}
tenglamaBtn4.addEventListener("click", tenglamaJavob4);
