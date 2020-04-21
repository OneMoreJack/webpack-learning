import * as R from 'ramda'
function component() {
  const ele = document.createElement('div')
  
  ele.innerText = R.join(',', ['Hello', 'Webpack!'])

  return ele
}

document.body.appendChild(component())