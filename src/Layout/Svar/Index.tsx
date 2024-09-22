'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Svar.module.scss';

const initialSwaraMap = [
  { name: 'अ', audioUrl: '/assets/mp3/swara/अ.mp3', active: false },
  { name: 'आ', audioUrl: '/assets/mp3/swara/आ.mp3', active: false },
  { name: 'इ', audioUrl: '/assets/mp3/swara/इ.mp3', active: false },
  { name: 'ई', audioUrl: '/assets/mp3/swara/ई.mp3', active: false },
  { name: 'उ', audioUrl: '/assets/mp3/swara/उ.mp3', active: false },
  { name: 'ऊ', audioUrl: '/assets/mp3/swara/ऊ.mp3', active: false },
  { name: 'ऋ', audioUrl: '/assets/mp3/swara/ऋ.mp3', active: false },
  { name: 'ए', audioUrl: '/assets/mp3/swara/ए.mp3', active: false },
  { name: 'ऐ', audioUrl: '/assets/mp3/swara/ऐ.mp3', active: false },
  { name: 'ओ', audioUrl: '/assets/mp3/swara/ओ.mp3', active: false },
  { name: 'औ', audioUrl: '/assets/mp3/swara/औ.mp3', active: false },
  { name: 'अं', audioUrl: '/assets/mp3/swara/अं.mp3', active: false },
  { name: 'अः', audioUrl: '/assets/mp3/swara/अः.mp3', active: false },
];

function Index() {
  const [swaraMap, setSwaraMap] = useState(initialSwaraMap);

  // Function to handle play audio and toggle active state
  const handlePlayAudio = (audioUrl: string, name: string) => {
    const audio = new Audio(audioUrl);
    audio.play();

    // Update the swaraMap to toggle the 'active' state
    const updatedSwaraMap = swaraMap.map(item => {
      if (item.name === name) {
        return { ...item, active: !item.active };
      }
      return item;
    });

    setSwaraMap(updatedSwaraMap);
  };

  return (
    <div className={styles.LearningPage}>
      <div className={styles.LearningWrap}>
        <Container>
          <div className={styles.baloonTitle}>
            <h2>स्वर - Pop all the 12 balloons! 🤪 🎈 🎊</h2>
          </div>
          <div className={styles.baloonGroup}>
            {swaraMap.map((item, index) => (
              <div
                key={index}
                className={`${styles.SingleBaloon} ${item.active ? 'active' : ''}`}
                onClick={() => handlePlayAudio(item.audioUrl, item.name)}
              >
                <div className={styles.BaloonImg}>
                  <img src="/assets/images/yellow_baloon.png" alt="Balloon" />
                </div>
                <div className={styles.SvarWrap}>
                  <h5 style={{ cursor: 'pointer' }}>{item.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Index;
