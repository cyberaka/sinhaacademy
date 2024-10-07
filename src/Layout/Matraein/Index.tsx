'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Svar.module.scss';

const RightBall = '/assets/images/right_ball_boy.png';
const centerGirl = '/assets/images/center_girl.png';
const leftTenBoy = '/assets/images/left_ten_boy.png';
const leftIcon = '/assets/images/left_arrow.png';
const rightIcon = '/assets/images/right_arrow.png';

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
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3', active: false },
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
      <Container>
        <div className={styles.baloonTitle}>
          <a href="sanyyukt">
            <img src={leftIcon} alt="Left Boy" />
          </a>
          <h1>मात्राएं</h1>
          <a href="barakhari">
            <img src={rightIcon} alt="Left Boy" />
          </a>
        </div>
      </Container>
      <div className={styles.FeedbackWrap}>
        <div className={styles.LearningHindiLang}>
          <img src={leftTenBoy} alt="Left Boy" className={styles.leftTenBoy} />
          <img src={centerGirl} alt="Center Girl" className={styles.CenterGirl} />
          <img src={RightBall} alt="Right Boy" className={styles.RightBallBoy} />
        </div>
      </div>
      <div className={styles.LearningWrap}>
        <Container>
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
