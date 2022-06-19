let userInput = document.getElementById('userInput').value

checkPalindrome = (str) => {
    const strLength = userInput.length
    for (let i = 0; i < strLength / 2; i++) {
        if (userInput[i] !== userInput[strLength - 1 - i]) {
            document.getElementById('answer').innerHTML = 'This is not a palindrome'
        }
        else (
            document.getElementById('answer').innerHTML = 'It is a palindrome'
        )
    }
}
checkPalindrome(userInput)