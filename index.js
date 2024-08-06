const numbers = [10, 13, 20, 25, 38, 35, 40];
//
const biggerThan25 = numbers.filter(num=> num > 25)
const divBy5 = numbers.filter(num=> num%5 == 0)
//
const squaredNums = numbers.map(num=> num*num)
const doubledNums = numbers.map(num=> num*2)
//
const squareBiggerThan25 = biggerThan25.map(num=>num*num)
const tripleDivBy5 = divBy5.map(num=>num*3)
//
function logger(arr = []){
    arr.forEach(item=> console.log(item))
}

function toCelsius(temps){
    return temps.map(temp=>{
        return ((temp-32) * (5/9)).toFixed(2)
    })
}   

function hottestDays(temps = [], threshold){
    const thresholdCelsius = toCelsius([threshold]) // [thresold]
    const tempsCelsius = toCelsius(temps)
    const hottestDays = tempsCelsius.filter(temp=> temp > thresholdCelsius)
    console.log(hottestDays)
}
hottestDays([100, 50, 150], 90)