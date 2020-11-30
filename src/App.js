import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "Finsih ToDo App",
    id: 123,
    completed: false,
  },
  {
    task: "Sleep",
    id: 1234,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  handleToggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return({
            ...todo,
            completed: !todo.completed
          });
        } else {
          return(todo);
        }
      })
    });
  }

  handleClearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo=>(!todo.completed))
    });
  }

  handleAddTask = (newTask) => {
    this.setState({
      todos: [...this.state.todos, { task: newTask, id: Date.now(), completed:false }]
    });
  }

  render() {
    return (
      <div>

        <h2>Welcome to your Todo App!</h2>

        <TodoList 
          todos={this.state.todos} 
          handleToggleCompleted={this.handleToggleCompleted} handleClearCompleted={this.handleClearCompleted} 
        />

        <TodoForm 
          handleAddTask={this.handleAddTask}
          handleClearCompleted={this.handleClearCompleted}
        />

      </div>
    );
  }
}

export default App;
