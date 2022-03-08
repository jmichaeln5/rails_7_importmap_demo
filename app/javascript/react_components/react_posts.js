import { render } from "react-dom"
import h from "react_components/htm_create_element"

render(
  h`<h1 class="text-cyan-400 font-bold text-4xl"> React Posts </h1>`,
  document.getElementById('reactPosts')
)
