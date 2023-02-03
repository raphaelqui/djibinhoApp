
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
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation, updateTodo as updateTodoMutation } from './graphql/mutations';


import Interface from './components/Interface.js';







function Handler(props) {


	async function createTodo(obj, update = false) {
		console.log(obj);
    // hier wird ein profil für den Store erstellt, falls das dieses invoken dieser Funktion ein Update ist verhindere dieses erstellen:
    if(!update) {
      const imageUrl = await Storage.get(obj.image);
    	props.addProfile(obj.vorname, obj.nachname, obj.timeDribbling[0][0], obj.timeKoordination[0][0], obj.valSchusskraft[0][0],obj.ageCat ,obj.profileNote, imageUrl, obj.image);
    	obj.imageUrl = imageUrl;
    }

	  var tmpObj = {
	    name: obj.id, // setzte die korekte ID
	    desc: (JSON.stringify(obj)),
	  }
	  await API.graphql({ query: createTodoMutation, variables: { input: tmpObj } });
	}

	async function updatePro(graphqlId, obj){

		console.log(obj);
		var update = {
			id: graphqlId,
			desc: (JSON.stringify(obj)),
			name: "1",	
		}

		const updatedTodo = await API.graphql({ query: updateTodoMutation, variables: {input: update}});
		console.log(updatedTodo);
	}


	async function uploadFile(file) {
		// file = e.target.files[0];
	    await Storage.put(file.name, file);
	}

	async function deleteProfile(id) {
		
		console.log("--> "+id);
    await API.graphql({ query: deleteTodoMutation, variables: { input: { id } }});
  }

  console.log("profileArr:");
  console.log(props.profileArr);
	return (
		<div>
			<Interface propFns={{logout: props.propFn, updatePro: updatePro, createProfile: createTodo, uploadFile: uploadFile, deleteProfile: deleteProfile}}/>
		</div>
	)
}



var mapStateToProps = function(state){
  return{
    profileArr: state.profileArr,
    campArr: state.campArr
  }
}
var mapDispatchToProps = {  
  deleteProfile: deleteProfile,
  deleteValue: deleteValue,
  addProfile: addProfile,
  updateProfile: updateProfile
}
var HandlerContainer = connect(mapStateToProps, mapDispatchToProps)(Handler);
export default HandlerContainer;
