import profileManager from './profileManager.js';
import campManager from './campManager.js';
import { combineReducers } from 'redux';




var reduce = combineReducers({
	profileArr: profileManager, 
	campArr: campManager 
});



export default reduce;