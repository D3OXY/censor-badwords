const badwords = require('censor-badwords');

//Censor the bad words
let message = 'hi Leon, Wanna have a drink?' //Suppose "drink" is a bad word.
let censoredMessage = badwords.censorMsg(message)
console.log(censoredMessage) //Output will be "hi Leon, Wanna have a ****?"

//Add a bad word
badwords.addbadword('leon')

//Remove a bad word
badwords.removebadword('drink')

//Checks if a word is a bad word or not
let message = 'Hi Leon, how are you?'
let hasBadwords = badwords.hasbadwords(message)
if (hasBadwords) {
    console.log('Yes, the message has bad words')
} else {
    console.log('No, the message does not have a bad words')
}

//Lists all the bad words
let bardwordsList = badwords.getbadwords()
console.log(bardwordsList)

//Clears the Badwords list
badwords.emptybadwords()

//Resets the badword list to Default
badwords.setdefaultbadwords()