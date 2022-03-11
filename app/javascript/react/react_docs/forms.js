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

// // HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
//
// // <form>
// //   <label>
// //     Name:
// //     <input type="text" name="name" />
// //   </label>
// //   <input type="submit" value="Submit" />
// // </form>
//
// // This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works.
// //
// //  But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form.
// //
// //  The standard way to achieve this is with a technique called “controlled components”.
//
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// //////////////   Controlled Components         ////////////////////////
// //////////////   Controlled Components         ////////////////////////
// //////////////   Controlled Components         ////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// //
// // In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
// //
// // We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
// //
// // For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
//
// ////////////////////////// Before HTM Conversion (JSX)
// // class NameForm extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {value: ''};
// //
// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //
// //   handleChange(event) {
// //     this.setState({value: event.target.value});
// //   }
// //
// //   handleSubmit(event) {
// //     alert('A name was submitted: ' + this.state.value);
// //     event.preventDefault();
// //   }
// //
// //   render() {
// //     return (
// //       <form onSubmit={this.handleSubmit}>
// //         <label>
// //           Name:
// //           <input type="text" value={this.state.value} onChange={this.handleChange} />
// //         </label>
// //         <input type="submit" value="Submit" />
// //       </form>
// //     );
// //   }
// // }
// //
// // ReactDOM.render(
// //   <NameForm />,
// //   document.getElementById('formsRoot')
// // );
// sf
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
          Enter Name and click submit to trigger content an alert()
          <br/>
          <input type="text" value=${this.state.value} onChange=${this.handleChange} class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full"/>
        </label>
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

// // Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth.
// //
// // Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.
// //
// // With a controlled component, the input’s value is always driven by the React state.
// //
// // While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////         The textarea Tag          ///////////////////////
//////////////         The textarea Tag          ///////////////////////
//////////////         The textarea Tag          ///////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // In HTML, a <textarea> element defines its text by its children:
// //
// // <textarea>
// //   Hello there, this is some text in a text area
// // </textarea>
// //
// // In React, a <textarea> uses a value attribute instead. This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input:
// //
////////////////////////// Before HTM Conversion (JSX)
// // class EssayForm extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       value: 'Please write an essay about your favorite DOM element.'
// //     };
// //
// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //
// //   handleChange(event) {
// //     this.setState({value: event.target.value});
// //   }
// //
// //   handleSubmit(event) {
// //     alert('An essay was submitted: ' + this.state.value);
// //     event.preventDefault();
// //   }
// //
// //   render() {
// //     return (
// //       <form onSubmit={this.handleSubmit}>
// //         <label>
// //           Essay:
// //           <textarea value={this.state.value} onChange={this.handleChange} />
// //         </label>
// //         <input type="submit" value="Submit" />
// //       </form>
// //     );
// //   }
// // }
////////////////////////// After HTM Conversion
class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (h`
      <form onSubmit=${this.handleSubmit}>
        <label>
          Enter text and click submit to trigger content as an alert()
          <br/>
          Essay:
          <br/>
          <textarea value=${this.state.value} onChange=${this.handleChange} class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" rows="4"/>
        </label>
        <br/>
        <input class="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium" type="submit" value="Submit" />
      </form>
    `);
  }
}

render(
  h`<${EssayForm} />`,
  document.getElementById('formsRoot2')
);

// // Notice that this.state.value is initialized in the constructor, so that the text area starts off with some text in it.

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////         The select Tag           ////////////////////////
//////////////         The select Tag           ////////////////////////
//////////////         The select Tag           ////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//
// // In HTML, <select> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:
// //
// // <select>
// //   <option value="grapefruit">Grapefruit</option>
// //   <option value="lime">Lime</option>
// //   <option selected value="coconut">Coconut</option>
// //   <option value="mango">Mango</option>
// // </select>
// //
// //
// // Note that the Coconut option is initially selected, because of the selected attribute.
//
// // React, instead of using this selected attribute, uses a value attribute on the root select tag.

// Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component.

// // This is more convenient in a controlled component because you only need to update it in one place. For example:

////////////////////////// Before HTM Conversion (JSX)
// // class FlavorForm extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {value: 'coconut'};
// //
// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //
// //   handleChange(event) {
// //     this.setState({value: event.target.value});
// //   }
// //
// //   handleSubmit(event) {
// //     alert('Your favorite flavor is: ' + this.state.value);
// //     event.preventDefault();
// //   }
// //
// //   render() {
// //     return (
// //       <form onSubmit={this.handleSubmit}>
// //         <label>
// //           Pick your favorite flavor:
// //           <select value={this.state.value} onChange={this.handleChange}>
// //             <option value="grapefruit">Grapefruit</option>
// //             <option value="lime">Lime</option>
// //             <option value="coconut">Coconut</option>
// //             <option value="mango">Mango</option>
// //           </select>
// //         </label>
// //         <input type="submit" value="Submit" />
// //       </form>
// //     );
// //   }
// // }
// //
// // ReactDOM.render(
// //   <FlavorForm />,
// //   document.getElementById('formsRoot3')
// // );

////////////////////////// After HTM Conversion
class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (h`
      <form onSubmit=${this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <br/>
           Click submit to trigger content as an alert()
          <select class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 w-full" value=${this.state.value} onChange=${this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/>
        <input class="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium" type="submit" value="Submit" />
      </form>
    `);
  }
}

render(
  h`<${FlavorForm} />`,
  document.getElementById('formsRoot3')
);

// // You can pass an array into the value attribute, allowing you to select multiple options in a select tag:
// // <select multiple={true} value={['B', 'C']}>
//
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// //////////////         The file input Tag       ////////////////////////
// //////////////         The file input Tag       ////////////////////////
// //////////////         The file input Tag       ////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
//
// // In HTML, an <input type="file"> lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API (https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications).
// //
// // <input type="file" />
// //
// // Because its value is read-only, it is an uncontrolled component in React. It is discussed together with other uncontrolled components later in the documentation (https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag).

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Handling Multiple Inputs      /////////////////////////
//////////////   Handling Multiple Inputs      /////////////////////////
//////////////   Handling Multiple Inputs      /////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.
// //
// // For example:
// ////////////////////////// Before HTM Conversion (JSX)
// // class Reservation extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       isGoing: true,
// //       numberOfGuests: 2
// //     };
// //
// //     this.handleInputChange = this.handleInputChange.bind(this);
// //   }
// //
// //   handleInputChange(event) {
// //     const target = event.target;
// //     const value = target.type === 'checkbox' ? target.checked : target.value;
// //     const name = target.name;
// //
// //     this.setState({
// //       [name]: value
// //     });
// //   }
// //
// //   render() {
// //     return (
// //       <form>
// //         <label>
// //           Is going:
// //           <input
// //             name="isGoing"
// //             type="checkbox"
// //             checked={this.state.isGoing}
// //             onChange={this.handleInputChange} />
// //         </label>
// //         <br />
// //         <label>
// //           Number of guests:
// //           <input
// //             name="numberOfGuests"
// //             type="number"
// //             value={this.state.numberOfGuests}
// //             onChange={this.handleInputChange} />
// //         </label>
// //       </form>
// //     );
// //   }
// // }
// //
// // ReactDOM.render(
// //   <Reservation />,
// //   document.getElementById('formsRoot5')
// // );

////////////////////////// After HTM Conversion
class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (h`
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked=${this.state.isGoing}
            onChange=${this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value=${this.state.numberOfGuests}
            onChange=${this.handleInputChange} />
        </label>
      </form>
    `);
  }
}

render(
  h`<${Reservation} />`,
  document.getElementById('formsRoot5')
);

// // Note how we used the ES6 computed property name syntax to update the state key corresponding to the given input name:
// //
// // this.setState({
// //   [name]: value
// // });
// // It is equivalent to this ES5 code:
// //
// // var partialState = {};
// // partialState[name] = value;
// // this.setState(partialState);

// // Also, since setState() automatically merges a partial state into the current state, we only needed to call it with the changed parts.
//

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Controlled Input Null Value    ////////////////////////
//////////////   Controlled Input Null Value    ////////////////////////
//////////////   Controlled Input Null Value    ////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.
// //
// // The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

////////////////////////// Before HTM Conversion (JSX)
// // ReactDOM.render(<input value="hi" />, mountNode);
// //
// // setTimeout(function() {
// //   ReactDOM.render(<input value={null} />, mountNode);
// // }, 1000);

////////////////////////// After HTM Conversion
render(
  h`<input value="hi" />`,
  document.getElementById('formsRoot6')
);

setTimeout(function() {
  render(
    h`<input value={null} />`,
    document.getElementById('formsRoot6')
  );
}, 5000);
