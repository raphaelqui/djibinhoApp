import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'; 

import { deleteProfile } from './actions/index.js';
import { deleteValue } from './actions/index.js';
import { addProfile } from './actions/index.js';
import { updateProfile } from './actions/index.js';

import { buildProfileArr } from './actions/index.js';

import { API, Storage } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from './graphql/mutations';







function Load(props) {


  useEffect(() => {
    fetchNotes();
  }, []);


  async function fetchNotes() {

    const apiData = await API.graphql({ query: listTodos });
    const todosFromAPI = apiData.data.listTodos.items;
    /*
    await Promise.all(todosFromAPI.map(async note => {
      if (note.image) {
        const image = await Storage.get(note.image);
        note.image = image;
      }
      return note;
    }));
    */
    


    var arr = apiData.data.listTodos.items;
    var initialState = [];
    for(var i = 0, id, tmpObj, profileObj; i < arr.length; i++){
      id = arr[i].name; // id des Spielers
      tmpObj = arr[i].desc;
      profileObj = JSON.parse(tmpObj);
      profileObj.graphId = arr[i].id;
      initialState.push(profileObj);
      
    }
    props.buildProfileArr(initialState);
  }



}



var mapStateToProps = function(state){
  return{
    profileArr: state.profileArr,
    campArr: state.campArr
  }
}
var mapDispatchToProps = {  
  buildProfileArr: buildProfileArr,

  deleteProfile: deleteProfile,
  deleteValue: deleteValue,
  addProfile: addProfile,
  updateProfile: updateProfile
}


var LoadContainer = connect(mapStateToProps, mapDispatchToProps)(Load);
export default LoadContainer;
