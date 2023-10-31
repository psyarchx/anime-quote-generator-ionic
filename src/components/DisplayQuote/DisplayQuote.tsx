// src/components/DisplayComponent.tsx
import React from 'react';
import './DisplayQuote.css'
interface AnimeData {
  anime: string;
  character: string;
  quote: string;
}

const DisplayComponent: React.FC<{ animeData: AnimeData | null }> = ({
  animeData,
}) => {
  return (
    <div>
      {animeData && (
        <div className='quote-wrapper'>
          <p className='quote'>"{animeData.quote}"</p>
          <p className='character'>Character: {animeData.character}</p>
          <p className='anime'>Anime: {animeData.anime}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayComponent;
