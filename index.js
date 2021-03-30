
const names = ['Ada', 'Brendan', 'Ali'];

const event = "birthday";

const messages = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    console.log(messages);
    return messages;
}

function countDown(number) {
    let i = 0;
    while (number >= 0) {
        i++;
        console.log(number);
        number--;
    }
    return i;
}
console.log(countDown(10));
console.log(countDown(4));