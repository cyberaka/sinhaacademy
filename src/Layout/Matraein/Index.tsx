'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Svar.module.scss';

const initialMatraeinMap = [
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3', active: false },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3', active: false },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3', active: false },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3', active: false },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3', active: false },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3', active: false },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3', active: false },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3', active: false },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3', active: false },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3', active: false },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3', active: false },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3', active: false },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3', active: false }
];

function Index() {
  const [MatraeinMap, setMatraeinMap] = useState(initialMatraeinMap);

  // Function to handle play audio and toggle active state
  const handlePlayAudio = (audioUrl: string, name: string) => {
    const audio = new Audio(audioUrl);
    audio.play();

    // Update the MatraeinMap to toggle the 'active' state
    const updatedMatraeinMap = MatraeinMap.map(item => {
      if (item.name === name) {
        return { ...item, active: !item.active };
      }
      return item;
    });

    setMatraeinMap(updatedMatraeinMap);
  };

  return (
    <div className={styles.LearningPage}>
      <div className={styles.LearningWrap}>
        <Container>
          <div className={styles.baloonTitle}>
            <h2>स्वर - Pop all the 12 balloons! 🤪 🎈 🎊</h2>
          </div>
          <div className={styles.baloonGroup}>
            {MatraeinMap.map((item, index) => (
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
