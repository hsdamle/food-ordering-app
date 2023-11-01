import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";

// Using React Create Element
const nestedHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "1" }, "Heading 1"),
  React.createElement("h2", { id: "2" }, "Heading 2"),
  React.createElement("h3", { id: "3" }, "Heading 3"),
]);

// Using JSX
const nestedHeaderJSX = (
  <div className="title">
    <h1 id="1">Heading 1</h1>
    <h2 id="2">Heading 2</h2>
    <h3 id="3">Heading 3</h3>
  </div>
);

// Using Component

const NestedHeaderComponent = () => (
  <div className="title">
    <h1 id="1">Heading 1</h1>
    <h2 id="2">Heading 2</h2>
    <h3 id="3">Heading 3</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeaderComponent />);
