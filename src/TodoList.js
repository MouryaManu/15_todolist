import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import "./Todolist.css"
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            Todos: []
        };
        this.addTodo=this.addTodo.bind(this);
        this.remove=this.remove.bind(this);
        this.update= this.update.bind(this);
        this.toggleCompletion=this.toggleCompletion.bind(this);
    }

    addTodo(newTodo) {
        this.setState({
         Todos: [...this.state.Todos, newTodo]
        });
    }

    remove(id) {
        this.setState({
            Todos: this.state.Todos.filter(st => st.id!== id)
        });
    }

    update(id,updatedTask) {
        const updatedTodos = this.state.Todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask};
            }
            return todo;
        });
        this.setState({Todos: updatedTodos});
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.Todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({Todos: updatedTodos});
    }


    render() {
        const todos= this.state.Todos.map(todo => (
            <Todo 
            todo={todo.task} 
            key={todo.id} 
            id={todo.id} 
            completed= {todo.completed}
            removeTodo={this.remove} 
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion} />
        ));
        return (
            <div className="TodoList">
                <h1>Todo List!! <span>A simple React Todo List App.</span> </h1>
              <ul>
              {todos}
              </ul>
              <NewTodoForm createTodo={this.addTodo}  />
            </div>
        )
    }
}

export default TodoList;