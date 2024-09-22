'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const CamelMap = [
  { name: 'ऊ', audioUrl: '/assets/mp3/swara/ऊ.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' }
];
const Camel1Map = [
  { name: 'ऊँट', audioUrl: '/assets/mp3/words/ऊँट.mp3' }
];
const VillageMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' }
];
const Village2Map = [
  { name: 'गाँव', audioUrl: '/assets/mp3/words/गाँव.mp3' }
];
const RingMap = [
  { name: 'अ', audioUrl: '/assets/mp3/vyanjan/अ.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Ring1Map = [
  { name: 'अँगूठी', audioUrl: '/assets/mp3/words/अँगूठी.mp3' }
];
const FluteMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Flute1Map = [
  { name: 'बाँसुरी', audioUrl: '/assets/mp3/words/बाँसुरी.mp3' }
];
const MoonMap = [
  { name: 'च', audioUrl: '/assets/mp3/swara/च.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' }
];
const Moon1Map = [
  { name: 'चाँद', audioUrl: '/assets/mp3/words/चाँद.mp3' }
];
const ButterfliesMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Butterflies1Map = [
  { name: 'तितलियाँ', audioUrl: '/assets/mp3/words/तितलियाँ.mp3' }
];
const EggMap = [
  { name: 'अ', audioUrl: '/assets/mp3/vyanjan/अ.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Egg1Map = [
  { name: 'अंडा', audioUrl: '/assets/mp3/words/अंडा.mp3' }
];
const FanMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ँ', audioUrl: '/assets/mp3/matraein/ँ.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Fan1Map = [
  { name: 'पंखा', audioUrl: '/assets/mp3/words/पंखा.mp3' }
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
              <h2>ँ अनुनासिक मात्रा - Pop all the balloons! 🤪🎈🎊</h2>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CamelMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
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
              <div className={styles.aaMatraRightWrap}>
                {Camel1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Camel</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {VillageMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
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
              <div className={styles.aaMatraRightWrap}>
                {Village2Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Village</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {RingMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
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
              <div className={styles.aaMatraRightWrap}>
                {Ring1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Ring</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FluteMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
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
              <div className={styles.aaMatraRightWrap}>
                {Flute1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Flute</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MoonMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
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
              <div className={styles.aaMatraRightWrap}>
                {Moon1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Moon</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ButterfliesMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
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
              <div className={styles.aaMatraRightWrap}>
                {Butterflies1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Butterflies</div>
                  </div>
                ))}
              </div>
            </div>

          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;
