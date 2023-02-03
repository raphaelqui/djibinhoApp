export function incrementCounter(){
	return {type: "INCREMENT"};
}


export function addProfile(vornameStr, nachnameStr, timeDribblingNum, timeKoordinationNum, valSchusskraftNum, ageCatStr, profileNoteStr, imageUrlStr, imageStr){
	return {type: "ADD_PROFILE", content: {
		vorname: vornameStr,
		nachname: nachnameStr,
		timeDribbling: timeDribblingNum,
		timeKoordination: timeKoordinationNum,
		valSchusskraft: valSchusskraftNum,
		ageCat: ageCatStr,
		profileNote: profileNoteStr,
		imageUrl: imageUrlStr,
		image: imageStr,
	}};
}


export function updateProfile(pid, vornameStr, nachnameStr, timeDribblingArr, timeKoordinationArr, valSchusskraftArr){
	return {type: "UPDATE_PROFILE", content: {
		pid: pid,
		vorname: vornameStr,
		nachname: nachnameStr,
		timeDribbling: timeDribblingArr,
		timeKoordination: timeKoordinationArr,
		valSchusskraft: valSchusskraftArr,
		// ageCat: keep the old,
		// profileNote: keep the old,
		// imageUrl: keep the old,
		// image: keep the old,
	}};
}

export function buildProfileArr(arr) {
	return {type: "BUILD_PROFILES", content: arr}
}





export function deleteProfile(pid){
	return {type: "DELETE_PLAYERPROFILE", pid: pid};
}
export function deleteValue(pid, propStr, keyNum){
	return {type: "DELETE_VALUE", pid: pid, propStr: propStr, keyNum: keyNum};
}





export function deleteCamp(cid){
	return {type: "DELETE_CAMP", cid: cid};
}
export function addCamp(contentObj){
	return {type: "ADD_CAMP", content: contentObj};
}
		