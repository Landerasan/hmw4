const http = require('http');

module.exports = (url) => {

    http.get(url, (res) => {

        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
            error = new Error('Invalid content-type.\n' +
                `Expected application/json but received ${contentType}`);
        }

        if (error) {
            console.error(error.message);
            res.resume();
            return;
        }

        res.setEncoding('utf8');

        let rawData = '';

        res.on('data', (chunk) => { rawData += chunk; });

        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                const result = `\n\n\n\n(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ \n\nГород: ${parsedData.location.name} \nСтарана: ${parsedData.location.country} \nТемпература: ${parsedData.current.temperature} градусов \n\n\n\n\n`;
                console.log(result);
            } catch (e) {
                console.error(e.message);
            }
        });
    });
};