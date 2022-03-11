console.log("forms.js loaded...");
//////////// https://reactjs.org/docs/forms.html
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////// **************** Forms  ******************  /////////////
////////////// **************** Forms  ******************  /////////////
////////////// **************** Forms  ******************  /////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

import { Component } from "react"
import { render } from "react-dom"
import h from "react/htm_create_element"

// HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

// <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>

// This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works.
//
//  But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form.
//
//  The standard way to achieve this is with a technique called “controlled components”.

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Controlled Components         ////////////////////////
//////////////   Controlled Components         ////////////////////////
//////////////   Controlled Components         ////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//
// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
//
// We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
//
// For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:

////////////////////////// Before HTM Conversion (JSX)
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
//
// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('formsRoot')
// );

////////////////////////// After HTM Conversion
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (h `
      <form onSubmit=${this.handleSubmit}>
        <label>
          Enter Name to pop in as an alert()
          <br/>
          <input type="text" value=${this.state.value} onChange=${this.handleChange} />
        </label>
        <br/>
        <br/>
        <input class="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium" type="submit" value="Submit" />
      </form>
    `);
  }
}

render(
  h`<${NameForm} />`,
  document.getElementById('formsRoot')
);





////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Function  ////////////////////////
//////////////   Function  ////////////////////////
//////////////   Function  ////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


//////////////////////////
//////////////////////////
//////////////////////////



//////////////////////////
//////////////////////////
//////////////////////////



////////////////////////// Before HTM Conversion (JSX)

////////////////////////// After HTM Conversion

// ////////////////////////// JSX Example




// // // ************** //  // SECTION DOES NOT WORK ALONE (Multi step example)
// ////////////////////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////////////////////
// // // ************** //  // SECTION END
