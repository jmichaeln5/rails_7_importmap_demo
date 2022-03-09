//////////// https://reactjs.org/docs/components-and-props.html
//////////// https://reactjs.org/docs/components-and-props.html
//////////// https://reactjs.org/docs/components-and-props.html

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Function and Class Components  ////////////////////////
//////////////   Function and Class Components  ////////////////////////
//////////////   Function and Class Components  ////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

import { render } from "react-dom"
import h from "react_components/htm_create_element"

// // When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

// // For example, this code renders “Hello, Sara” on the page:

////////////////////////// Before HTM Conversion (JSX)

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
//
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


////////////////////////// After HTM Conversion
//
// function Welcome(props) {
//   return h`
//     <h1>Hello, ${props.name}</h1>
//     `
// }
//
// const element = h`<${Welcome} name="Sara" />`
//
// render(
//   element,
//   document.getElementById('propsRoot')
// );


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Composing Components         ///////////////////////////
//////////////   Composing Components         ///////////////////////////
//////////////   Composing Components         ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


// // Components can refer to other components in their output.

// // This lets us use the same component abstraction for any level of detail.

// // A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

// // For example, we can create an App component that renders Welcome many times:

////////////////////////// Before HTM Conversion (JSX)
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('propsRoot')
// );

////////////////////////// After HTM Conversion
function Welcome(props) {
  return h`<h1>Hello, ${props.name}</h1>`;
}

function App() {
  return h`
    <div>
      <${Welcome} name="Sara" />
      <${Welcome} name="Cahal" />
      <${Welcome} name="Edite" />
    </div>
  `
}

render(
  h`<${App} />`,
  document.getElementById('propsRoot')
);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Extracting Components       ///////////////////////////
//////////////   Extracting Components       ///////////////////////////
//////////////   Extracting Components       ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // Don’t be afraid to split components into smaller components.

// // For example, consider this Comment component:

////////////////////////// Before HTM Conversion (JSX)

// // function Comment(props) {
// //   return (
// //     <div className="Comment">
// //       <div className="UserInfo">
// //         <img className="Avatar"
// //           src={props.author.avatarUrl}
// //           alt={props.author.name}
// //         />
// //         <div className="UserInfo-name">
// //           {props.author.name}
// //         </div>
// //       </div>
// //       <div className="Comment-text">
// //         {props.text}
// //       </div>
// //       <div className="Comment-date">
// //         {formatDate(props.date)}
// //       </div>
// //     </div>
// //   );
// // }

// // ReactDOM.render(
// //   <Comment />,
// //   document.getElementById('propsRoot')
// // );

////////////////////////// After HTM Conversion

// function Comment(props) {
//   return h`
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src=${props.author.avatarUrl}
//           alt=${props.author.name}
//         />
//         <div className="UserInfo-name">
//           ${props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         ${props.text}
//       </div>
//       <div className="Comment-date">
//         ${props.date}
//       </div>
//     </div>
//   `
// }
//
// render(
//   h`<${Comment} />`,
//   document.getElementById('propsRoot')
// );

// // It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

// // This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it.

// // First, we will extract Avatar:

////////////////////////// Before HTM Conversion (JSX)
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
//
// ////////////////////////// After HTM Conversion
// function Avatar(props) {
//   return h`
//     <img className="Avatar"
//       src=${props.user.avatarUrl}
//       alt=${props.user.name}
//     />
//   `
// }
