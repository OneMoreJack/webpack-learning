import * as R from 'ramda'
import './style.css'
import './style.scss'
import img from "./logo.png";

function component() {
  const ele = document.createElement('div')

  ele.innerText = R.join(',', ['Hello', 'Webpack!'])
  ele.classList.add('hello')

  // add image to  div
  const myImg = new Image()
  myImg.src = img
  ele.appendChild(myImg)

  return ele
}

document.body.appendChild(component())