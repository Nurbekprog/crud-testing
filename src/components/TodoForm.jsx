import React from "react";
import { useState } from "react";
import useTodoStore from "../store/TodoStore";

const TodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [todoTitle, setTodoTitle] = useState("");

  const handleTodoSubmit = () => {
    if (!todoTitle) return alert("please add todo list!");
    addTodo({
      id: Math.ceil(Math.random() * 1000000),
      title: todoTitle,
    });
  };
  return (
    <div className="flex">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTodoSubmit();
          setTodoTitle("");
        }}
      >
        <input
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
          type="text"
          className="outline-none border-2 rounded-l-lg border-green-700 p-3"
        />
      </form>
      <button
        onClick={() => {
          handleTodoSubmit();
          setTodoTitle("");
        }}
        className="bg-green-700 px-4 rounded-r-lg text-white font-bold"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
