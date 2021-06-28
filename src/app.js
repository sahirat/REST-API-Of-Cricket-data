const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const playerRankings = require('../src/models/Schems');
require('../src/db/conn');
app.set('view-engine', 'ejs');
app.use(express.json());
app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.post('/player', async(req,res) => {
     try {
        const playerData = new playerRankings(req.body);
        console.log(req.body);
         const insertPlayer = await playerData.save();
         res.status(201).send(insertPlayer);
    }
    catch(err) {
        res.status(400).send(e);
    }
})

app.get('/player', async (req, res) => {
    try {
        const getPlayers = await playerRankings.find({}).sort({ "rank": 1 });
        res.send(getPlayers);
    }
    catch (err) {
        res.status(400).send(e);
    }
})

app.listen(PORT, () => {
    console.log("server is running on port:" + PORT);
})