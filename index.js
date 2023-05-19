function writeCards(names, message) {
    const messages = [];
    for (let counter = 0; counter < names.length; counter++) {
        messages.push(`Thank you, ${names[counter]}, for the wonderful ${message} gift!`);
    }
    return messages;
}

function countDown(number) {
    /*for (let num = number; num >= 0; num--) {
        console.log(num);
    }*/
    let num = number;
    while(num >= 0) {
        console.log(num)
        num--
    }
}

