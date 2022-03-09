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
function Welcome(props) {
  return h`
    <h1>Hello, ${props.name}</h1>
    `
}

const element = h`<${Welcome} name="Sara" />`

render(
  element,
  document.getElementById('propsRoot')
);


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
//   document.getElementById('propsRoot2')
// );

////////////////////////// After HTM Conversion
function WelcomePart(props) {
  return h`<h1>Hello, ${props.name}</h1>`;
}

function App() {
  return h`
    <div>
      <${WelcomePart} name="Sara" />
      <${WelcomePart} name="Cahal" />
      <${WelcomePart} name="Edite" />
    </div>
  `
}

render(
  h`<${App} />`,
  document.getElementById('propsRoot2')
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

          // //                   //  // SECTION DOES NOT WORK ALONE (Multi step example)
          // //                   //  // SECTION DOES NOT WORK ALONE (Multi step example)
          // //                   //  // SECTION DOES NOT WORK ALONE (Multi step example)
          // //                   //  // SECTION DOES NOT WORK ALONE (Multi step example)
          //  /////////////// ********************* Large section, ends on line 233
// function formatDate(date) {
//   return date.toLocaleDateString();
// }
//
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//              src={props.author.avatarUrl}
//              alt={props.author.name} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
//
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('propsRoot3')
// );


// // It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

// // This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it.

// // First, we will extract Avatar:

// // function Avatar(props) {
// //   return (
// //     <img className="Avatar"
// //       src={props.user.avatarUrl}
// //       alt={props.user.name}
// //     />
// //   );
// // }
// //
//
// // The Avatar doesn’t need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.
// //
// // We recommend naming props from the component’s own point of view rather than the context in which it is being used.
// //
// // We can now simplify Comment a tiny bit:
// //
// // function Comment(props) {
// //   return (
// //     <div className="Comment">
// //       <div className="UserInfo">
// //         <Avatar user={props.author} />
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
// // Next, we will extract a UserInfo component that renders an Avatar next to the user’s name:
// //
// // function UserInfo(props) {
// //   return (
// //     <div className="UserInfo">
// //       <Avatar user={props.user} />
// //       <div className="UserInfo-name">
// //         {props.user.name}
// //       </div>
// //     </div>
// //   );
// // }
// // This lets us simplify Comment even further:
// //
// // function Comment(props) {
// //   return (
// //     <div className="Comment">
// //       <UserInfo user={props.author} />
// //       <div className="Comment-text">
// //         {props.text}
// //       </div>
// //       <div className="Comment-date">
// //         {formatDate(props.date)}
// //       </div>
// //     </div>
// //   );
// // }
// //                   //  // END - OF SECTION DOES NOT WORK ALONE (Multi step example)
// //                   //  // END - OF SECTION DOES NOT WORK ALONE (Multi step example)
// //                   //  // END - OF SECTION DOES NOT WORK ALONE (Multi step example)
// //                   //  // END - OF SECTION DOES NOT WORK ALONE (Multi step example)

// ////////////////////////// Before HTM Conversion (JSX)

// function formatDate(date) {
//   return date.toLocaleDateString();
// }
//
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//          src={props.user.avatarUrl}
//          alt={props.user.name} />
//   );
// }
//
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }
//
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
//
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('propsRoot3')
// );

// ////////////////////////// After HTM Conversion (JSX)
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return h `
    <img className="${Avatar}"
         src=${props.user.avatarUrl}
         alt=${props.user.name} />
  `
}

function UserInfo(props) {
  return h`
    <div className="${UserInfo}">
      <Avatar user=${props.user} />
      <div className="${UserInfo-name}">
        ${props.user.name}
      </div>
    </div>
  `
}

function Comment(props) {
  return h`
    <div className="${Comment}">
      <UserInfo user=${props.author} />
      <div className="Comment-text">
        ${props.text}
      </div>
      <div className="Comment-date">
        ${formatDate(props.date)}
      </div>
    </div>
  `
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
render(

  h `
  <${Comment}
    date=${comment.date}
    text=${comment.text}
    author=${comment.author} />
    `,
  document.getElementById('propsRoot3')
);
