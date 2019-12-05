function plusMinus(arr) {
    const length = arr.length 
    let positive = 0, negative = 0, zero = 0
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) zero++
        if (Math.sign(arr[i]) === 1) positive++
        if (Math.sign(arr[i]) === -1) negative++
    }
    
    const posDec = (positive/length).toFixed(6),
        negDec = (negative/length).toFixed(6),
        zeroDec = (zero/length).toFixed(6)

    return (
        [posDec, negDec, zeroDec]
    )
}

console.log(plusMinus([-4, 3, - 9, 0, 4, 1  ]))