/****************************
 *  <div id=parent>
 *     <div id=child>
 *         <h1 id="heading1">H1 tag</h1>
 *         <h2 id="heading2">H2 tag</h2>
 *      </div>
 *      <div id=child>
 *         <h1 id="heading1">H1 tag</h1>
 *         <h2 id="heading2">H2 tag</h2>
 *     </div>
 *  </div>
 * 
 *
 * 
 * 
 * 
 * */

const parent = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { id: "child" },
      [
        React.createElement("h1", { id: "heading1" }, "I am H1 Tag"),
        React.createElement("h2", { id: "heading2" }, "I am H2 Tag")
      ]),
    React.createElement("div", { id: "child2" },
      [
        React.createElement("h1", { id: "heading1" }, "I am H1 Tag"),
        React.createElement("h2", { id: "heading2" }, "I am H2 Tag")
      ])
  ]);           

// const heading = React.createElement("h1", {
//     "id": "heading"
// }, "Hellow World From React"); // Creates a react element which is nothing but a normal javascript object.                       
// console.log("heading element =>", heading);
console.log("heading element =>", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);