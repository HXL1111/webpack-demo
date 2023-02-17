import './style.css'
import x from './images/1.png'
const img = document.getElementById('x')
img.src = x

const button = document.getElementById('button')
button.addEventListener('click', () => {
  import('./a.js').then((module) => console.log(module.a))
})
