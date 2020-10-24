const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(text) {
    // write your solution here
    text = text.split(/\*\**/g);
    let result = ""
    text = text.map((x) => {
        x = x.match(/.{10}/g)
        for (let el of x) {
            el = el.replace(/11/g, "-");
            el = el.replace(/10/g, ".");
            el = el.replace(/0/g, "");
            result += MORSE_TABLE[el];
        }
        result += " ";
    })
    return result.trim();
}

module.exports = {
    decode
}