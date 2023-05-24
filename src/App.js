import NavBars from './components/navBar.js';
import Editor from './components/textEdit.js';
import SideBar from './components/sideBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBars/>
      <div style={{ display: 'flex' }}>
      <div style={{ width: '200px' }}>
        <SideBar/>
      </div>
      <div style={{ flex: '1' }}>
        <Editor />
      </div>
        
      </div>
      
    </div>
  );
}

export default App;
