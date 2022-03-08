//////////// https://reactjs.org/docs/components-and-props.html
//////////// https://reactjs.org/docs/components-and-props.html
//////////// https://reactjs.org/docs/components-and-props.html


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

import { render } from "react-dom"
import h from "react_components/htm_create_element"

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
