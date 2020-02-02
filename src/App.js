import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [content, setContent] = useState("");

  const textInput = (event) => {
    setContent( event.target.value);
  };
  console.log(content)

  return (
    <div id="wrapper">
      <textarea id="editor" value={content} onChange={textInput}></textarea>
      <div id="preview">{content}</div>
    </div>
  );
};

export default App;
