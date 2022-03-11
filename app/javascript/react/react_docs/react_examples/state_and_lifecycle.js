//////////// https://reactjs.org/docs/state-and-lifecycle.html

console.log("state_and_lifecycle.js loaded...");

import { Component } from "react"
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
// function Clock(props) {
//   return  h`
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is ${props.date.toLocaleTimeString()}.</h2>
//     </div>
//   `
// }
//
// function tick() {
//   render(
//     h`<${Clock} date=${new Date()} />`,
//     document.getElementById('stateAndLifeCycleRoot')
//   );
// }
//
// setInterval(tick, 1000);
//////////////////////////
//////////////////////////
//////////////////////////

// // However, it misses a crucial requirement:
// // the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.

// // Ideally we want to write this once and have the Clock update itself like this:

// // ReactDOM.render(
// //   <Clock />,
// //   document.getElementById('stateAndLifeCycleRoot')
// // );


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Converting a Function to a Class  ///////////////////////////
//////////////   Converting a Function to a Class  ///////////////////////////
//////////////   Converting a Function to a Class  ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // You can convert a function component like Clock to a class in five steps:
// //
// // Create an ES6 class, with the same name, that extends React.Component.
// //
// // Add a single empty method to it called render().
// //
// // Move the body of the function into the render() method.
// //
// // Replace props with this.props in the render() body.
// //
// // Delete the remaining empty function declaration.

////////////////////////// Before HTM Conversion (JSX)
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

////////////////////////// After HTM Conversion (JSX)
// class Clock extends Component {
//   render() {
//     return h`
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is ${this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     `
//   }
// }
//
// render(
//   h`<${Clock} date=${new Date()} />`,
//   document.getElementById('stateAndLifeCycleRoot')
// );
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Adding Local State to a Class  ///////////////////////////
//////////////   Adding Local State to a Class  ///////////////////////////
//////////////   Adding Local State to a Class  ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// We will move the date from props to state in three steps:

// Replace this.props.date with this.state.date in the render() method:

////////////////////////// Before HTM Conversion (JSX)
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

////////////////////////// After HTM Conversion (JSX)
// class Clock extends Component {
//   render() {
//     return h`
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     `
//   }
// }

// Add a class constructor that assigns the initial this.state:

//  // SECTION DOES NOT WORK ALONE (Multi step example)
//  // SECTION DOES NOT WORK ALONE (Multi step example)
//  // SECTION DOES NOT WORK ALONE (Multi step example)
//  // SECTION DOES NOT WORK ALONE (Multi step example)
                // ////////////////////////// Before HTM Conversion (JSX)
                // class Clock extends React.Component {
                //   constructor(props) {
                //     super(props);
                //     this.state = {date: new Date()};
                //   }
                //
                //   render() {
                //     return (
                //       <div>
                //         <h1>Hello, world!</h1>
                //         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                //       </div>
                //     );
                //   }
                // }
                //
                // ////////////////////////// After HTM Conversion (JSX)
                // class Clock extends Component {
                //   constructor(props) {
                //     super(props);
                //     this.state = {date: new Date()};
                //   }
                //
                //   render() {
                //     return h`
                //       <div>
                //         <h1>Hello, world!</h1>
                //         <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
                //       </div>
                //     `
                //   }
                // }
                //
                // // Note how we pass props to the base constructor:
                // constructor(props) {
                //   super(props);
                //   this.state = {date: new Date()};
                // }
                //
                // // Class components should always call the base constructor with props.
                //
                // // Remove the date prop from the <Clock /> element:
                //
                // ReactDOM.render(
                //   <Clock />,
                //   document.getElementById('stateAndLifeCycleRoot')
                // );

//  // COMPLETED SECTION EXAMPLE ABOVE
//  // COMPLETED SECTION EXAMPLE ABOVE
//  // COMPLETED SECTION EXAMPLE ABOVE
//
// ////////////////////////// Before HTM Conversion (JSX)
// // class Clock extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {date: new Date()};
// //   }
// //
// //   render() {
// //     return (
// //       <div>
// //         <h1>Hello, world!</h1>
// //         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// //       </div>
// //     );
// //   }
// // }
// //
// // ReactDOM.render(
// //   <Clock />,
// //   document.getElementById('stateAndLifeCycleRoot')
// // );
//
// ////////////////////////// After HTM Conversion (JSX)
// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   render() {
//     return h`
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     `
//   }
// }
//
// render(
//   h`<${Clock} />`,
//   document.getElementById('stateAndLifeCycleRoot')
// );

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Adding Lifecycle Methods to a Class  //////////////////
//////////////   Adding Lifecycle Methods to a Class  //////////////////
//////////////   Adding Lifecycle Methods to a Class  //////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


//// In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

//// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

//// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

//// We can declare special methods on the component class to run some code when a component mounts and unmounts:

// ////////////////////////// Before HTM Conversion (JSX)
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//    // NEWLY ADDED FUNCTIONS ****
//   componentDidMount() {
//   }
//
//   componentWillUnmount() {
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// // ////////////////////////// After HTM Conversion (JSX)
// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//    // NEWLY ADDED FUNCTIONS ****
//   componentDidMount() {
//   }
//
//   componentWillUnmount() {
//   }
//
//   render() {
//     return h`
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     `
//   }
// }
//
// // These methods are called “lifecycle methods”.
//
// // The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

// componentDidMount() {
//   this.timerID = setInterval(
//     () => this.tick(),
//     1000
//   );
// }

// Note how we save the timer ID right on this (this.timerID).

// While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).

// We will tear down the timer in the componentWillUnmount() lifecycle method:

// componentWillUnmount() {
//   clearInterval(this.timerID);
// }


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////  ******  FINAL STEP ****** //////////////////////////////
//////////////  ******  FINAL STEP ****** //////////////////////////////
//////////////  ******  FINAL STEP ****** //////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Finally, we will implement a method called tick() that the Clock component will run every second.
//
// It will use this.setState() to schedule updates to the component local state:

// ////////////////////////// Before HTM Conversion (JSX)

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('stateAndLifeCycleRoot')
// );


// ////////////////////////// After HTM Conversion (JSX)
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return h`
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
      </div>
    `
  }
}

render(
  h`<${Clock} />`,
  document.getElementById('stateAndLifeCycleRoot')
);
