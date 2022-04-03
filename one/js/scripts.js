function fizzBuzz(firstname,lastname){
    let name = `${firstname}${lastname}`
    if(typeof firstname === 'string' && typeof lastname === 'string'){
        let nameLength = name.length
        // console.log(nameLength)
        if(nameLength % 3 === 0 && nameLength % 5 === 0){
            console.log("FizzBuzz")
            return "FizzBuzz";
        }else if(nameLength % 3 === 0){
            console.log("Fizz")
            return "Fizz";
        }else if(nameLength % 5 === 0){
            console.log("Buzz")
            return "Buzz";
        }else{
            console.log("The length is not divisible by any of the provided values.")
            return "The length is not divisible by any of the provided values."
        }
    }else{
        alert("use string values.")
        return "use string values."
    }
}
fizzBuzz("Fred","Vuni")