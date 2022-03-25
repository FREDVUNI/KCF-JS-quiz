let arrayEven = [2,4,6,8,10]
let arrayOdd = [1,3,5,7,9,11]
let arrayChar =['q','w','e','r','t','y']

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

let someArray =[
    {evens:arrayEven,odds:arrayOdd,chars:arrayChar}
]
function someFunction(someArray){
    for(let i = 0; i < someArray.length; i++ ){
        console.log(someArray[i])
        return someArray[i]
    }
}
if(checkNumber(arrayEven) || checkNumber(arrayOdd) || checkString(arrayChar)){
    console.log('Invalid array values.')
}else{
    someFunction(someArray)
}
