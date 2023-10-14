function reverseWords(sentence) {
    
    const words = sentence.split(' ');

    
    const reversedWords = words.map(word => {
        // Reverse the characters in each word
        const reversedWord = word.split('').reverse().join('');
        return reversedWord;
    });

    
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const prompt = require("prompt-sync")();
const inputSentence = prompt("Enter the string");
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);