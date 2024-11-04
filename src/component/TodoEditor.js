import { useRef, useState } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
    console.log(content);
  };
  const onSubmit = () => {
    if (!content) {
      alert('할 일 내용을 입력하세요.');
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏</h4>
      <div className="editor-wrapper">
        <input
          ref={inputRef}
          type="text"
          placeholder="새로운 할일..."
          onChange={onChangeContent}
          value={content}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
