
var initialState = [
	{
        id: 1,
        name: 'Juni Camp 2022',
        ort: 'Rheinbach',
        startDate: 20220706,
        endDate: 20220709,
  	},
  	{
        id: 2,
        name: 'Juli Camp 2022',
        ort: 'Köln',
        startDate: 20220624,
        endDate: 20220628,
  	},
  	{
        id: 3,
        name: 'August Camp 1',
        ort: 'Bonn',
        startDate: 20220614,
        endDate: 20220618,
  	},
  	{
        id: 4,
        name: 'Juni Camp 2022',
        ort: 'Rheinbach',
        startDate: 20220605,
        endDate: 20220609,
  	},
  	{
        id: 5,
        name: 'Juli Camp 2022',
        ort: 'Köln',
        startDate: 20220524,
        endDate: 20220529,
  	},
  	{
        id: 6,
        name: 'Camp Erft01 2022',
        ort: 'Duisdorf',
        startDate: 20220912,
        endDate: 20220918,
  	},
  	{
        id: 7,
        name: 'Sommer Camp 2022',
        ort: 'Düsseldorf',
        startDate: 20220925,
        endDate: 20221005,
  	},
  	{
        id: 8,
        name: 'August Camp 1',
        ort: 'Bonn',
        startDate: 20220715,
        endDate: 20220720,
  	},
  	{
        id: 9,
        name: 'August Camp 2',
        ort: 'Troisdorf',
        startDate: 20220825,
        endDate: 20220903,
  	},
	{
        id: 10,
        name: 'August Camp 1',
        ort: 'Bonn',
        startDate: 20220815,
        endDate: 20220820,
  	},
  	{
        id: 11,
        name: 'Juni Camp 2022',
        ort: 'Rheinbach',
        startDate: 20220803,
        endDate: 20220808,
  	},
  	{
        id: 12,
        name: 'Juli Camp 2022',
        ort: 'Köln',
        startDate: 20220724,
        endDate: 20220728,
  	},

];


function campManager(state = initialState, action){

	//=============================================================== ADD_PLAYERPROFILE	
	if(action.type === "ADD_CAMP"){
		//search biggest key
		for(var i = 0, biggestKey = 0; i<state.length; i++){
			if(state[i].id > biggestKey){
				biggestKey = state[i].id;
			}
		}	    
        
		return [].concat([
							{
								id: biggestKey+1, 
                                name: action.content.camp,
                                ort: action.content.ort,
                                adresse: action.content.adresse,
                                startDate: action.content.startDate,
                                endDate: action.content.endDate,
                                ansprechpartner1: action.content.ansprechpartner1,
                                ansprechpartner2: action.content.ansprechpartner2,
                                campNotes: action.content.campNotes,
                                assignedTrainer: action.content.assignedTrainer,
							}
			 			 ], state);

	//=============================================================== DELETE_PLAYERPROFILE	
	} else if (action.type === "DELETE_CAMP"){
        var tmpArr = state;
        for(var i = 0; i < tmpArr.length; i++){
            if(tmpArr[i].id == action.cid){
                tmpArr.splice(i, 1);
                break;
            }
        }   

		return state;
	//=============================================================== *DEFAULT_RETURN*
	} else {
		return state;
	}
}
export default campManager;	