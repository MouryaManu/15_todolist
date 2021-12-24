import React, { Component } from 'react'
import "./NewTodoForm.css";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            task: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
        [evt.target.name] : evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        });
    }

    render() {
        return (
            <div>
                
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">New Todo:</label>
                    <input type="text" id="todo" name="task" onChange={this.handleChange} value={this.state.task}></input>

                    <button>Submit!</button>
                </form>

            </div>
        )
    }
}

export default NewTodoForm;