//////////// https://reactjs.org/docs/lists-and-keys.html

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////// ********** Lists and Keys **********  ///////////////////
////////////// ********** Lists and Keys **********  ///////////////////
////////////// ********** Lists and Keys **********  ///////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

console.log("lists_and_keys.js loaded...");

import { Component } from "react"
import { render } from "react-dom"
import h from "react_components/htm_create_element"

// // First, let’s review how you transform lists in JavaScript.
// //
// // Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:
// //
// // const numbers = [1, 2, 3, 4, 5];
// // const doubled = numbers.map((number) => number * 2);console.log(doubled);
// //
// // This code logs [2, 4, 6, 8, 10] to the console.
// //
// // In React, transforming arrays into lists of elements is nearly identical.
//
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// //////////////   Rendering Multiple Components  ////////////////////////
// //////////////   Rendering Multiple Components  ////////////////////////
// //////////////   Rendering Multiple Components  ////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
//
// // You can build collections of elements and include them in JSX using curly braces {}.
//
// // Below, we loop through the numbers array using the JavaScript map() function.
//
// // We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems:
//
// // We include the entire listItems array inside a <ul> element, and render it to the DOM:
//
// // This code displays a bullet list of numbers between 1 and 5.

// ////////////////////////// Before HTM Conversion (JSX)
// // const numbers = [1, 2, 3, 4, 5];
// // const listItems = numbers.map((number) =>  <li>{number}</li>);
//
// // ReactDOM.render(
// //   <ul>{listItems}</ul>,
// //   document.getElementById('listsAndKeysRoot')
// // );

////////////////////////// After HTM Conversion
const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>  h`<li>${number}</li>`);
// const listItems = numbers.map((number) =>  h`<li>${number + ' from listItems const component' }</li>`);
const listItems = numbers.map((number) =>
  h`<li>
    <span class="font-bold"> ${number} </span>
    <span class="text-sm"> (from listItems const component) </span>
   </li>`
);

render(
  h `<ul>${listItems}</ul>`,
  document.getElementById('listsAndKeysRoot')
);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////      Basic List Component        ////////////////////////
//////////////      Basic List Component        ////////////////////////
//////////////      Basic List Component        ////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//
// // Usually you would render lists inside a component.
// //
// // We can refactor the previous example into a component that accepts an array of numbers and outputs a list of elements.
// ////////////////////////// Before HTM Conversion (JSX)
// // function NumberList(props) {
// //   const numberz = props.numberz;
// //   const listItemz = numberz.map((number) =>
// //     <li>{number}</li>
// //   );
// //   return (
// //     <ul>{listItemz}</ul>
// //   );
// // }
// //
// // const numberz = [1, 2, 3, 4, 5];
// // ReactDOM.render(
// //   <NumberList numberz={numberz} />,
// //   document.getElementById('listsAndKeysRoot2')
// // );
// ////////////////////////// After HTM Conversion
function NumberList(props) {
  const numberz = props.numberz;
  const listItemz = numberz.map((number) =>
    // h`<li>${number}</li>`
    h`<li>
        <span class="font-bold"> ${number} </span>
        <span class="text-sm"> (from NumberList functional component)</span>
     </li>`
  );
  return h`
    <ul>${listItemz}</ul>
  `
}

const numberz = [1, 2, 3, 4, 5];
render(
  h `<${NumberList} numberz=${numberz} />`,
  document.getElementById('listsAndKeysRoot2')
);
//
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////      Keys        //////////////////////////
// ////////////////////////////      Keys        //////////////////////////
// ////////////////////////////      Keys        //////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
//
// // Keys help React identify which items have changed, are added, or are removed.
//
// // Keys should be given to the elements inside the array to give the elements a stable identity:
//
//
// // // ************** //  // SECTION DOES NOT WORK ALONE (Multi step example)
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////// Before HTM Conversion (JSX)
// // const numbers = [1, 2, 3, 4, 5];
// // const listItems = numbers.map((number) =>
// //   <li key={number.toString()}>
// //     {number}
// //   </li>
// // );
//
// ////////////////////////// After HTM Conversion
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   h`<li key=${number.toString()}>
//     ${number}
//   </li>`
// );
// ////////////////////////////////////////////////////////////////////////////
// // // ************** //  // SECTION END
//
// // The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
// //
// // Most often you would use IDs from your data as keys:
//
// // // ************** //  // SECTION DOES NOT WORK ALONE (Multi step example)
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////// Before HTM Conversion (JSX)
// // const todoItems = todos.map((todo) =>
// //   <li key={todo.id}>
// //     {todo.text}
// //   </li>
// // );
//
// ////////////////////////// After HTM Conversion
// const todoItems = todos.map((todo) =>
//   h`<li key=${todo.id}>
//     ${todo.text}
//   </li>`
// );
// ////////////////////////////////////////////////////////////////////////////
// // // ************** //  // SECTION END
//
//
// // When you don’t have stable IDs for rendered items,
//
// // you may use the item index as a key as a last resort:
// // // ************** //  // SECTION DOES NOT WORK ALONE (Multi step example)
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////// Before HTM Conversion (JSX)
// // const todoItems = todos.map((todo, index) =>
// //   // Only do this if items have no stable IDs
// //   <li key={index}>
// //     {todo.text}
// //   </li>
// // );
// ////////////////////////// After HTM Conversion
// const todoItems = todos.map((todo, index) =>
//   // Only do this if items have no stable IDs
//   h`<li key=${index}>
//     ${todo.text}
//   </li>`
// );
// ////////////////////////////////////////////////////////////////////////////
// // // ************** //  // SECTION END
//
// // We don’t recommend using indexes for keys if the order of items may change.
// //
// // This can negatively impact performance and may cause issues with component state.
// //
// // Check out Robin Pokorny’s article for an in-depth explanation on the negative impacts of using an index as a key.
// // https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
// //
// // If you choose not to assign an explicit key to list items then React will default to using indexes as keys.
//
// // Here is an in-depth explanation about why keys are necessary if you’re interested in learning more.
// // https://reactjs.org/docs/reconciliation.html#recursing-on-children




////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Extracting Components with Keys  //////////////////////
//////////////   Extracting Components with Keys  //////////////////////
//////////////   Extracting Components with Keys  //////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Keys only make sense in the context of the surrounding array.
//
// For example:
//   if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array
//
//   Rather than on the <li> element in the ListItem itself.
//
// Example: Incorrect Key Usage:
// Example: Incorrect Key Usage:
// Example: Incorrect Key Usage:
////////////////////////// Before HTM Conversion (JSX)
// function ListItem(props) {
//   const value = props.value;
//   return (
//     // Wrong! There is no need to specify the key here:
//     <li key={value.toString()}>
//       {value}
//     </li>
//   );
// }
//
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Wrong! The key should have been specified here:
//     <ListItem value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );


// Example: Correct Key Usage
// Example: Correct Key Usage
// Example: Correct Key Usage

//  A good rule of thumb is that elements inside the map() call need keys.


////////////////////////// Before HTM Conversion (JSX)
// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }
//
// function NumberListFuncComponent(props) {
//   const numberzConst = props.numberzConst;
//   const listItems = numberzConst.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }
//
// const numberzConst = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberListFuncComponent numberzConst={numberzConst} />,
//   document.getElementById('listsAndKeysRoot3')
// );

////////////////////////// After HTM Conversion
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return h`<li>${props.value}</li>`;
}

function NumberListFuncComponent(props) {
  const numberzConst = props.numberzConst;
  const listItems = numberzConst.map((number) =>
    // Correct! Key should be specified inside the array.
    h`<${ListItem} key=${number.toString()} value=${number} />`
  );

  return (h`
    <ul>
      ${listItems}
    </ul>
  `);
}

const numberzConst = [1, 2, 3, 4, 5];
render(
  h`<${NumberListFuncComponent} numberzConst=${numberzConst} />`,
  document.getElementById('listsAndKeysRoot3')
);



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////   Keys Must Only Be Unique Among Siblings ///////////////////
//////////   Keys Must Only Be Unique Among Siblings ///////////////////
//////////   Keys Must Only Be Unique Among Siblings ///////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Keys used within arrays should be unique among their siblings.
//
// However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays:

////////////////////////// Before HTM Conversion (JSX)
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }
//
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('listsAndKeysRoot4')
// );
////////////////////////// After HTM Conversion
function Blog(props) {
  const sidebar = (h`
    <ul>
      ${props.posts.map((post) =>
        h`<li key=${post.id}>
          ${post.title}
        </li>`
      )}
    </ul>
  `);
  const content = props.posts.map((post) =>
    h`<div key=${post.id}>
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </div>`
  );
  return (h`
    <div>
      ${sidebar}
      <hr />
      ${content}
    </div>
  `);
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
render(
  h`<${Blog} posts=${posts} />`,
  document.getElementById('listsAndKeysRoot4')
);


// // Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:
//
// ////////////////////////// JSX Example
// // const content = posts.map((post) =>
// //   <Post
// //     key={post.id}
// //     id={post.id}
// //     title={post.title} />
// // );
//
// // With the example above, the Post component can read props.id, but not props.key.

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////   Embedding map() in JSX        /////////////////////////
//////////////   Embedding map() in JSX        /////////////////////////
//////////////   Embedding map() in JSX        /////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// // // Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability.
// // //
// // // Keep in mind that if the map() body is too nested, it might be a good time to extract a component.
// // //
// // // In the examples above we declared a separate listItems variable and included it in JSX:
// // //
// // // // ////////////////////////// JSX Example
// // // function NumberList(props) {
// // //   const numbers = props.numbers;
// // //   const listItems = numbers.map((number) =>
// // //     <ListItem key={number.toString()}
// // //               value={number} />
// // //   );
// // //   return (
// // //     <ul>
// // //       {listItems}
// // //     </ul>
// // //   );
// // // }
// // //
// // // JSX allows embedding any expression in curly braces so we could inline the map() result:
// // //
// // // // ////////////////////////// JSX Example
// // // function NumberList(props) {
// // //   const numbers = props.numbers;
// // //   return (
// // //     <ul>
// // //       {numbers.map((number) =>
// // //         <ListItem key={number.toString()}
// // //                   value={number} />
// // //       )}
// // //     </ul>
// // //   );
// // // }

////////////////////////// Before HTM Conversion (JSX)
// function EmbededListItem(props) {
//   return <li>{props.value}</li>;
// }
//
// function EmbededNumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <EmbededListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <EmbededNumberList numbers={numbers} />,
//   document.getElementById('listsAndKeysRoot5')
// );
////////////////////////// After HTM Conversion
function EmbededListItem(props) {
  return h`<li>${props.value}</li>`;
}

// // Created this function to work w HTM (Not in React docs)
function mappedEmbededListItem(numbersToEmbed) {
  return (h`
    ${
      numbersToEmbed.map((number) =>
            h`<${EmbededListItem} key=${number.toString()}
                                  value=${number} />`
          )
    }
  `);
}

// Before extracting embeded map into seperate function and re-embedding
// kinda defeats the purpose but, charge it to the game ¯\_(ツ)_/¯

// function EmbededNumberList(props) {
//   const numbersToEmbed = props.numbersToEmbed;
//   return (
//     <ul>
//       {numbersToEmbed.map((number) =>
//         <EmbededListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }

// After extracting map into func

function EmbededNumberList(props) {
  const numbersToEmbed = props.numbersToEmbed;
  return (h`
    <ul>
      ${mappedEmbededListItem(numbersToEmbed)}
    </ul>
  `);
}

const numbersToEmbed = [1, 2, 3, 4, 5];
render(
  h`<${EmbededNumberList} numbersToEmbed=${numbersToEmbed} />`,
  document.getElementById('listsAndKeysRoot5')
);
