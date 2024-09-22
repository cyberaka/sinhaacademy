'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const FlowerMap = [
  { name: 'फ', audioUrl: '/assets/mp3/vyanjan/फ.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Flower1Map = [
  { name: 'फूल', audioUrl: '/assets/mp3/words/फूल.mp3' }
];
const BangleMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Bangle1Map = [
  { name: 'चूड़ी', audioUrl: '/assets/mp3/words/चूड़ी.mp3' }
];
const HandkerchiefMap = [
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vayanjan/म.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/swara/ल.mp3' }
];
const Handkerchief1Map = [
  { name: 'रुमाल', audioUrl: '/assets/mp3/words/रुमाल.mp3' }
];
const PigeonMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }
];
const Pigeon1Map = [
  { name: 'कबूतर', audioUrl: '/assets/mp3/words/कबूतर.mp3' }
];
const RadishMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Radish1Map = [
  { name: 'मूली', audioUrl: '/assets/mp3/words/मूली.mp3' }
];
const HungerMap = [
  { name: 'भ', audioUrl: '/assets/mp3/vyanjan/भ.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' }
];
const Hunger1Map = [
  { name: 'भूख', audioUrl: '/assets/mp3/words/भूख.mp3' }
];
const SureMap = [
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }

];
const Sure1Map = [
  { name: 'जरूर', audioUrl: '/assets/mp3/words/जरूर.mp3' }
];
const DustMap = [
  { name: 'ध', audioUrl: '/assets/mp3/vyanjan/ध.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Dust1Map = [
  { name: 'धूल', audioUrl: '/assets/mp3/words/धूल.mp3' }
];
const SunMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' }
];
const Sun1Map = [
  { name: 'सूरज', audioUrl: '/assets/mp3/words/सूरज.mp3' }
];
const BearMap = [
  { name: 'भ', audioUrl: '/assets/mp3/vyanjan/घ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' }
];
const Bear1Map = [
  { name: 'भालू', audioUrl: '/assets/mp3/words/भालू.mp3' }
];
const MulberryMap = [
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/matraein/त.mp3' }
];
const Mulberry1Map = [
  { name: 'शहतूत', audioUrl: '/assets/mp3/words/शहतूत.mp3' }
];
const WatermelonMap = [
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' }
];
const Watermelon1Map = [
  { name: 'तरबूज', audioUrl: '/assets/mp3/words/तरबूज.mp3' }
];
const MiceMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Mice1Map = [
  { name: 'चूहा', audioUrl: '/assets/mp3/words/चूहा.mp3' }
];
const LaborerMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }
];
const Laborer1Map = [
  { name: 'मजदूर', audioUrl: '/assets/mp3/words/मजदूर.mp3' }
];
const SwingMap = [
  { name: 'झ', audioUrl: '/assets/mp3/vyanjan/झ.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Swing1Map = [
  { name: 'झूला', audioUrl: '/assets/mp3/words/झूला.mp3' }
];
const MuskmelonMap = [
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Muskmelon1Map = [
  { name: 'खरबूजा', audioUrl: '/assets/mp3/words/खरबूजा.mp3' }
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
              <h2>ऊ Matra - Pop all the balloons!  🤪🎈🎊</h2>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FlowerMap.map((item: any, index: number) => (
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
                {Flower1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Flower</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BangleMap.map((item: any, index: number) => (
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
                {Bangle1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bangle</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HandkerchiefMap.map((item: any, index: number) => (
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
                {Handkerchief1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Handkerchief</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PigeonMap.map((item: any, index: number) => (
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
                {Pigeon1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Pigeon</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {RadishMap.map((item: any, index: number) => (
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
                {Radish1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Radish</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HungerMap.map((item: any, index: number) => (
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
                {Hunger1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Hunger</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SureMap.map((item: any, index: number) => (
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
                {Sure1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Sure</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DustMap.map((item: any, index: number) => (
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
                {Dust1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Dust</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SunMap.map((item: any, index: number) => (
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
                {Sun1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Sun</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BearMap.map((item: any, index: number) => (
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
                {Bear1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bear</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MulberryMap.map((item: any, index: number) => (
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
                {Mulberry1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Mulberry</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {WatermelonMap.map((item: any, index: number) => (
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
                {Watermelon1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Watermelon</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MiceMap.map((item: any, index: number) => (
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
                {Mice1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Mice</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {LaborerMap.map((item: any, index: number) => (
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
                {Laborer1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Laborer</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SwingMap.map((item: any, index: number) => (
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
                {Swing1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Swing</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MuskmelonMap.map((item: any, index: number) => (
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
                {Muskmelon1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Muskmelon</div>
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
