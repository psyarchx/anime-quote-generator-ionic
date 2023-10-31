import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ButtonComponent from '../components/Button/ButtonAPI';
import DisplayComponent from '../components/DisplayQuote/DisplayQuote';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [quoteData, setQuoteData] = useState<any>(null);

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Anime Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='page' fullscreen>
        <div className='page'>
          <DisplayComponent animeData={quoteData} />
          <ButtonComponent setQuoteData={setQuoteData} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
