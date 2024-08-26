const body = document.querySelector('body')
const box1 = document.getElementById('box1')
box1.addEventListener('mouseenter',function(e){
    const number = Math.floor(Math.random()*100)+1;
    e.target.innerHTML = `<h1>${number}</h1>`
},false)
box1.addEventListener('mouseleave',function(e){
    e.target.innerHTML = `<h1>1</h1>`
},false)

const box2 = document.querySelector('#box2')
box2.addEventListener('mouseenter',function(e){
    const num1 = Math.floor(Math.random()*256);
    const num2 = Math.floor(Math.random()*256);
    const num3 = Math.floor(Math.random()*256);
    e.target.style.backgroundColor= `rgb(${num1}, ${num2}, ${num3})`
},false)

const box3 = document.querySelector('#box3')
box3.addEventListener('click',function(e){
    const num1 = Math.floor(Math.random()*256);
    const num2 = Math.floor(Math.random()*256);
    const num3 = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
    body.style.backgroundColor =  `rgb(${num1}, ${num2}, ${num3})`
},false)
const box4 = document.querySelector('#box4')
box4.addEventListener('click',function(e){
    const num1 = Math.floor(Math.random()*256);
    const num2 = Math.floor(Math.random()*256);
    const num3 = Math.floor(Math.random()*256);
    `rgb(${num1}, ${num2}, ${num3})`
    box1.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
    box2.style.backgroundColor = `rgb(${num3}, ${num2}, ${num1})`
    box3.style.backgroundColor = `rgb(${num1}, ${num3}, ${num2})`
    e.target.style.backgroundColor = `rgb(${num2}, ${num3}, ${num1})`
},false)