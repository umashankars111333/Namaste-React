import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const title = <h1>Namaste React</h1>;

const Title = () => <h1>Namaste React</h1>;

const number = 2000;
// React Function Component
const Heading = () => {
  return (
    <div>
      {number}
      <Title />
      <div>Episode 3 By Akshay Saini</div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
