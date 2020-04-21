import * as R from 'ramda'
import './style.css'

function component() {
  const ele = document.createElement('div')

  ele.innerText = R.join(',', ['Hello', 'Webpack!'])
  ele.classList.add('hello')

  return ele
}

document.body.appendChild(component())