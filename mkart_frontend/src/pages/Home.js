import React, { useState } from 'react';
import Container from '../components/Container';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import { characters } from '../data/characters';
import './Home.css';

const HomePage = () => {
    const [selectedCharacter1, setSelectedCharacter1] = useState(characters[0]);
    const [selectedCharacter2, setSelectedCharacter2] = useState(characters[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [winnerData, setWinnerData] = useState(null);

    const handleStartBattle = async () => {
        setIsLoading(true);
        
        try {
            const response = await fetch('http://localhost:5000/api/start-race', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    player1: selectedCharacter1,
                    player2: selectedCharacter2
                })
            });
            const data = await response.json();
            setWinnerData(data);

            // setTimeout(() => {
                setIsLoading(false);    
                setModalOpen(true); 
            // }, 3000);
            
        } catch (error) {
            console.error('Error starting the battle:', error);
            setIsLoading(false);
        } 
    };

    return (
        <div className="home-page">
            <Container>
                <div className="carousels">
                    <div className="carousel-container">
                        <h3>Player 1</h3>
                        <Carousel characters={characters} onSelect={setSelectedCharacter1} />
                    </div>
                    <div className="carousel-container">
                        <h3>Player 2</h3>
                        <Carousel characters={characters} onSelect={setSelectedCharacter2} />
                    </div>
                </div>
                <button className="start-battle-button" onClick={handleStartBattle}>
                    Start Battle
                </button>

                {isLoading && (
                    <div className="loading-overlay">
                        <img src="/gifs/mario-loading.gif" alt="Loading..." />
                    </div>
                )}
                <Modal 
                    isOpen={modalOpen} 
                    onClose={() => setModalOpen(false)} 
                    winnerData={winnerData} 
                />
            </Container>
        </div>
    );
};

export default HomePage;
