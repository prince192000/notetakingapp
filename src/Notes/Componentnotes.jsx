import React, { useState } from "react";

const Componentnotes = (props) => {
  const [note, setNote] = useState({
    title: " ",
    content: " ",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });


    }
    const addEvent = () =>{
      props.passNote(note);
      setNote({
        title: "title here ",
        content: " ",
      })
  };
  return (
    <div className="container">
      <div className="component_container">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder='Title'
            autoComplete="off"
          />
          <br />
          <textarea
            name="content"
            value={note.content}
            onChange={InputEvent}
          placeholder='Write Note Here'
          ></textarea>

          <button className="button" onClick={addEvent}>
           +
          </button>
        </form>
      </div>
    </div>
  );
};
export default Componentnotes;
