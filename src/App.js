import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

function App({todo, addTodo }) {
  const [todos, setTodos] = useState([
    { text: "Studying react hooks " },
    { text: "Going to store" },
    { text: "Build todo app" },
    { text: "Spending time with family" }
  ]);

  const addTodos = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <GlobalStyles />
      < Container >
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        <TodoForm addTodo={addTodos} />
      </Container>
    </>
  );
}

export default App;