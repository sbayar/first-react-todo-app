import React from "react";
import { ViewModeButtonProps } from "./view-mode-buttons.interface";

const ViewModeButtons = (props: ViewModeButtonProps) => {
  const { id } = props.todo;

  return (
    <React.Fragment>
      <button className="ui button" onClick={props.enterEditMode.bind(this, id)}><i className="far fa-edit"></i></button>
      <button className="ui button" onClick={props.deleteTodo.bind(this, id)}><i className="far fa-trash-alt"></i></button>
      {props.htmlCommentLink}
    </React.Fragment>
  );
};

export default ViewModeButtons;
