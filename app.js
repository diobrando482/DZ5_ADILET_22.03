//первое задание
function reverseString(string){
    let reversedString = ''
    for(let i = string.length - 1;i> 0;i--){
        reversedString +=string[i]
    }return reversedString
}

console.log(reverseString(' любое слово'))
//второе задание
function middleNumber(numbers){
    let stringed = String(numbers)
    let sum = 0
    for(let i  =0;i< stringed.length;i++){
        sum += +stringed[i]
    }
    return sum / stringed.length
}

console.log(middleNumber(12,323,123,31,1,))