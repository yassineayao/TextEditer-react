import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function TextEditor() {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <ReactQuill value={text} onChange={handleTextChange} />
  );
}

function Editor() {
  return (
    <div>
      <h1>Text Editor</h1>
      <TextEditor />
    </div>
  );
}

export default Editor;