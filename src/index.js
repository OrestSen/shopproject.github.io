import React from 'react'
import ReactDom from 'react-dom'

// React Component

function List() {
  return (
    <ul>
      <li>List item 1</li>
      <li>List item 1</li>
    </ul>
  )
}

// React Element
const el =
  <div>
    <h1>Hello world!!!</h1>
    <p>Lorem ipsum bla bla</p>
    <List/>
  </div>

ReactDom.render(el, document.getElementById("root"))