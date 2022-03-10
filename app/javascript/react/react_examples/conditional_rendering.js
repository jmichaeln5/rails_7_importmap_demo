//////////// https://reactjs.org/docs/conditional-rendering.html
console.log("conditional_rendering.js loaded...");

import { Component } from "react"
import { render } from "react-dom"
import h from "react_components/htm_create_element"

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////// ********** Conditional Rendering **********  ////////////
////////////// ********** Conditional Rendering **********  ////////////
////////////// ********** Conditional Rendering **********  ////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// //
// // In React, you can create distinct components that encapsulate behavior you need.
// //
// // Then, you can render only some of them, depending on the state of your application.
// //
// //
// // Conditional rendering in React works the same way conditions work in JavaScript.
// //
// // Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
// //
// // Consider these two components:
// //
// //                   //  // SECTION DOES NOT WORK ALONE (Multi step example)
// // function UserGreeting(props) {
// //   return <h1>Welcome back!</h1>;
// // }
// //
// // function GuestGreeting(props) {
// //   return <h1>Please sign up.</h1>;
// // }
// //                   //  // SECTION END

// // We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:

// ////////////////////////// Before HTM Conversion (JSX)
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
//
// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('conditionalRenderingRoot')
// );

// ////////////////////////// After HTM Conversion (JSX)
// function UserGreeting(props) {
//   return h`<h1>Welcome back! (isLoggedIn is set to true)</h1>`;
// }
//
// function GuestGreeting(props) {
//   return h`<h1>Please sign up. (isLoggedIn is not set, is not true)</h1>`;
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return h`<${UserGreeting} />`;
//   }
//   return h`<${GuestGreeting} />`;
// }
//
// render(
// // // Switch between to test
//   // h`<${Greeting} isLoggedIn={true} />`,
//   h`<${Greeting}/>`,
//   document.getElementById('conditionalRenderingRoot')
// );
//
//
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// //////////////      Element Variables       ////////////////////////////
// //////////////      Element Variables       ////////////////////////////
// //////////////      Element Variables       ////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
//
// You can use variables to store elements.
// This can help you conditionally render a part of the component while the rest of the output doesn’t change.
//
// Consider these two new components representing Logout and Login buttons:

// //                   //  // SECTION DOES NOT WORK ALONE (Multi step example)
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
// //                   //  // SECTION END

// In the example below, we will create a stateful component called LoginControl.
//
// It will render either <LoginButton /> or <LogoutButton /> depending on its current state. It will also render a <Greeting /> from the previous example:

// ////////////////////////// Before HTM Conversion (JSX)
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
//
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
//
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('conditionalRenderingRoot')
// );
// ////////////////////////// After HTM Conversion (JSX)
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = h `<${LogoutButton} onClick=${this.handleLogoutClick} />`
    } else {
      button = h `<${LoginButton} onClick=${this.handleLoginClick} />`
    }

    return h`
      <div>
        <${Greeting} isLoggedIn=${isLoggedIn} />
        ${button}
      </div>
    `
  }
}

function UserGreeting(props) {
  return h`<h1>Welcome back!</h1>`
}

function GuestGreeting(props) {
  return h`<h1>Please sign up.</h1>`
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return h `<${UserGreeting} />`
  }
  return h `<${GuestGreeting} />`
}

function LoginButton(props) {
  return h`
    <button onClick=${props.onClick}>
      Login
    </button>
  `
}

function LogoutButton(props) {
  return h`
    <button onClick=${props.onClick}>
      Logout
    </button>
  `
}

render(
  h `<${LoginControl} />`,
  document.getElementById('conditionalRenderingRoot')
);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Inline If with Logical && Operator   /////////////////
//////////////   Inline If with Logical && Operator   /////////////////
//////////////   Inline If with Logical && Operator   /////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// You may embed expressions in JSX by wrapping them in curly braces.
// This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

// ////////////////////////// Before HTM Conversion (JSX)
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
//
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('conditionalRenderingRoot2')
// );

// ////////////////////////// After HTM Conversion (JSX)
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  const unreadMessagesLength = h`<h1>You have ${props.unreadMessages.length} unread messages.</h1>`;

  return h`
    <div>
      <h1>Hello!</h1>
      ${unreadMessages.length > 0 && unreadMessagesLength}
    </div>
  `
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

render(
  h`<${Mailbox} unreadMessages=${messages} />`,
  document.getElementById('conditionalRenderingRoot2')
)

//// It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
////
//// Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
////
//// Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression.

////   <div>0</div>


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Inline If-Else with Conditional Operator   ////////////
//////////////   Inline If-Else with Conditional Operator   ////////////
//////////////   Inline If-Else with Conditional Operator   ////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

//// Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.
////
//// In the example below, we use it to conditionally render a small block of text.

// //                   //  // SECTION DOES NOT WORK ALONE (Multi step example)
// // render() {
// //   const isLoggedIn = this.state.isLoggedIn;
// //   return (
// //     <div>
// //       The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
// //     </div>
// //   );
// // }
// //
// // It can also be used for larger expressions although it is less obvious what’s going on:
// //
// // render() {
// //   const isLoggedIn = this.state.isLoggedIn;
// //   return (
// //     <div>
// //       {isLoggedIn
// //         ? <LogoutButton onClick={this.handleLogoutClick} />
// //         : <LoginButton onClick={this.handleLoginClick} />
// //       }
// //     </div>
// //   );
// // }
// //                   //  // SECTION END

// // Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable.
// //
// // Also remember that whenever conditions become too complex, it might be a good time to extract a component.
// //

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Preventing Component from Rendering  //////////////////
//////////////   Preventing Component from Rendering  //////////////////
//////////////   Preventing Component from Rendering  //////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.
// //
// // In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render:
// //
// // // ////////////////////////// Before HTM Conversion (JSX)
// // function WarningBanner(props) {
// //   if (!props.warn) {
// //     return null;
// //   }
// //
// //   return (
// //     <div className="warning">
// //       Warning!
// //     </div>
// //   );
// // }
// //
// // class Page extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {showWarning: true}
// //     this.handleToggleClick = this.handleToggleClick.bind(this);
// //   }
// //
// //   handleToggleClick() {
// //     this.setState(prevState => ({
// //       showWarning: !prevState.showWarning
// //     }));
// //   }
// //
// //   render() {
// //     return (
// //       <div>
// //         <WarningBanner warn={this.state.showWarning} />
// //         <button onClick={this.handleToggleClick}>
// //           {this.state.showWarning ? 'Hide' : 'Show'}
// //         </button>
// //       </div>
// //     );
// //   }
// // }
// //
// // ReactDOM.render(
// //   <Page />,
// //   document.getElementById('conditionalRenderingRoot3')
// // );

// ////////////////////////// After HTM Conversion (JSX)
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    h`
    <div className="warning">
      Warning!
    </div>
    `
  );
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return h `
      <div>
        <${WarningBanner} warn=${this.state.showWarning} />
        <button onClick=${this.handleToggleClick}>
          ${this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    `
  }
}

render(
  h `<${Page} />`,
  document.getElementById('conditionalRenderingRoot3')
)

//// Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.
