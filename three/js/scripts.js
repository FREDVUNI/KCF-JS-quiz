let arrayEven = [2,4,6,8,10]
let arrayOdd = [1,3,5,7,9]
let arrayChar =['q','w','e','r','t','y']

// let checkString = (theArray) =>{
//     for ( let i=0; i< theArray.length; i++ ) {
//         if (typeof theArray[i] != "string")
//             return false;
//     };
//     return true;
// }

// let checkNumber = (theArray) =>{
//     for ( let i=0; i< theArray.length; i++ ) {
//         if (typeof theArray[i] != "number")
//             return false;
//     };
//     return true;
// }

// if(checkNumber(arrayEven) || checkNumber(arrayOdd) || checkString(arrayChar)) console.log('Invalid array values.')

let someArray =[
    {evens:arrayEven,odds:arrayOdd,chars:arrayChar}
]
function someFunction(someArray){
    for(let i = 0; i < someArray.length; i++ ){
        console.log(someArray[i])
        return someArray[i]
    }
}
someFunction(someArray)