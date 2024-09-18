import express from 'express';
import os from 'os';
import axios from 'axios'

const app = express();
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send(`Hello depuis la machine ${os.hostname()}`)
});

app.get('/nginx', (req, res) =>{
    const url = "http://nginx"
    axios.get(url)
    .then (response) (res.send(response.data))
});

const server = app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`);
});
