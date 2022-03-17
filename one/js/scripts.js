function fizzBuzz(firstname,lastname){
    let name = `${firstname}${lastname}`
    if(typeof firstname === 'string' && typeof lastname === 'string'){
        let nameLength = name.length
        // console.log(nameLength)
        if(nameLength % 3 === 0 && nameLength % 5 === 0){
            // alert("FizzBuzz")
            return "FizzBuzz";
        }else if(nameLength % 3 === 0){
            // alert("Fizz")
            return "Fizz";
        }else if(nameLength % 5 === 0){
            // alert("Buzz")
            return "Buzz";
        }else{
            // alert("The length is not divisible by any of the provided values.")
            return "The length is not divisible by any of the provided values."
        }
    }else{
        alert("use string values.")
        return "use string values."
    }
}

fizzBuzz("Fred","44")