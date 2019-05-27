import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
function component() 
{
    let ele = document.createElement('div')

    ele.innerHTML = _.join(['Hello', 'webpack'], ' ')

    ele.classList.add('hello')

    // Add the image to our existing div
    let icon = new Image()
    icon.src = Icon
    ele.appendChild(icon)

    console.log(Data)
    return ele
}

document.body.appendChild(component())