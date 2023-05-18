import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor() {
  const [text, setText] = useState('');
  const editorRef = useRef(null);

  const handleTextChange = (value) => {
    setText(value);
  };

  const getCursorPosition = () => {
    const editor = editorRef.current;
    if (!editor) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const offset = range.startOffset;

    return offset;
  };

  const getElementAtCursorPosition = () => {
    const editor = editorRef.current;
    if (!editor) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const node = range.startContainer;

    if (node.nodeType === Node.TEXT_NODE) {
      return node.parentNode;
    }

    return node;
  };

  const getElementBeforeCursorPosition = () => {
    const editor = editorRef.current;
    if (!editor) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const node = range.startContainer;

    if (node.nodeType === Node.TEXT_NODE) {
      const previousNode = node.previousSibling;
      if (previousNode) {
        return previousNode.parentNode;
      }
    }

    const previousSibling = node.previousSibling;
    if (previousSibling) {
      return previousSibling;
    }

    const parentNode = node.parentNode;
    if (parentNode) {
      return parentNode;
    }

    return null;
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
    <div>
      <ReactQuill
        value={text}
        style={editorStyles}
        onChange={handleTextChange}
        ref={editorRef}
      />
      <button onClick={() => console.log(getCursorPosition())}>
        Get Cursor Position
      </button>
      <button onClick={() => console.log(getElementAtCursorPosition())}>
        Get Element at Cursor Position
      </button>
      <button onClick={() => console.log(getElementBeforeCursorPosition())}>
        Get Element Before Cursor Position
      </button>
    </div>
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