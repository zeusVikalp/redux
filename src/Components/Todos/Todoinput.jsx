import React from "react";
import {v4 as uuid} from "uuid"
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/action.js";

export const TodoInput =() => {
    const[name,setName] = React.useState("")
    const dispatch = useDispatch();
    const handelAdd =() => {
        const payload ={
            name,
            status:false,
            id: uuid()
        };

        dispatch(addTodo(payload))
        setName("")
    }
    return (
        <div>
            <input type="text" placeholder="ADD Todos" value={name} onChange = {(e) => setName(e.target.value)} />
            <button onClick={handelAdd}> ADD</button>
        </div>
    )
}