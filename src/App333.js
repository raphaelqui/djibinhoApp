import React, { useState, useEffect } from 'react';

import { incrementCounter } from './actions/index.js';
import { connect } from 'react-redux'; 


import { API, Storage } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from './graphql/mutations';






const initialFormState = { name: '', desc: '' }

function App333() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);


  async function fetchNotes() {
    console.log("wird ausgeführt");

    const apiData = await API.graphql({ query: listTodos });
    const todosFromAPI = apiData.data.listTodos.items;
    await Promise.all(todosFromAPI.map(async note => {
      if (note.image) {
        const image = await Storage.get(note.image);
        note.image = image;
      }
      return note;
    }));
    setNotes(apiData.data.listTodos.items);
    
  }

  async function onChange(e) {
    // funciton nur für den file input

    //ist ein bild drin?
    if (!e.target.files[0]) return
    //nimmt das bild variable
    const file = e.target.files[0];
    // setzt eine neue prop im state / val ist str
    setFormData({ ...formData, image: file.name });
    // mittels  Storage.put wird es hochgeladen
    await Storage.put(file.name, file);
    //nachdem hochladen wird fetchNotes invoked
  }


  async function createTodo() {
    // schaut nach ob die inputs leer sind
    // if (!formData.name || !formData.desc) return;
    //API.graphql fn-> mit einem parameter -> object mit query und variablen(also das was in den server geht)
    //query ist der type von event welches ausgeführt werden soll
    console.log("formData:");
    console.log(formData);

    var tmpObj100 = {
      name: "7",
      desc: ("{\"id\":10,\"vorname\":\"Erik\",\"nachname\":\"Leif\",\"timeDribbling\":[[33,\"25.10.2022\"],[31,\"20.10.2022\"],[28,\"15.10.2022\"],[20,\"10.10.2022\"],[12,\"05.10.2022\"]],\"timeKoordination\":[[33,\"25.10.2022\"],[31,\"20.10.2022\"],[28,\"15.10.2022\"],[20,\"10.10.2022\"],[12,\"05.10.2022\"]],\"valSchusskraft\":[[33,\"25.10.2022\"],[31,\"20.10.2022\"],[28,\"15.10.2022\"],[20,\"10.10.2022\"],[12,\"05.10.2022\"]],\"lastCamps\":[\"0098\",\"0092\",\"0091\"],\"ageCat\":\"A\",\"profileNote\":\"\",\"imageUrl\":\"\"}"),

    }
    await API.graphql({ query: createTodoMutation, variables: { input: formData } });

    //falls ein foto reingestellt wurden ist auch das bitte rein
    if (formData.image) {
      console.log(formData.image);
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
  }

  async function deleteTodo({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteTodoMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Spielerprofile</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'desc': e.target.value})}
        placeholder="Note desc"
        value={formData.desc}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createTodo}>Create Note</button>


      

      {
        notes.map(function(profile){
          return(<div>
                  <h2>{profile.id}</h2>
                  <p>{console.log(profile.desc)}</p>
                  <button onClick={() => deleteTodo(profile)}>Delete note</button>
                </div>);
        })
      }


    </div>
  );
}

export default App333;


