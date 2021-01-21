// import PropTypes from "prop-types";
import React, { Component } from "react";
import { AddTodoProps, AddTodoState } from "./todos.interface";

class AddTodo extends Component<AddTodoProps, AddTodoState> {
  state: AddTodoState = {
    title: "",
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="ui form" autoComplete="off">
        <div className="fields">
          <div className="sixteen wide field">
            <div className="ui action input">
              <input 
                type="text" 
                placeholder="Add todo..."
                name="title"
                className="form-control input-add-todo"
                value={this.state.title}
                onChange={this.onChange}
                disabled={!this.props.todos.length}
              />

              <button type="submit" className="ui green button" disabled={!this.state.title}>Add</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

/*AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};*/

export default AddTodo;