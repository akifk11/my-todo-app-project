import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, setTodos }) => {
    return <>
        {todos.map((item) => {
            return (<Todo key={item.id} todo={item} todos={todos} setTodos={setTodos} />)
        })}
    </>;
};

export default Todos;
