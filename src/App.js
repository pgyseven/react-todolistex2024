import { useRef, useState } from 'react';
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
    createdDate: new Date().getDate(),
  },
  {
    id: 1,
    isDone: true,
    content: '빨래하기',
    createdDate: new Date().getDate(),
  },
  {
    id: 2,
    isDone: false,
    content: '청소하기',
    createdDate: new Date().getDate(),
  },
];

function App() {
  // TodoItem의 상태를 관리할 state
  const [todo, setTodo] = useState(mokTodo);
  const idRef = useRef(3); // ReactDOM 객체에 접근하기 위해 사용하는 hooks

  // TodoItem 추가
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getDate(),
    };

    setTodo([newItem, ...todo]);
    // <- 새로운 배열을 집어넣은 것이기 때문에 주소값이 바뀜 --> 렌더링 된다.
    // setter 함수를 이용해 새로운 배열을 생성해서 넣어준다. = 주소값 변한다.
    idRef.current++; // idRef의 현재 값에 1씩 증가
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </div>
  );
}

export default App;
