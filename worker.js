importScripts('sub-worker.js')

console.log(language)

onmessage = function(message) {
  postMessage('started expensive calculation')
  let sum = 0;
  for(let i = 0; i < 1000000000; i++) {
    sum+=i;
  }
  postMessage(sum)
  postMessage("finished expensive calculation");
}


