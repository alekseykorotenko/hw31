const block = document.querySelector('.block');
const width = window.innerWidth - 100;
const height = window.innerHeight - 100;

const getRandom = (max) => Math.floor(Math.random() * max);

console.log(block);
console.log(width);
console.log(height);

setInterval(() => {
  block.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
}, 500);

setInterval(() => {
  block.style.top = getRandom(height) + 'px';
  block.style.left = getRandom(width) + 'px';
}, 1000);
