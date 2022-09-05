const reverseString = function(entry) {
    const initialText = Array.from(entry);
    let finalText = [];
    let chars = initialText.length;

    for (let i = 0; i < chars; i++) {
        character = initialText.pop();
        finalText.push(character);
    }

    return finalText.join("");
};

// Do not edit below this line
module.exports = reverseString;
