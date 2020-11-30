import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
    }
  }

  handleChanges = (evt) => {
    this.setState({
      textInput:evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleAddTask(this.state.textInput);
    this.setState({
      textInput: "",
    });
  }

  handleClear = () => {
    this.props.handleClearCompleted();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add A New Task:
            <input 
              name="todo"
              type="text"
              value={this.state.textInput}
              onChange={this.handleChanges}
            />
          </label>
          <button>Add!</button>
        </form>
        <button onClick={this.handleClear}>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default TodoForm;