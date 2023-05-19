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
    if (!editor) return -1;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return -1;

    const range = selection.getRangeAt(0);
    const offset = range.startOffset;

    return offset;
  };

  const getElementAtCursorPosition = () => {
    const editor = editorRef.current;
    if (!editor) return null;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;

    const range = selection.getRangeAt(0);
    const node = range.startContainer;

    if (node.nodeType === Node.TEXT_NODE) {
      return node.parentNode;
    }

    return node;
  };

  const getElementBeforeCursorPosition = () => {
    const editor = editorRef.current;
    if (!editor) return null;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;

    const range = selection.getRangeAt(0);
    const node = range.startContainer;

    if (node.nodeType === Node.TEXT_NODE) {
      const previousSibling = node.previousSibling;
      if (previousSibling) {
        return previousSibling;
      }
      return node.parentNode;
    }

    const previousNode = node.previousSibling;
    if (previousNode) {
      return previousNode;
    }

    return node.parentNode;
  };

  const getSelectedText = () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      return selection.toString();
    }
    return '';
  };

  const replaceSelectedText = (newText) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(newText));
    }
  };

  const insertTextAtCursorPosition = (newText) => {
    const editor = editorRef.current;
    if (!editor) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const node = range.startContainer;

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      const before = text.slice(0, range.startOffset);
      const after = text.slice(range.startOffset);
      const updatedText = before + newText + after;
      const updatedRange = document.createRange();
      updatedRange.setStart(node, range.startOffset);
      updatedRange.setEnd(node, range.startOffset + newText.length);
      range.deleteContents();
      range.insertNode(document.createTextNode(updatedText));
      selection.removeAllRanges();
      selection.addRange(updatedRange);
    } else {
      const textNode = document.createTextNode(newText);
      range.insertNode(textNode);
    }
  };

  const editorStyles = {
    minHeight: '200px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '16px',
    margin: '10px'
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
      <button onClick={() => console.log(getSelectedText())}>
        Get Selected Text
      </button>
      <button onClick={() => replaceSelectedText('New Text')}>
        Replace Selected Text
      </button>
      <button onClick={() => insertTextAtCursorPosition('Inserted Text')}>
        Insert Text at Cursor Position
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
