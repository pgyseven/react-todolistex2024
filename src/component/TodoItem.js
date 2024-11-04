import './TodoItem.css';

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="checkbox-col">
        <input type="checkbox" />
      </div>
      <div className="title-col">할일</div>
      <div className="date-col">{new Date().toLocaleDateString}</div>
      <div className="btn-col">
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
