import './App.css';
import Header from './component/Header.js';
import TodoEditor from './component/TodoEditor.js';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <div>To do List</div>
    </div>
  );
}

export default App;
