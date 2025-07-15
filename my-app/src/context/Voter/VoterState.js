import React, { useState } from "react";
import VoterContext  from "./ContextVoter";

const VoterState = (props)=>{
  const host = "http://localhost:5000"
  
//   const [notes,setNotes] = useState([]);
//   const [madeChanges,setChanges] = useState(false);

//   // Get All Notes
//     const getNotes = async()=>{
//       const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//          method: "GET",
//          headers: {
//              "Content-type": "application/json",
//              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTM1YjAzZTgxNDU3ZmYyOTk0MzMzIn0sImlhdCI6MTczOTYwNzE1N30.XllVxokSmz6zLLRvkPQAFMEz1io1t5IRrEgchN-G9uM"
//          }
//      });
//      const json = await response.json();
//      setNotes(json);
//     }

//       // ADD THE NOTES

//       const addNote = async (title,description,tag)=>{
        
//          const response = await fetch(`${host}/api/notes/createnotes`, {
//           method: "POST",
//           body: JSON.stringify({title,description,tag}),
//           headers: {
//               "Content-type": "application/json",
//               "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTM1YjAzZTgxNDU3ZmYyOTk0MzMzIn0sImlhdCI6MTczOTYwNzE1N30.XllVxokSmz6zLLRvkPQAFMEz1io1t5IRrEgchN-G9uM"
//           }
//       });
//       const json = await response.json();
//       setNotes([...notes,json]);
//       }


//       // DELETE A NOTE

//       const deleteNote = async(id)=>{
         
//          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-type": "application/json",
//                 "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTM1YjAzZTgxNDU3ZmYyOTk0MzMzIn0sImlhdCI6MTczOTYwNzE1N30.XllVxokSmz6zLLRvkPQAFMEz1io1t5IRrEgchN-G9uM"
//             }
//         });


//          const newNote = notes.filter((note)=>{
//             return (note._id !== id);
//          })
//          setNotes(newNote);
//       }

//       // EDIT A NOTE

//       const editNote = async (id,title,description,tag)=>{

//         const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//           method: "PUT",
//           body: JSON.stringify({title,description,tag}),
//           headers: {
//               "Content-type": "application/json",
//               "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTM1YjAzZTgxNDU3ZmYyOTk0MzMzIn0sImlhdCI6MTczOTYwNzE1N30.XllVxokSmz6zLLRvkPQAFMEz1io1t5IRrEgchN-G9uM"
//           }
//       });

      
//          for(let i = 0; i < notes.length; i++){
//           const element = notes[i];
//           if(element._id === id){
//             element.title = title;
//             element.description = description;
//             element.tag = tag;
//           }
//          }
//          setNotes(notes);
//       }

   
    
   return (
      <VoterContext.Provider value = {{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
     </VoterContext.Provider>
   )
}

export default NoteState;