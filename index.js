const readline = require('readline-sync');

const hours = Number(readline.question('Enter hours: '));

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;

const totalSeconds = Math.floor(hours * SECONDS_PER_HOUR);
const wholeHours = Math.floor(totalSeconds / SECONDS_PER_HOUR);
const minutes = Math.floor((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
const seconds = totalSeconds % SECONDS_PER_MINUTE;

const inputUnit = hours === 1 ? 'hour' : 'hours';
const hoursUnit = wholeHours === 1 ? 'hour' : 'hours';
const minutesUnit = minutes === 1 ? 'minute' : 'minutes';
const secondsUnit = seconds === 1 ? 'second' : 'seconds';

console.log(`\n${hours} ${inputUnit} is ${wholeHours} ${hoursUnit}, ${minutes} ${minutesUnit}, and ${seconds} ${secondsUnit}.`);
