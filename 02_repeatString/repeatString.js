const repeatString = function(text, times) {
    let fullText = text;
    let result;

    if (times < 0) {result = ("ERROR")}
        else if (times === 0) {result = ""}
        else{
            for (let i = 1; i < times; i++) {
                fullText += `${text}`;
            }
            result = `${fullText}`;
            };
            
    return result;
};

// Do not edit below this line
module.exports = repeatString;
