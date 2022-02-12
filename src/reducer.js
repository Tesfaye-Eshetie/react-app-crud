export const initialState = [
    { 
        id: 1,
        text: "Studying react hooks ",
        isCompleted: true
    },
    { 
        id: 2,
        text: "Going to store",
        isCompleted: false 
    },
    { 
        id: 3,
        text: "Build todo app",
        isCompleted: false 
    },
    { 
        id:4,
        text: "Spending time with family",
        isCompleted: false
    }
  ];

  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODOS":
        return [...state, action.todo];
      
      case "COMPLETE_TODO":
        return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, isCompleted: !todo.isCompleted };
            } else {
              return todo;
            }
          });
       
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.id);
  
      default:
        return state;
    }
  };
  
