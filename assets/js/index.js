
function encryptWord(word) {
    const result = encrypt(word)
    return result
}

function hasVowels(word) {
    if (word.includes('a') | word.includes('e') |
        word.includes('i') | word.includes('o') |
        word.includes('u')) {
        return true
    }
    return false
}

function encrypt(word) {
    if (hasVowels(word)) {
        const splitWord = word.split('');
        const newWord = splitWord.map(letter => {
            if (letter == 'a') {
                return 'ai'
            }
            if (letter == 'e') {
                return 'enter'
            }
            if (letter == 'i') {
                return 'imes'
            }
            if (letter == 'o') {
                return 'ober'
            }
            if (letter == 'u') {
                return 'ufat'
            }
            return letter
        })
        return newWord.join('')
    }
    return word
}

// Test
const word1 = "gato"
const word2 = "manzana"
const word3 = "mnzn"
const word4 = "gátó"
console.log(encryptWord(word1))
console.log(encryptWord(word2))
console.log(encryptWord(word3))
console.log(encryptWord(word4))