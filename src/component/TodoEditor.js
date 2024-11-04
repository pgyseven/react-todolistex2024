import { useState } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const onChangeContent = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const onSubmit = () => {
    onCreate(content);
  };

  return (
    <div className="TodoEditor">
      <h4>✨새로운 TO DO 작성하기✨</h4>
      <div className="editor_wrapper">
        <input
          type="text"
          placeholder="다음 할 일"
          onChange={onChangeContent}
          value={content}
        />
        <button onClick={onSubmit}>추가하기</button>
      </div>
    </div>
  );
};

export default TodoEditor;
