import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, winnerData }) => {
    if (!isOpen || !winnerData) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Race Results</h2>

                <div className="rounds-container">
                    {winnerData.raceResults.map((round, index) => (
                        <div key={index} className="round-section">
                            <h2>Round {round.round} - {round.block}</h2>

                            {/* Tabela de cada round */}
                            <table className="round-table">
                                <thead>
                                    <tr>
                                        <th>Player</th>
                                        <th>Habilidade</th>
                                        <th>Valor</th>
                                        <th>Dado</th>
                                        <th>Resultado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {round.results.map((result, idx) => {
                                        // Verifica se há empate
                                        const allTotals = round.results.map(r => r.total);
                                        const isDraw = allTotals.every(total => total === allTotals[0]);

                                        const isWinner = !isDraw && result.total === Math.max(...allTotals);
                                        const isLoser = !isDraw && result.total === Math.min(...allTotals);

                                        return (
                                            <tr key={idx} style={{
                                                backgroundColor: isDraw ? 'blue' : isWinner ? 'green' : 'red',
                                                color: 'white',
                                            }}>
                                                <td>
                                                    <img
                                                        src={`/gifs/${result.player.toLowerCase()}.gif`}
                                                        alt={result.player}
                                                        className="player-gif"
                                                    />
                                                </td>
                                                <td width={300}>{result.skill}</td>
                                                <td>{result.skillValue}</td>
                                                <td>{result.dice}</td>
                                                <td>{result.total}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>

                <div className="winner-section">
                    <h3>Final Result: {winnerData.winner.winner}</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;
