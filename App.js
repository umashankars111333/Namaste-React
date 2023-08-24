const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Im h1 Tag"),
    React.createElement("h1", null, "Im h1 Tag"),
  ]),
  ,
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", null, "Im h2 Tag"),
    React.createElement("h1", null, "Im h2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
