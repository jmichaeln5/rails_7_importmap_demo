// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
//
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
//
// // Previously, we only encountered React elements that represent DOM tags:
// const element = <div />;
//
// // Now elements can also represent user-defined components:
// const element = <Welcome name="Sara" />;
//

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Rendering a Component      ///////////////////////////
//////////////   Rendering a Component      ///////////////////////////
//////////////   Rendering a Component      ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


// When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

// For example, this code renders “Hello, Sara” on the page:
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
//
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Composing Components       ///////////////////////////
//////////////   Composing Components       ///////////////////////////
//////////////   Composing Components       ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


// Components can refer to other components in their output.

// This lets us use the same component abstraction for any level of detail.

// A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Extracting Components       ///////////////////////////
//////////////   Extracting Components       ///////////////////////////
//////////////   Extracting Components       ///////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

// This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it.

// First, we will extract Avatar:

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

// The Avatar doesn’t need to know that it is being rendered inside a Comment.

// This is why we have given its prop a more generic name: user rather than author.

// We recommend naming props from the component’s own point of view rather than the context in which it is being used.

// We can now simplify Comment a tiny bit:

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// Next, we will extract a UserInfo component that renders an Avatar next to the user’s name:

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// This lets us simplify Comment even further:

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////
