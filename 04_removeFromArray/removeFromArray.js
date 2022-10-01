const removeFromArray = function(theArgsData, ...theArgsFind) {

    for (const arg of theArgsFind){
        if (
            theArgsData.indexOf(arg) > -1 && 
            arg === theArgsData[theArgsData.indexOf(arg)]){

            theArgsData.splice(theArgsData.indexOf(arg), 1);
        }
        else{continue}
    }    
    return theArgsData;
};

// Do not edit below this line
module.exports = removeFromArray;
