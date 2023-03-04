'use strict'

//THE this Keyword

//In a global scope
const globalScope = this
console.log(globalScope)

//A regular function call
const calcAge = function (birthYear) {
    console.log(2023 - birthYear)
    const functionCall = this
    console.log(functionCall)
}

calcAge(1998)

//In an arrow function
const calcAge2 = (birthYear) => {
    console.log(2023 - birthYear)
    const arrFunction = this
    console.log(arrFunction)
}

calcAge2(1997)

//In a method
const erick = {
    name: 'Erick',
    birthYear: 1998,
    calcAge: function (currentYear) {
        const age = currentYear - this.birthYear
        console.log(age)
        console.log(this)
        return age
    }
}

erick.calcAge(2023)

const clifford = {
    birthYear: 1995
}

clifford.calcAge = erick.calcAge
// The above code is possible because a function is just a value (method borrowing)
console.log(clifford)
clifford.calcAge(2023)