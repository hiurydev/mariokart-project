async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    return {
        message: `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`,
        score: diceResult + attribute
    };
}

async function playRaceEngine(character1, character2) {
    const results = [];

    for (let round = 1; round <= 5; round++) {
        const roundResult = { round, block: "", results: [] };
        let block = await getRandomBlock();
        roundResult.block = block;  // Adiciona o bloco atual

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        // Calcula resultados baseados no bloco
        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.Velocidade;
            totalTestSkill2 = diceResult2 + character2.Velocidade;

            roundResult.results.push({
                player: character1.Nome,
                skill: "Velocidade",
                skillValue: character1.Velocidade, // Adiciona o valor da habilidade
                dice: diceResult1,
                total: totalTestSkill1
            });

            roundResult.results.push({
                player: character2.Nome,
                skill: "Velocidade",
                skillValue: character2.Velocidade, // Adiciona o valor da habilidade
                dice: diceResult2,
                total: totalTestSkill2
            });
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.Manobrabilidade;

            roundResult.results.push({
                player: character1.Nome,
                skill: "Manobrabilidade",
                skillValue: character1.Manobrabilidade, // Adiciona o valor da habilidade
                dice: diceResult1,
                total: totalTestSkill1
            });

            roundResult.results.push({
                player: character2.Nome,
                skill: "Manobrabilidade",
                skillValue: character2.Manobrabilidade, // Adiciona o valor da habilidade
                dice: diceResult2,
                total: totalTestSkill2
            });
        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.Poder;
            let powerResult2 = diceResult2 + character2.Poder;

            roundResult.results.push({
                player: character1.Nome,
                skill: "Poder",
                skillValue: character1.Poder, // Adiciona o valor da habilidade
                dice: diceResult1,
                total: powerResult1
            });

            roundResult.results.push({
                player: character2.Nome,
                skill: "Poder",
                skillValue: character2.Poder, // Adiciona o valor da habilidade
                dice: diceResult2,
                total: powerResult2
            });

            if (powerResult1 > powerResult2 && character2.Pontos > 0) {
                character2.Pontos--;
            }

            if (powerResult2 > powerResult1 && character1.Pontos > 0) {
                character1.Pontos--;
            }
        }

        // Atualiza pontos baseado nos testes
        if (totalTestSkill1 > totalTestSkill2) {
            character1.Pontos++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            character2.Pontos++;
        }

        results.push(roundResult);
    }

    return results;
}


async function declareWinner(character1, character2) {
    const winnerMessage = {
        results: {
            [character1.Nome]: character1.Pontos,
            [character2.Nome]: character2.Pontos,
        },
        winner: character1.Pontos > character2.Pontos
            ? `${character1.Nome} venceu a corrida! Parabéns! 🏆`
            : character2.Pontos > character1.Pontos
                ? `${character2.Nome} venceu a corrida! Parabéns! 🏆`
                : "A corrida terminou em empate",
    };

    return winnerMessage;
}

module.exports = { playRaceEngine, declareWinner };
