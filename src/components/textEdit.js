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
    const editor = editorRef.current.getEditor();
    if (!editor) return -1;

    const selection = editor.getSelection();
    if (!selection || !selection.index) return -1;

    return selection.index;
  };

 
  const getElementAtCursorPosition = () => {
    const editor = editorRef.current;
    if (!editor) return null;
    const cursorPosition = getCursorPosition();
    if (cursorPosition === -1) return null;
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
    const editor = editorRef.current.getEditor();
    if (!editor) return null;
  
    const cursorPosition = getCursorPosition();
    if (cursorPosition === -1) return null;
  
    const lineIndex = editor.getLine(cursorPosition - 1);
    const lineText = editor.getText(lineIndex);
  
    if (lineText) {
      return lineText;
    }
  
    return null;
  };
  const getSelectedText = () => {
    const editor = editorRef.current.getEditor();
    if (!editor) return '';

    const selection = editor.getSelection();
    if (!selection || !selection.length) return null;

    return editor.getText(selection.index, selection.length);
  };

  const replaceSelectedText = (newText) => {
    const editor = editorRef.current.getEditor();
    if (!editor) return;

    const selection = editor.getSelection();
    if (!selection || !selection.length) return;

    editor.deleteText(selection.index, selection.length);
    editor.insertText(selection.index, newText);
  };

  const insertTextAtCursorPosition = (newText) => {
    const editor = editorRef.current.getEditor();
    if (!editor) return;

    const selection = editor.getSelection();
    if (!selection || !selection.length) return;

    editor.insertText(selection.index, newText);
  };

  const editorStyles = {
    minHeight: '200px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '16px',
    margin: '10px',
  };
  const editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults
      [{ font: [] }],
      [{ align: [] }],
      ['clean'], // remove formatting button
    ],
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleTextChange}
        modules={editorModules}
        style={editorStyles}
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
