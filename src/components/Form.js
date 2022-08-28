import React, { useState } from "react";
import "./Form.css"
import Todos from "./Todos";

const Form = ({ todo, setTodo, todos, setTodos }) => {

    const handleTodo = (e) => {
        setTodo({ ...todo, text: e.target.value })
    }
    const handleTodos = (e) => {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({
            text: "", completed: false, id: Math.floor(Math.random() * 1000)
        })
    }

    console.log(todo)
    return (
        <form className="form-container" onSubmit={(e) => handleTodos(e)} action="" >
            <input value={todo.text} type="text" onChange={(e) => handleTodo(e)} placeholder="please add a todo" />
            <button type="submit">add todo</button>
            <select name="todo-completed" id="">
                <option value="All">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </form>);

};

export default Form;
