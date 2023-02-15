import React from "react";

export const Notes = (props) => {
const deleteNote = () => {
  props.deleteItem(props.id);
}

  return (
    <div className="notes_container">
      <div className="note">
        <h2> {props.title}</h2>
        <h3> {props.content}</h3>
        <br />
        <button className="del-button">
          <i className="fa-solid fa-trash-arrow-up" onClick={deleteNote}></i>
        </button>
      </div>
      
    </div>
  );
};
export default Notes;
