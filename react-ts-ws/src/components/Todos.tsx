import React from "react"
import Todo from '../models/todo';

const Todos: React.FC<{items:Todo[]}>=(props)=>{
//props 에 타입을 표시해줘야 됨
    return(
    <ul>``
        {props.items.map((item)=>(
            <li key={item.id}>{item.text}</li>
            ))}
    </ul>
    )
}

export default Todos