'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Svar.module.scss';
const RightBall = '/assets/images/right_ball_boy.png';
const centerGirl = '/assets/images/center_girl.png';
const leftTenBoy = '/assets/images/left_ten_boy.png';
const leftIcon = '/assets/images/left_arrow.png';
const rightIcon = '/assets/images/right_arrow.png';
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
        <Container>
          <div className={styles.baloonTitle}>
            <a href="/learning"><img src={leftIcon} alt="Left Boy" /></a>
            <h1>Swar स्वर</h1>
            <a href="/vyanjan"><img src={rightIcon} alt="Left Boy" /></a>
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
