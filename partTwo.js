//Problem 1 - Sum Zero
let array = [6, 0, 4, -6, 18, 10, 5]

let value = "False"
for (let i=0; i < array.length; i++) {
    for (let j=0; j < array.length; j++) {
        if (i !== j) {
            if (array[i] + array[j] === 0){
                value = "True"
            }
        }
    }
}
console.log(value)


//Problem 2 - Unique Characters
function hasUniqueChars(word) {
    let uniqueChars = new Set ([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars("Mmonday"))


//Problem 3 - Pangram Sentence
function isPangram(string) {
let stringArr = string.toLowerCase()
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
for (let i = 0; i < alphabet.length; i++) {
    if (stringArr.indexOf(alphabet[i]) < 0) {
        return false
    }
}
return true
}

console.log(isPangram("the quick brown fox jumps over the lazy dog"))



//Problem 4 - Longest Word
function findLongestWord(string) {
    let words = string.split(" ")
    let maxLength = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length
        }
    }
    return maxLength
}

console.log(findLongestWord("hi hello"))
