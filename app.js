const app = require('express')();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        code: 69,
        message: 'hi aki ily uwu',
        reason: 'because why not, stupid german girl lmao',
        race: 'german girl cutie'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
