export default function(arr) {
	let tempMinusOneArray = [];

	for(let i=0; i<arr.length; i++){
		if(arr[i] == -1){
			tempMinusOneArray.push(i); //gets '-1' indices and pushes them into temporary array
		} 
	}

	arr = arr.filter((elem) => {  if (elem !== -1) return elem; }); //removes '-1' from array
	
	arr = arr.sort((a,b) => a - b); 

	for(let i=0; i<tempMinusOneArray.length; i++){
		arr.splice(tempMinusOneArray[i], 0, -1); //pushes '-1' to its original position
	}

	return arr;
}