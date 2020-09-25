import React from 'react'
import ReactDom from 'react-dom'
import App from './App'



// React Component


// const Header = () => {
//   return <h1>Hello world!!!React!!!</h1>

// }

// const List = () => {
//   return (
//     <ul>
//       <li>List item 1</li>
//       <li>List item 2</li>
//       <li>List item 3</li>
//       <li>List item 4</li>
//     </ul>
//   )
// }

// // React Element
// const el =
//   <div>
//     <Header/>
//     <p>Lorem ipsum bla bla</p>
//     <List />
//   </div>

ReactDom.render(
  <App />, document.getElementById("root")
)