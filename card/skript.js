let red =document.querySelector('#red');
let orange =document.querySelector('#orange');
let black =document.querySelector('#black');
let img =document.querySelector('img');
let btn =document.querySelector('button');


red.addEventListener('click', () => {
   img.setAttribute('src', './06058382-9851-4633-8a59-d33c3381ce63 (1).png');
   btn.style.background = 'red';
});

orange.addEventListener('click', () => {
   img.setAttribute('src', './1cbbb194-6155-468a-bef8-f86d036302a7.png');
   btn.style.background = 'orange';
});


black.addEventListener('click', () => {
   img.setAttribute('src', './33432171-1b88-400e-a1dc-631535ca8554.png');
   btn.style.background = 'black';
});