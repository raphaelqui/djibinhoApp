


/*


var initialState = [
	{
		id: 1,
		vorname: 'Niklas',
		nachname: 'Classen',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 2,
		vorname: 'Niklas',
		nachname: 'Classen',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 3,
		vorname: 'Niklas',
		nachname: 'Classen',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 4,
		vorname: 'Niklas',
		nachname: 'Classen',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 5,
		vorname: 'Silva',
		nachname: 'Bladi',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 6,
		vorname: 'Anastasia',
		nachname: 'Wolf',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 7,
		vorname: 'Piusch',
		nachname: 'Lund',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 8,
		vorname: 'Ischant',
		nachname: 'Rooprail',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 9,
		vorname: 'Luisa',
		nachname: 'Neumann',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 10,
		vorname: 'Erik',
		nachname: 'Leif',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 11,
		vorname: 'Djibril',
		nachname: 'Sylla',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},
	{
		id: 12,
		vorname: 'Raphael',
		nachname: 'Quinto',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
	},


];


*/

//fill initialState
import { API, Storage } from 'aws-amplify';

import { createTodo, updateTodo, deleteTodo } from '../graphql/mutations';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from '../graphql/mutations';

import { listTodos } from '../graphql/queries'; // listTodos ist meine Query um die JSON-Datei abzurufen! 



/*
		id: 10,
		vorname: 'Erik',
		nachname: 'Leif',
		timeDribbling: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		timeKoordination: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		valSchusskraft: [[33, "25.10.2022"], [31, "20.10.2022"], [28, "15.10.2022"], [20, "10.10.2022"], [12, "05.10.2022"]],
		lastCamps: ["0098", "0092", "0091"],
		ageCat: "A",
		profileNote: "",
		imageUrl: "",
*/

//name -> parseFloat(name) -> ID(int/number)
//desc -> JSON.parse(desc) -> profileObj(object)

var initialState = [];
function objectHander(arr) {
	for(var i = 0, id, tmpObj, profileObj; i < arr.length; i++){
		id = arr[i].name; // id des Spielers
		tmpObj = arr[i].desc;
		profileObj = JSON.parse(tmpObj);
		initialState.push(profileObj);
	}
	console.log(initialState);
}






function profileManager(state = initialState, action){

	//=============================================================== ADD_PLAYERPROFILE	
	if(action.type === "BUILD_PROFILES"){
		return action.content;

	//=============================================================== ADD_PLAYERPROFILE	
	} else if(action.type === "ADD_PROFILE"){
		//search biggest key
		for(var i = 0, biggestKey = 0; i<state.length; i++){
			if(state[i].id > biggestKey){
				biggestKey = state[i].id;
			}
		}	

		var actualDate = new Date();
	    var dateStr = actualDate.getDate();
	    if((dateStr+"").length == 1){
	      dateStr = "0"+dateStr;
	    }
	    var monthStr = (actualDate.getMonth()+1);
	    if((monthStr+"").length == 1){
	      monthStr = "0"+monthStr;
	    }

	    var actualDateStr = dateStr+"."+monthStr+"."+actualDate.getFullYear(); 
		return [].concat([
							{
								id: biggestKey+1, 
								vorname: action.content.vorname,
								nachname: action.content.nachname,
								timeDribbling: [[action.content.timeDribbling, actualDateStr]],
								timeKoordination: [[action.content.timeKoordination, actualDateStr]],
								valSchusskraft: [[action.content.valSchusskraft, actualDateStr]],
								lastCamps: ["0008", "0001", "0003"],
								ageCat: action.content.ageCat,
								profileNote: action.content.profileNote,
								imageUrl: action.content.imageUrl,
								image: action.content.image
							}
			 			 ], state);

	//=============================================================== DELETE_PLAYERPROFILE	
	} else if(action.type === "DELETE_PLAYERPROFILE"){
		//search for the key supplied as parameter 
		var tmpArr = state;
		for(var i = 0; i < tmpArr.length; i++){
			if(tmpArr[i].id == action.pid){
				tmpArr.splice(i, 1);
				break;
			}
		}	

		return tmpArr;

	//=============================================================== DELETE_VALUE
	} else if(action.type === "DELETE_VALUE"){
		//search for the key supplied as parameter 
		var tmpArr = state;
		for(var i = 0; i < tmpArr.length; i++){
			if(tmpArr[i].id == action.pid){
				//das Profil wurde gefunden nun wird der value im bestimmten array gesucht
				var propStr
				switch(action.propStr){
					case "Dribbling":
						propStr = "timeDribbling";
						break;
					case "Koordination":
						propStr = "timeKoordination";
						break;
					case "Schusskraft":
						propStr = "valSchusskraft";
						break;
				}

				tmpArr[i][propStr].splice(action.keyNum, 1);



				break;
			}
		}	

		return tmpArr;

	//=============================================================== UPDATE_PROFILE
	} else if(action.type === "UPDATE_PROFILE"){


		//search for the key supplied as parameter 

		var tmpArr = state;
		for(var i = 0; i < tmpArr.length; i++){
			if(tmpArr[i].id == action.content.pid){
				//das Profil wurde gefunden 
				
				tmpArr[i].vorname = action.content.vorname;
				tmpArr[i].nachname = action.content.nachname;

				if(!isNaN(action.content.timeDribbling[0])){
					tmpArr[i].timeDribbling.push(action.content.timeDribbling);
				}
				if(!isNaN(action.content.timeKoordination[0])){
					tmpArr[i].timeKoordination.push(action.content.timeKoordination);
				}
				if(!isNaN(action.content.valSchusskraft[0])){
					tmpArr[i].valSchusskraft.push(action.content.valSchusskraft);
				}
				tmpArr[i].ageCat = action.content.ageCat;
				tmpArr[i].profileNote = action.content.profileNote;
				// die props imageUrl und image bleiben gleich
				break;
			}
		}	
		return tmpArr;



	// =============================================================== *DEFAULT_RETURN*
	} else {

		return state;
	}
}
export default profileManager;	