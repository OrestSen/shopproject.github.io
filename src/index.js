import React from 'react'
import ReactDom from 'react-dom'

// React Component

const List = () => {
  return (
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
    </ul>
  )
}

// React Element
const el =
  <div>
    <h1>Hello world!!!</h1>
    <p>Lorem ipsum bla bla</p>
    <List />
  </div>

ReactDom.render(el, document.getElementById("root"))