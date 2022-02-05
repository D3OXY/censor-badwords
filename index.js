var badwords = require('./bad-words.json');
var fs = require('fs');

function censorMsg(msg) {
    let hasBadWords = false
    msg = msg.toLowerCase()
    for (let i = 0; i < badwords.length; i++) {
        if (msg.includes(badwords[i])) {
            hasBadWords = true
        }
    }
    if (hasBadWords) {
        for (let i = 0; i < badwords.length; i++) {
            msg = msg.replace(badwords[i], "****")
        }
        return msg;
    }else{
        return msg;
    }
}

function hasbadwords(msg){
    msg = msg.toLowerCase()
    let hasBadWords = false
    for (let i = 0; i < badwords.length; i++) {
        if (msg.includes(badwords[i])) {
            hasBadWords = true
        }
    }
    if (hasBadWords) {
        return true
    } else return false;
}

function addbadword(word){
    if(Array.isArray(word)){
        return console.log('Adding words using a array is not yet implemented!\nUse "addbadword(\'word\')" instead.\nOr alternatively, you can edit the bad-words.json file directly.')
    }
    else{
        word = word.toLowerCase()
        if(badwords.includes(word)){
            console.log(`${word} is already in badwords`)
        }else{
        badwords.push(word)
        fs.writeFile('./bad-words.json', JSON.stringify(badwords), function (err) {
            if (err) throw err;
        });
        }
    }
}

function removebadword(word){
    if(Array.isArray(word)){
        return console.log('Removing words using a array is not yet implemented!\nUse "removebadword(\'word\')" instead.\nOr alternatively, you can edit the bad-words.json file directly.')
    }
    else{
        word = word.toLowerCase()
        if(badwords.includes(word)){
            return console.log(`${word} is not there in badwords, so it cannot be removed`)
        }else{
        let index = badwords.indexOf(word);
        if (index > -1) {
            badwords.splice(index, 1);
            fs.writeFile('./bad-words.json', JSON.stringify(badwords), function (err) {
                if (err) throw err;
            });
        }
        }
    }

}

function getbadwords(){
    return badwords
}

function emptybadwords(){
    badwords = []
    fs.writeFile('./bad-words.json', JSON.stringify(badwords), function (err) {
        if (err) throw err;
        console.log('badwords emptied!')
    });
}

function setdefaultbadwords(){
    badwords = ["bitch","fuck","shit","cunt","nigga","nigger","n i g g e r","f u c k","cock","pussy","dick","cum","cumshot","blowjob","n i g g a","anal","anus","b1tch","kaztro","thot","asshole","slut","exotic","deepthroat"]
    fs.writeFile('./bad-words.json', JSON.stringify(badwords), function (err) {
        if (err) throw err;
        console.log('Added all default bad words!')
    });
}

module.exports = {
    censorMsg,
    hasbadwords,
    addbadword,
    removebadword,
    getbadwords,
    emptybadwords,
    setdefaultbadwords
}