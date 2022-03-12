function fizzBuzz(firstname,lastname){
    let name = `${firstname}${lastname}`
    let nameLength = name.length
    console.log(nameLength)
    if(nameLength % 3 === 0){
        alert("Fizz")
        console.log("Fizz")
    }else if(nameLength % 5 === 0){
        alert("Buzz")
        console.log("Buzz")
    }else if(nameLength % 3 === 0 && nameLength % 5 === 0){
        alert("FizzBuzz")
        console.log("FizzBuzz")
    }else{
        console.log("The length is not divisible by any of the provided values.")
        return "The length is not divisible by any of the provided values."
    }
}

fizzBuzz("Fred","vunivunivunivuni")