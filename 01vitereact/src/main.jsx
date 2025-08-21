import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const username = "Anshu daksh"
function MyApp() {
  return (
    <div>
      <h1>Custom App ! {username}</h1>
    </div>
  )
}

 //function customRender(reactElement, container){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)

    container.appendChild(domElement) */

    //---------------------------
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     for (const prop in reactElement.props) {
       
//         if (prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//     }
//     container.appendChild(domElement)
// } 


const anotherElement = (
  <a href="https://google.com" target='_blank'> vusut google</a>
)

const anotheruser = "Anshu prajapati"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'}, 'click me to visit google', anotheruser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  //<MyApp />   
  reactElement
 
)
