import { useState } from 'react';
import './App.css';
import Header from './component/Header.js';
import TodoEditor from './component/TodoEditor.js';
import TodoList from './component/TodoList.js';

// mock data
const mokTodo = [
  {
    id: 0,
    isDone: false,
    content: '리액트 공부하기',
    createDate: new Date().getDate(),
  },
  {
    id: 1,
    isDone: true,
    content: '영화보기',
    createDate: new Date().getDate(),
  },
  {
    id: 2,
    isDone: false,
    content: '햄버거 먹기',
    createDate: new Date().getDate(),
  },
];
function App() {
  // 할 일 아이템의 상태를 관리할 state 생성
  const [todo, setTodo] = useState(mokTodo); //use로 시작하는게 많은데 그런걸 훅이라고 한다.

  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;
