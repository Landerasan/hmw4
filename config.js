const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    apiKey: process.env.API_KEY ? process.env.API_KEY : 'e630dbf9ea0c21fee5b82156c889e497',
    apiUrl: process.env.API_URL ? process.env.API_URL : 'http://api.weatherstack.com',
}