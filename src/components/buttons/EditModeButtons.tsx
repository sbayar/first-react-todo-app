import React from "react";
import { EditModeButtonProps } from "./edit-mode-buttons.interface";

const EditModeButtons = (props: EditModeButtonProps) => {
    const { id } = props.todo;
  
    return (

      <React.Fragment>
        <button className="ui button" onClick={props.saveChanges.bind(this, id)}><i className="fas fa-check"></i></button>
        <button className="ui button" onClick={props.exitEditMode.bind(this, id)}><i className="far fa-times-circle"></i></button>
        {props.htmlCommentLink}
      </React.Fragment>
    )
}

export default EditModeButtons;