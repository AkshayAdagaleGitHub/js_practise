function decryptMessage(encryptedMessage) {
  let decryptedMessage = '';
  let previousAsciiCode = encryptedMessage.charCodeAt(0);

  decryptedMessage +=  String.fromCharCode(encryptedMessage.charCodeAt(0) - 1);

  for (let i = 1; i < encryptedMessage.length; i++) {
    let currentAsciiCode = encryptedMessage.charCodeAt(i);
    let difference = currentAsciiCode - previousAsciiCode;
    while (difference < 97) {
      difference+=26;
    }
    decryptedMessage += String.fromCharCode(difference);
    previousAsciiCode = currentAsciiCode;
  }
  return decryptedMessage;
}

console.log(decryptMessage("dnotq"))