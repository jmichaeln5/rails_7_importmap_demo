import { render } from "react-dom"
import h from "react_components/htm_create_element"

render(
  h`<h1 class="font-semi-bold text-3xl"> Hello React + HTM </h1>`,
  document.getElementById('hello_react')
)
