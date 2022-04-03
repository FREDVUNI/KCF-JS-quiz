let combinedArray = [2,4,"q",6,8,10,3,"t",5,7,9,"e",11,"w","r",1,"y"]

let checkString = (theArray) =>{
    for ( let i=0; i< theArray.length; i++ ) {
        if (typeof theArray[i] != "string")
            return true;
    };
    return false;
}

let checkNumber = (theArray) =>{
    for ( let i=0; i< theArray.length; i++ ) {
        if (typeof theArray[i] != "number")
            return true;
    };
    return false;
}

function sortArray(arrayValues){
    const evens = arrayValues.filter(values => values % 2 === 0).sort((a,b)=>a-b)
    const odds = arrayValues.filter(values => values % 2 === 1).sort((a,b)=>a-b)
    const chars = arrayValues.filter(values => typeof values === "string").sort((a,b)=>a === b ? 0 : a < b ? 1 : -1)

    if(checkNumber(evens) || checkNumber(evens) || checkString(chars)){
        console.log('Invalid array values.')
    }

    const allValues = {evens,odds,chars}
    return allValues
}
console.log(sortArray(combinedArray))
sortArray(combinedArray)
