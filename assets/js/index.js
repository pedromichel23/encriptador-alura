const textAreaInput = document.querySelector(".text-input")
const btnEncrypt = document.querySelector(".btn-encrypt")
const btnDecrypt = document.querySelector(".btn-decrypt")
const btnCopyToClipboard = document.querySelector(".btn-text-copy")
const txtResult = document.querySelector(".text-result")
const txtInstructions = document.querySelector(".text-instructions")

btnEncrypt.addEventListener('click', () => {
    const input = textAreaInput.value.trim()
    const result = encryptText(input)
    txtResult.textContent = result
    txtResult.style.fontWeight = 'normal'
    txtResult.style.textAlign = 'left'
    txtInstructions.style.display = 'none'
    btnCopyToClipboard.classList.remove('hide')
})

btnCopyToClipboard.addEventListener('click',  () => {
    const text = txtResult.textContent
    navigator.clipboard.writeText(text)
    .then( () => {
        navigator.clipboard.readText()
        .then((clipBoard) => {
            console.log('clipboard:', clipBoard)
            alert("Texto copiado: " + clipBoard)
        })
        // alert("Texto copiado")
    })
    // alert('Texto copiado al portapapeles.')
    // console.log('Clipboard: ', navigator.clipboard.readText())
})

function encryptText(text) {
    const words = text.split(' ')
    const result = words.map(word => encrypt(word))
    return result.join(' ')
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
// console.log(encrypt(word1))
// console.log(encrypt(word2))
// console.log(encrypt(word3))
// console.log(encrypt(word4))