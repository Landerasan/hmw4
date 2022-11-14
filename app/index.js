const url = require('url');
const weatherstack = require('./service/weatherstack.service');


module.exports = (apiKey, apiUrl, city, lang) => {
    let url = new URL(apiUrl);

    url.pathname = 'current';
url.searchParams.set('access_key', apiKey);
    url.searchParams.set('query', city);

    weatherstack(url);
};