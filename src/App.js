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

  //
  const idRef = useRef(3);
  // 할 일 아이템 추가
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getDate(),
    };

    setTodo([newItem, ...todo]); // setter 함수를 이용해 새로운 배열을 생성해서 넣어주었다.(주소값 변함)/ 새로운 배열이 들어가므로 즉 주소가 변경되므로 변경된거로 리액트가 인지
    idRef.current++; // idRef 의 현재값에 1증가
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
