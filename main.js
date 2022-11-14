#!/usr/bin/env node

const config = require('./config');
const app = require('./app');


const argv = require('yargs/yargs')(process.argv.slice(2))
    .alias('c', 'city')
    .describe('i', 'choose your city')
    .choices('i', ['Москва', 'Сибирь', 'Тагил', 'Анапа'])
    .help('help')
    .argv

async function init(config, city) {
    app(config.apiKey, config.apiUrl, city);
}

if (!argv.city) {
    console.log("Пример: weather -c Москва");
}

init(config, argv.city);