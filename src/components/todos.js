import React from 'react'
import './todo.css'

export default (props) => {
    const handler = (type, id) => {
        props.controlHandler(type, id)
    }

    let temp = []
    switch(props.filter) {
        case 'TODO':
        temp = props.data.filter((todo) => (
            todo.isDone === false
        ))
            break
        case 'DONE':
            temp = props.data.filter((todo) => (
                todo.isDone === true
            ))
            break
        default:
            temp = props.data
    }

    const todos = temp.map((todo) => {
        let done
        if(todo.isDone) {
            done = <span className="done-alt" onClick={handler.bind(this, 'DONE', todo.id, )}>DONE</span>
        } else {
            done = <span className="done" onClick={handler.bind(this, 'DONE', todo.id, )}>DONE</span>
        }
        return (
            <div className="todo-item" key={todo.id}>
                <div className="control">
                    <span className="delete" onClick={handler.bind(this, 'DEL', todo.id )}>DELETE</span>
                    {done}
                </div>
                <span className="todo">{todo.body}</span>
            </div>
        )
    })

    return (
        <div className="todo-container">
            {todos}
        </div>
    )
}
