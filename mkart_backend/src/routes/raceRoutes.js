const express = require('express');
const { playRaceEngine, declareWinner } = require('../services/raceService');
const router = express.Router();

router.post('/start-race', async (req, res) => {
    const { player1, player2 } = req.body;

    try {
        console.log(`🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome} começando...\n`);

        const raceResults = await playRaceEngine(player1, player2);
        const winner = await declareWinner(player1, player2);

        res.status(200).json({ raceResults, winner });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocorreu um erro ao iniciar a corrida." });
    }
});

module.exports = router;