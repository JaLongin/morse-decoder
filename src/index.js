const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let symbolsNums = [];
    for (let i = 0; i < (expr.length / 10); i++){
        symbolsNums.push(expr.slice(i * 10, (i + 1) * 10 ));
    }
    let symbols = new Array(symbolsNums.length);
    let matRat;
    symbolsNums.forEach((item, index) => {
        if (item == '**********'){
            symbols[index] = ' ';
        }
        else {
            matRat = item.split('');
            matRat = matRat.reverse();
            while(matRat.at(-1) == '0')
                matRat.pop();
            matRat = matRat.reverse();
            matRat = matRat.join('');
            matRat = matRat.replaceAll('11','-');
            matRat = matRat.replaceAll('10', '.');
            symbols[index] = MORSE_TABLE[matRat];
        }
    });
    return symbols.join('');;
}

module.exports = {
    decode
}