class MorseJS{
	static charCode = {
		'a' : '.-',
		'b' : '-...',
		'c' : '-.-.',
		'd' : '-..',
		'e' : '.',
		'f' : '..-.',
		'g' : '--.',
		'h' : '....',
		'i' : '..',
		'j' : '.---',
		'k' : '-.-',
		'l' : '.-..',
		'm' : '--',
		'n' : '-.',
		'o' : '---',
		'p' : '.--.',
		'q' : '--.-',
		'r' : '.-.',
		's' : '...',
		't' : '-',
		'u' : '..-',
		'v' : '...-',
		'w' : '.--',
		'x' : '-..-',
		'y' : '-.--',
		'z' : '--..',
		'1' : '.----',
		'2' : '..---',
		'3' : '...--',
		'4' : '....-',
		'5' : '.....',
		'6' : '-....',
		'7' : '--...',
		'8' : '---..',
		'9' : '----.',
		'0' : '-----'
	}

	static crypt(message){
		let cryptedMessage = '';

		for(let char in message){
			let n = MorseJS.charCode[message[char].toLowerCase()];

			if(n != null || n == ' '){
				if(options.dashed && char > 0){
					cryptedMessage += '-';
				}

				cryptedMessage += parseInt(n) + options.offset;
			}
		}

		return cryptedMessage;
	}

	static parse(cryptedMessage){
		let parsedMessage = '';

		for(let i = 0; i < cryptedMessage.length; i+=2){
			let code = parseInt(cryptedMessage.substr(i, 2)) - options.offset + "";

			parsedMessage += PhoneCrypter.getCharFromCode(code);
		}

		return parsedMessage;
	}

	static getCharFromCode(code){
		return Object.keys(PhoneCrypter.charCode).find(key => PhoneCrypter.charCode[key] === code);
	}
}