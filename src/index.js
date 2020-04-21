import * as R from 'ramda'
import './style.css'
import './style.scss'

function component() {
  const ele = document.createElement('div')

  ele.innerText = R.join(',', ['Hello', 'Webpack!'])
  ele.classList.add('hello')

  return ele
}

document.body.appendChild(component())