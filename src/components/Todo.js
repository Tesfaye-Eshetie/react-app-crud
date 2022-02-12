import { Button } from './styles/Button.styled';
import { TodoContainer } from './styles/Todo.styled';

const Todo = ({ todo, index, completeTodo, removeTodo })=> {
  return (
    <TodoContainer
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <Button onClick={() => completeTodo(index)}>Complete</Button>
        <Button style= {{color: "red"}} onClick={() => removeTodo(index)}>x</Button>
      </div>
    </TodoContainer>
  );
}
  export default Todo;