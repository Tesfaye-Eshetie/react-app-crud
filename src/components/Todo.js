import { Button } from './styles/Button.styled';
import { TodoContainer } from './styles/Todo.styled';

const Todo = ({ todo, completeTodo, removeTodo })=> {
  return (
    <TodoContainer
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <Button onClick={() => completeTodo(todo)}>Completed</Button>
        <Button style= {{color: "red"}} onClick={() => removeTodo(todo)}>x</Button>
      </div>
    </TodoContainer>
  );
}
  export default Todo;