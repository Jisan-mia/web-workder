const $calc = document.querySelector('.calc')
const $bgChange = document.querySelector('.bg-change')
const worker = new Worker('worker.js')
const $console = document.querySelector(".console");


$bgChange.addEventListener("click", () => {
  const colors = ["blue", "green", "yellow", "brown", "violet"];
  const randomIdx = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIdx];
});

worker.onmessage = function(message) {
  $console.innerHTML += `<p>${message.data}<p>`
  console.log(message.data)
}

$calc.addEventListener('click', () => {
  $console.innerHTML = ''
  worker.postMessage('please do the expensive calculation')
})











