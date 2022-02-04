![](https://www.psdstamps.com/wp-content/uploads/2019/11/grunge-censored-label-png-768x512.png)

# Finds and Censors badwords from the given string.
### Features

- Add/Remove words.
- Set of default words available.
- Get word Cencored output..
- Compatible with NodeJS, Javascript, Typescript, HTML etc....
- Censors words from the string given.
- Full Support and frequent bug fixes.
- Supported Languages (English), More coming soon!



## Installation
-------------
`npm install censor-badwords`
-------------


# Usage


#### Check if the String has a bad word.
```js
const badwords = require('censor-badwords');

let message = 'Hi Leon, how are you?'

let hasBadwords = badwords.hasbadwords(message)

if (hasBadwords) {
    console.log('Yes, the message has bad words')
} else {
    console.log('No, the message does not have a bad words')
}
```

#### Censor bad-words from the message
```js
const badwords = require('censor-badwords');

let message = 'hi Leon, Wanna have a drink?' //Suppose "drink" is a bad word.

let censoredMessage = badwords.censorMsg(message)

console.log(censoredMessage) //Output will be "hi Leon, Wanna have a ****?"
```

#### Add a bad word
```js
const badwords = require('censor-badwords');

badwords.addbadword('leon')
```

#### Remove a bad word
```js
const badwords = require('censor-badwords');

badwords.removebadword('leon')
```
#### List all bad words in the list
```js
const badwords = require('censor-badwords');

let bardwordsList = badwords.getbadwords()
console.log(bardwordsList)
```
#### Remove all bad words from the list
```js
const badwords = require('censor-badwords');

badwords.emptybadwords()
```
#### Add default bad words to the list
```js
const badwords = require('censor-badwords');

badwords.setdefaultbadwords()
```

### **Note**
### Alternatively, you can directly edit the file `bad-words.json` in the root directory of the project.


------------------------------


###Usefull Links



`Github`: [Click Here](https://github.com/D3OXY)
`Report Issue`: [Click Here](https://github.com/D3OXY/censor-badwords/issues)

<a href="https://www.buymeacoffee.com/deoxy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
<a href="https://github.com/D3OXY" target="_blank"><img src="https://w7.pngwing.com/pngs/711/176/png-transparent-github-inc-repository-source-code-github-mammal-cat-like-mammal-carnivoran-thumbnail.png" alt="Buy Me A Coffee" height="41" width="40"></a>
---------------
### The End
