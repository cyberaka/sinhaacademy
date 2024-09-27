/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Svar.module.scss';
const RightBall = '/assets/images/right_ball_boy.png';
const centerGirl = '/assets/images/center_girl.png';
const leftTenBoy = '/assets/images/left_ten_boy.png';
const leftIcon = '/assets/images/left_arrow.png';
const rightIcon = '/assets/images/right_arrow.png';
const vyanjaMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3', active: false },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3', active: false },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3', active: false },
  { name: 'घ', audioUrl: '/assets/mp3/vyanjan/घ.mp3', active: false },
  { name: 'ङ', audioUrl: '/assets/mp3/vyanjan/ङ.mp3', active: false },
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3', active: false },
  { name: 'छ', audioUrl: '/assets/mp3/vyanjan/छ.mp3', active: false },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3', active: false },
  { name: 'झ', audioUrl: '/assets/mp3/vyanjan/झ.mp3', active: false },
  { name: 'ञ', audioUrl: '/assets/mp3/vyanjan/ञ.mp3', active: false },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3', active: false },
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3', active: false },
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3', active: false },
  { name: 'ढ', audioUrl: '/assets/mp3/vyanjan/ढ.mp3', active: false },
  { name: 'ण', audioUrl: '/assets/mp3/vyanjan/ण.mp3', active: false },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3', active: false },
  { name: 'थ', audioUrl: '/assets/mp3/vyanjan/थ.mp3', active: false },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3', active: false },
  { name: 'ध', audioUrl: '/assets/mp3/vyanjan/ध.mp3', active: false },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3', active: false },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3', active: false },
  { name: 'फ', audioUrl: '/assets/mp3/vyanjan/फ.mp3', active: false },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3', active: false },
  { name: 'भ', audioUrl: '/assets/mp3/vyanjan/भ.mp3', active: false },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3', active: false },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3', active: false },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3', active: false },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3', active: false },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3', active: false },
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3', active: false },
  { name: 'ष', audioUrl: '/assets/mp3/vyanjan/ष.mp3', active: false },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3', active: false },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3', active: false },
  { name: 'क्ष', audioUrl: '/assets/mp3/vyanjan/क्ष.mp3', active: false },
  { name: 'त्र', audioUrl: '/assets/mp3/vyanjan/त्र.mp3', active: false },
  { name: 'ज्ञ', audioUrl: '/assets/mp3/vyanjan/ज्ञ.mp3', active: false },
  { name: 'श्र', audioUrl: '/assets/mp3/vyanjan/श्र.mp3', active: false },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3', active: false },
  { name: 'ढ़', audioUrl: '/assets/mp3/vyanjan/ढ़.mp3', active: false },
  { name: 'फ़', audioUrl: '/assets/mp3/vyanjan/फ़.mp3', active: false },
  { name: 'य़', audioUrl: '/assets/mp3/vyanjan/य़.mp3', active: false },
];

function Index() {
  const [VyanjanMap, setVyanjanMap] = useState(vyanjaMap);
  const [selectedValue, setSeletedValue] = useState<string>('');
  const BaloonImg = '/assets/images/yellow_baloon.png';

  const handlePlayAudio = (audioUrl: string, name: string) => {
    setSeletedValue(name);
    const audio = new Audio(audioUrl);
    audio.play();


    const updatedVyanjanMap = VyanjanMap.map(item => {
        if (item.name === name) {
          return { ...item, active: !item.active };
        }
        return item;
      });
      setVyanjanMap(updatedVyanjanMap);
  };
  return (
    <>
      <div className={styles.LearningPage}>
        <Container>
          <div className={styles.baloonTitle}>
            <a href="svar"><img src={leftIcon} alt="Left Boy" /></a>
            <h1>व्यंजन Vyanjan</h1>
            <a href="aamatra"><img src={rightIcon} alt="Left Boy" /></a>
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
              {VyanjanMap.map((item: any, index: number) => (
                <div key={index}className={`${styles.SingleBaloon} ${item.active ? 'active' : ''}`}
                onClick={() => handlePlayAudio(item.audioUrl, item.name)}>
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
