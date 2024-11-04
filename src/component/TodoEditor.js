import './TodoEditor.css';

const TodoEditor = ({ onCreate }) => {
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏</h4>
      <div className="editor-wrapper">
        <input type="text" placeholder="새로운 할일..." />
        <button>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
