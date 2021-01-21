import React, { Component } from "react";
import ViewModeButtons from "../buttons/ViewModeButtons";
import EditModeButtons from "../buttons/EditModeButtons";
import { TodoItemProps } from "./todos.interface";
import { Link } from "react-router-dom";

class TodoItem extends Component<TodoItemProps, {}> {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  getViewModeContent(title: string, id: number, htmlCommentLink:any) {
    const buttons = (
      <ViewModeButtons
        enterEditMode={this.props.enterEditMode}
        deleteTodo={this.props.deleteTodo}
        todo={this.props.todo}
        htmlCommentLink={htmlCommentLink}
      />
    );
    const content = (
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={"inlineCheckbox1_" + id}
          onChange={this.props.toggleTodoCompleted.bind(this, id)}
          checked={this.props.todo.completed}
        />
        <label className="form-check-label" htmlFor={"inlineCheckbox1_" + id}>
          {" "}
          <span style={this.getStyle()}>{title}</span>{" "}
        </label>
      </div>
    );

    return {
      buttons: buttons,
      content: content,
    };
  }

  getEditModeContent(title: string, id: number, htmlCommentLink: JSX.Element) {
    const buttons = (
      <EditModeButtons
        exitEditMode={this.props.exitEditMode}
        saveChanges={this.props.saveChanges}
        todo={this.props.todo}
        htmlCommentLink={htmlCommentLink}
      />
    );
    const content = (
      <div className="ui input small fluid">
        <input 
          name="title"
          type="text" 
          placeholder="Search..." 
          onChange={this.props.onTodoInputChange}
          value={title}
          data-id={id}
        />
      </div>
    );

    return {
      buttons: buttons,
      content: content,
    };
  }

  render() {
    const { title, id, isEditing } = this.props.todo;
    const htmlCommentLink = <Link className="ui button" to={`/todos/${id}/comments`}><i className="far fa-comment-dots"></i></Link>
    const { buttons, content } = isEditing
      ? this.getEditModeContent(title, id, htmlCommentLink)
      : this.getViewModeContent(title, id, htmlCommentLink);

    return (

      <div className="item">
        <div className="right floated content">
          <div className="ui buttons small">
            {buttons}
          </div>
        </div>
        
        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}

export default TodoItem;
