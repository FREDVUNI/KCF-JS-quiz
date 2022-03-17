let birthYear = prompt("Enter your birth year")
let currentYear = new Date().getFullYear()

if(birthYear > currentYear){
    console.log('Invalid birth year.')
}else{
    let difference = currentYear - birthYear

    console.log(difference)

    if(difference < 18){
        console.log(`This user is a minor. Age: ${difference}`)
    }else if(difference >= 18 && difference < 36){
        console.log(`This user is a youth. Age: ${difference}`)
    }else{
        console.log(`This user is an elder. Age: ${difference}`)
    }
}
