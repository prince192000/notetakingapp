import React, { isValidElement, useState } from 'react';
import Header from './Notes/Header';
import Componentnotes from './Notes/Componentnotes';
import Notes from './Notes/Notes';

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote=(note)=>{
setAddItem((prevData)=>{
  return[ ...prevData, note]

})


  }
const onDelete = (id) =>{
setAddItem((olddata) => olddata.filter((currdata, index) => {
  return index !== id;
}
))
}
  return (
 <>
 <Header/>
 <Componentnotes
 passNote = {addNote}
 />
 
{addItem.map((val, index) => {
return (<Notes
key={index}
id={index}
title={val.title}
content={val.content}
deleteItem={onDelete}
/>
)
})}

 </>
  );
}

export default App;
