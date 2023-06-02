// Get the required elements from the DOM
const commonWordForm = document.getElementById('common-word-form');
const textInput = document.getElementById('text-input');
const resultElement = document.getElementById('result');

// Function to find the most common word
function findMostCommonWord(event) {
    event.preventDefault();

    const text = textInput.value;
    const words = text.trim().split(/\s+/);
    const wordCounts = {};

    words.forEach(function (word) {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    let mostCommonWord = '';
    let maxCount = 0;

    for (const word in wordCounts) {
        if (wordCounts[word] > maxCount) {
            mostCommonWord = word;
            maxCount = wordCounts[word];
        }
    }

    resultElement.textContent = `Most Common Word: ${mostCommonWord} (${maxCount} occurrences)`;
}

