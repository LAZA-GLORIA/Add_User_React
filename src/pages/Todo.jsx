import React, { useState } from "react";
import Arraytodo from "../data/Arraytodo"
import AddtodoForm from "../components/AddtodoForm"

export default function Todo() {
    const [todos, setTodos] = useState(Arraytodo);
    console.log(todos);
    return (
        <div>
            <h1> hello </h1>
          { /**
           * {Arraytodo.map(todo => {
                return (
                    <li key={todo.id}> {todo.todo} </li>
                )
            })} */ }
            
        </div>
    )
}