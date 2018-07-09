import React, { Component } from 'react'
import './form.css'

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ todo: event.target.value });
    }

    handleSubmit(e) {
        const newTodo = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            body: this.state.todo,
            isDone: false
        }

        this.props.handler(newTodo)
        this.setState({
            todo: ''
        })
        e.preventDefault()
    }


    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Todo</label>
                    <input type="text" value={this.state.todo} onChange={this.handleChange} />

                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}


export default NewTodo;