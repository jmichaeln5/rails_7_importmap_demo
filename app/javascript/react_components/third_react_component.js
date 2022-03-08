import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js';

// class Logs extends Component {
//   toggle(){
//     this.setState({show: !this.state.show });
//   }
//   render({ logs = [], ...props }, { show }) {
//     return html`
//         <div class="logs" ...${props}>
//           <button onClick=${() => this.toggle() }>
//             Yezzirr
//           </button>
//
//           ${show && html`
//             <section class="logs" ...${props}>
//               ${logs.map(log => html`
//                 <${Log} ...${log} />
//               `)}
//             </section>
//           `}
//         </div>
//     `; // End of html
//   }
// }
//
// render(
//   html`<${Logs}/>`,
//   document.getElementById('App')
// ); // INSPECT BUTTON Yezzirr and change takes place


// console.log(posts);



// for (var i = 0; i < postsLength; i++) {
//   console.log(`Title: ${posts[i].title} Body: ${posts[i].body}`);
//   console.log(`Body: ${posts[i].body}`);
//   console.log(" ");
// }

class App extends Component {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }

  render({ page }, { todos = [] }) {
    return html`
      <div class="app">
        <${Header} name="ToDo's (${page})" />

        <button onClick=${() => this.addTodo()} class="h-10 px-5 text-cyan-400 transition-colors duration-150 border border-cyan-400 rounded-lg focus:shadow-outline hover:bg-cyan-500 hover:text-white">Add Todo</button>

        <ul>
          ${todos.map(todo => html`
            <li key=${todo}>${todo}</li>
          `)}
        </ul>

        <${Footer}>footer content here<//>
      </div>
    `;
  }
}

const Header = ({ name }) => html`<h1>${name} List</h1>`

const Footer = props => html`<footer ...${props} />`

render(
  html`<${App} page="All" />`,
  document.getElementById('thirdReactComponent')
);
