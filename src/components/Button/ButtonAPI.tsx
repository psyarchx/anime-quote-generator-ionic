// src/components/ButtonComponent.tsx
import React from 'react';
import { useState } from 'react';
import './ButtonAPI.css';
interface AnimeData {
  anime: string;
  character: string;
  quote: string;
}

const ButtonComponent: React.FC<{ setQuoteData: (data: AnimeData) => void }> = ({
  setQuoteData,
}) => {
  const handleGetRandomAnimeQuote = () => {
    fetch('https://animechan.xyz/api/random')
      .then((response) => response.json())
      .then((data: AnimeData) => {
        setQuoteData(data);
      });
  };

  return (
    <button className='big-blue-button' onClick={handleGetRandomAnimeQuote}>Get Random Anime Quote</button>
  );
};

export default ButtonComponent;
