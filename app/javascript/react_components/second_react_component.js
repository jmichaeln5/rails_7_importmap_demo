// Before HTM Conversion
// Before HTM Conversion
// Before HTM Conversion

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
//   document.getElementById('secondReactComponent')
// );


// After HTM Conversion
// After HTM Conversion
// After HTM Conversion

import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js';


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
    return html`
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
      </div>
    `
  }
}

render(
  html`<${Clock} />`,
  document.getElementById('secondReactComponent')
);
