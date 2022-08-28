import React from "react";
import "./Todo.css"

const Todo = ({ todo, todos, setTodos }) => {
    const handleDelete = (id) => {
        let newArray = todos.filter((item) => item.id !== id)
        console.log(newArray)
        setTodos(newArray)
    }
    const handleCompleted = () => {
        let completed = todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        setTodos(completed)
    }
    console.log(todo.completed)
    return <div className="todo-container">
        <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
        <i i class="fa-solid fa-trash" onClick={() => handleDelete(todo.id)}></i>
        <i class="fa-solid fa-pen" onClick={() => handleCompleted()}></i>
    </div>;
};

export default Todo;
