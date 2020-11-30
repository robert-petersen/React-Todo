import React from "react";

export default function Todo(props) {
  const handleClick = () => {
    props.handleToggleCompleted(props.todo.id);
  }

  return(
    <div onClick={handleClick}>
      <p>
        <button onClick={handleClick}>X</button>
        {props.todo.task}
        {props.todo.completed ? " Completed!" : ""}
      </p>
    </div>
  );
}