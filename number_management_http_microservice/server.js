const express = require('express');
const axios = require('axios');
const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
    const urls = req.query.url;
    const generatedData = urls.map(url => {
        return axios.get(url, { timeout: 5000 })
            .then(response => {
                return response.data.numbers;
            })
            .catch(err => {
                console.log(`Error fetching data from ${url}`, err.message);
                return [];
            });
    });

    let data = [];

    try {
        data = await Promise.all(generatedData);
    } catch (err) {
        console.log('Error in Promise.all: ', err.message);
    }
    const mergedNumbers = [].concat.apply([], data);
    let uniqueNumbers = new Set(mergedNumbers);
    let result = Array.from(uniqueNumbers);
    result.sort((a, b) => a - b);
    res.json({ numbers: result });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
