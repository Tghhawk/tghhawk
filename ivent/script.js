let btn = document.querySelector('.btn')
let body = document.querySelector('body')

// click-при клике

// dblcick-2 нажатие

// mouseover-при навидение

// mousedown- работае сразу приклике

// mouseoot-приве отвидение 

// mouseup-при отпускание мышкой от элемента

// mousemove-при движение мышкой над элементом

// focus-при фокусе

// blur- при потери фокуса

// keydown-нажатие на клавиатуре






body.addEventListener('keydown', (event) => {
  // alert('ты кликнул')
// console.log(event.key);
let key = event.key
if (key == 'r'){
  body.classList.add('red')
  body.classList.remove('blue')
}
else if (key == 'b'){
  body.classList.add('blue')
  body.classList.remove('red')
}else if (key == 'j'){
  
  body.classList.remove('blue')
  body.classList.add('green')
  body.classList.remove('red')
}


  // body.classList.toggle('red')
  // console.log('я заработал');
})