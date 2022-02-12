import React, { useReducer} from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import { initialState, reducer } from "./reducer";

function App({todo, addTodo, completeTodo}) {

  const [todos, dispatch] = useReducer(reducer, initialState);
  
  const addTodos = text => {
    dispatch({ type:"ADD_TODOS",
    todo: {id: todos.length + 1, text, isCompleted: false}
  });
  }
  const handleCompleteTodo = (todo) => {
    dispatch({ type: "COMPLETE_TODO", id: todo.id });
  };

  const handleRemoveTodo = (todo) => {
    dispatch({ type: "REMOVE_TODO", id: todo.id});
  };

   return (
    <>
      <GlobalStyles />
      < Container >
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={handleCompleteTodo}
              removeTodo={handleRemoveTodo}
            />
          ))}
         
        <TodoForm addTodo={addTodos} />
      </Container>
    </>
  );
}

export default App;