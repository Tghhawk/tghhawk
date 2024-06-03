const burger = document.querySelector('.burger');
const menu =document.querySelector('.menu');
const bts = document.querySelector('.bts');



burger.addEventListener('click',() => {
    menu.classList.toggle('open');
});


setTimeout(()  =>{
    bts.remove()
},2000);