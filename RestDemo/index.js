const express = require('express');
const app = express();

// request body에서 URL 암호화 데이터(urlencoded) 형태 읽기
app.use(express.urlencoded({ extended: true }))
// json 데이터 형태 읽기
app.use(express.json());

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})