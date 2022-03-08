//////////// https://reactjs.org/docs/state-and-lifecycle.html
//////////// https://reactjs.org/docs/state-and-lifecycle.html
//////////// https://reactjs.org/docs/state-and-lifecycle.html

console.log("state_and_lifecycle.js loaded...");

import { render } from "react-dom"
import h from "react_components/htm_create_element"

// Consider the ticking clock example from one of the previous sections.

// In Rendering Elements, we have only learned one way to update the UI.

// We call ReactDOM.render() to change the rendered output:

////////////////////////// Before HTM Conversion (JSX)
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('stateAndLifeCycleRoot')
//   );
// }
//
// setInterval(tick, 1000);

////////////////////////// After HTM Conversion
// function tick() {
//   const element = h`
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is ${new Date().toLocaleTimeString()}.</h2>
//     </div>
//   `
//   render(
//     element,
//     document.getElementById('stateAndLifeCycleRoot')
//   );
// }
//
// setInterval(tick, 1000);


//////////////////////////
//////////////////////////
//////////////////////////

// // In this section, we will learn how to make the Clock component truly reusable and encapsulated.

// // It will set up its own timer and update itself every second.

// // We can start by encapsulating how the clock looks:

////////////////////////// Before HTM Conversion (JSX)
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
//
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('stateAndLifeCycleRoot')
//   );
// }
//
// setInterval(tick, 1000);

////////////////////////// After HTM Conversion
function Clock(props) {
  return  h`
    <div>
      <h1>Hello, world!</h1>
      <h2>It is ${props.date.toLocaleTimeString()}.</h2>
    </div>
  `
}

function tick() {
  render(
    h`<${Clock} date=${new Date()} />`,
    document.getElementById('stateAndLifeCycleRoot')
  );
}

setInterval(tick, 1000);
//////////////////////////
//////////////////////////
//////////////////////////

// // However, it misses a crucial requirement:
// // the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.

// // Ideally we want to write this once and have the Clock update itself like this:

// // ReactDOM.render(
// //   <Clock />,
// //   document.getElementById('root')
// // );


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Converting a Function to a Class  ///////////////////////////
//////////////   Converting a Function to a Class  ///////////////////////////
//////////////   Converting a Function to a Class  ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
