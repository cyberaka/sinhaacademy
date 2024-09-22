'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Svar.module.scss';

const vyanjaMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'घ', audioUrl: '/assets/mp3/vyanjan/घ.mp3' },
  { name: 'ङ', audioUrl: '/assets/mp3/vyanjan/ङ.mp3' },
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'छ', audioUrl: '/assets/mp3/vyanjan/छ.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'झ', audioUrl: '/assets/mp3/vyanjan/झ.mp3' },
  { name: 'ञ', audioUrl: '/assets/mp3/vyanjan/ञ.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3' },
  { name: 'ढ', audioUrl: '/assets/mp3/vyanjan/ढ.mp3' },
  { name: 'ण', audioUrl: '/assets/mp3/vyanjan/ण.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'थ', audioUrl: '/assets/mp3/vyanjan/थ.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ध', audioUrl: '/assets/mp3/vyanjan/ध.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'फ', audioUrl: '/assets/mp3/vyanjan/फ.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'भ', audioUrl: '/assets/mp3/vyanjan/भ.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
  { name: 'ष', audioUrl: '/assets/mp3/vyanjan/ष.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'क्ष', audioUrl: '/assets/mp3/vyanjan/क्ष.mp3' },
  { name: 'त्र', audioUrl: '/assets/mp3/vyanjan/त्र.mp3' },
  { name: 'ज्ञ', audioUrl: '/assets/mp3/vyanjan/ज्ञ.mp3' },
  { name: 'श्र', audioUrl: '/assets/mp3/vyanjan/श्र.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' },
  { name: 'ढ़', audioUrl: '/assets/mp3/vyanjan/ढ़.mp3' },
  { name: 'फ़', audioUrl: '/assets/mp3/vyanjan/फ़.mp3' },
  { name: 'य़', audioUrl: '/assets/mp3/vyanjan/य़.mp3' },
];

function Index() {
  const [selectedValue, setSeletedValue] = useState<string>('');
  const BaloonImg = '/assets/images/yellow_baloon.png';

  const handlePlayAudio = (audioUrl: string, name: string) => {
    setSeletedValue(name);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <>
      <div className={styles.LearningPage}>
        <div className={styles.LearningWrap}>
          <Container>
            <div className={styles.baloonTitle}>
              <h2>व्यंजन - Pop all the 41 balloons! 🤪🎈🎊</h2>
            </div>
            <div className={styles.baloonGroup}>
              {vyanjaMap.map((item: any, index: number) => (
                <div key={index} className={`${selectedValue === item.name ? 'active' : ''} ${styles.SingleBaloon}`}>
                  <div className={styles.BaloonImg}>
                    <img src={BaloonImg} alt="Balloon" />
                  </div>
                  <div className={styles.SvarWrap}>
                    <h5 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;
