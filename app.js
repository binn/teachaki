import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        code: 69,
        message: 'hi aki ily uwu'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});