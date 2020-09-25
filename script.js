let inputEl = document.getElementById("poundInput");
let gramEl = document.getElementById("gramSpan");
let kilogramEl = document.getElementById("kilogramSpan");
let ounceEl = document.getElementById("ounceSpan");

inputEl.addEventListener("input", function (e) {
  let pounds = e.target.value;

  let gram = pounds / 0.0022046;
  gramEl.innerText = gram;

  let kilogramSpan = pounds / 2.2046;
  kilogramEl.innerText = kilogramSpan;

  let ounces = pounds * 16;
  ounceEl.innerText = ounces;
});
