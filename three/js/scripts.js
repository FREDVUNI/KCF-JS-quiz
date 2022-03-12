let someArray = [3.0,'a',7,'x','20','d',4,'f',8]

function someFunction(someArray){
    console.log(someArray)
    return someArray
}
someFunction({
    evens:[someArray[6],someArray[8],someArray[4]],
    odds:[someArray[0],someArray[2]],
    chars:[someArray[1],someArray[5],someArray[7],someArray[3]],
})