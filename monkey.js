for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 1 === 0) {
        console.log(currentNumber)
    }  if (currentNumber % 5 === 0) {
        console.log("chicken")
    }  if (currentNumber % 7 === 0) {
        console.log("monkey")
    }  if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chickenMonkey")
    } 
}
    


// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     if (currentNumber % 5 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     if (currentNumber % 7 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }







