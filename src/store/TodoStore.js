import create from "zustand";
import {devtools, persist} from 'zustand/middleware';

const todoStore = (set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      todos: [todo, ...state.todos]
    }));
  },
  removeTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((c) => c.id !== todoId)
    }));
  },

  toggleIsDone: (todoId) => {
    set((state) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
});


const useTodoStore = create(
    devtools(
        persist(todoStore, {
            name: "todos"
        })
    )
);

export default useTodoStore;
