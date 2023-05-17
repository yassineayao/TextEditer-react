import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function TextEditor() {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };
  const editorStyles = {
    minHeight: '200px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '16px',
    margin:'10px'
    
  };

  return (
    <ReactQuill value={text} style={editorStyles} onChange={handleTextChange} />
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