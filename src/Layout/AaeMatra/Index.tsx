/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';
const RightBall = '/assets/images/right_ball_boy.png';
const centerGirl = '/assets/images/center_girl.png';
const leftTenBoy = '/assets/images/left_ten_boy.png';
const leftIcon = '/assets/images/left_arrow.png';
const rightIcon = '/assets/images/right_arrow.png';

const DrumMap = [
  { name: 'ढ', audioUrl: '/assets/mp3/swara/ढ.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Drum1Map = [{ name: 'ढोल', audioUrl: '/assets/mp3/words/ढोल.mp3' }];
const PeacockMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Peacock1Map = [{ name: 'मोर', audioUrl: '/assets/mp3/words/मोर.mp3' }];
const HorseMap = [
  { name: 'घ', audioUrl: '/assets/mp3/vyanjan/घ.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vayanjan/ड़.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Horse1Map = [{ name: 'घोड़ा', audioUrl: '/assets/mp3/words/घोड़ा.mp3' }];
const CuckooMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vayanjan/य.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Cuckoo1Map = [{ name: 'कोयल', audioUrl: '/assets/mp3/words/कोयल.mp3' }];
const CoatMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
];
const Coat1Map = [{ name: 'कोट', audioUrl: '/assets/mp3/words/कोट.mp3' }];
const ParrotMap = [
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Parrot1Map = [{ name: 'तोता', audioUrl: '/assets/mp3/words/तोता.mp3' }];
const CapMap = [
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Cap1Map = [{ name: 'टोपी', audioUrl: '/assets/mp3/words/टोपी.mp3' }];
const NoiseMap = [
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Noise1Map = [{ name: 'शोर', audioUrl: '/assets/mp3/words/शोर.mp3' }];
const CauliflowerMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'भ', audioUrl: '/assets/mp3/vyanjan/भ.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Cauliflower1Map = [{ name: 'गोभी', audioUrl: '/assets/mp3/words/गोभी.mp3' }];
const RoundMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Round1Map = [{ name: 'गोल', audioUrl: '/assets/mp3/words/गोल.mp3' }];
const LanguagesMap = [
  { name: 'ब', audioUrl: '/assets/mp3/matraein/ब.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Languages1Map = [{ name: 'बोली', audioUrl: '/assets/mp3/words/बोली.mp3' }];
const BowlMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Bowl1Map = [{ name: 'कटोरी', audioUrl: '/assets/mp3/words/कटोरी.mp3' }];
const LapMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
];
const Lap1Map = [{ name: 'गोद', audioUrl: '/assets/mp3/words/गोद.mp3' }];
const HoliMap = [
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Holi1Map = [{ name: 'होली', audioUrl: '/assets/mp3/words/होली.mp3' }];
const basketMap = [
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const basket1Map = [{ name: 'टोकरी', audioUrl: '/assets/mp3/words/टोकरी.mp3' }];
const PassionMap = [
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
];
const Passion1Map = [{ name: 'जोश', audioUrl: '/assets/mp3/words/जोश.mp3' }];
const WashermanMap = [
  { name: 'ध', audioUrl: '/assets/mp3/vyanjan/ध.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Washerman1Map = [{ name: 'धोबी', audioUrl: '/assets/mp3/words/धोबी.mp3' }];
const DholakMap = [
  { name: 'ढ', audioUrl: '/assets/mp3/vyanjan/ढ.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/matraein/क.mp3' },
];
const Dholak1Map = [{ name: 'ढोलक', audioUrl: '/assets/mp3/words/ढोलक.mp3' }];
const SensesMap = [
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
];
const Senses1Map = [{ name: 'होश', audioUrl: '/assets/mp3/words/होश.mp3' }];
const PearlMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Pearl1Map = [{ name: 'मोती', audioUrl: '/assets/mp3/words/मोती.mp3' }];
const SamosaMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ो', audioUrl: '/assets/mp3/matraein/ो.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Samosa1Map = [{ name: 'समोसा', audioUrl: '/assets/mp3/words/समोसा.mp3' }];

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
        <Container>
          <div className={styles.baloonTitle}>
            <a href="aaematra"><img src={leftIcon} alt="Left Boy" /></a>
            <h1>ओ Matra</h1>
            <a href="aematra"><img src={rightIcon} alt="Left Boy" /></a>
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
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DrumMap.map((item: any, index: number) => (
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
                {Drum1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Drum</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PeacockMap.map((item: any, index: number) => (
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
                {Peacock1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Peacock</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HorseMap.map((item: any, index: number) => (
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
                {Horse1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Horse</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CuckooMap.map((item: any, index: number) => (
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
                {Cuckoo1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bitter Gourd</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CoatMap.map((item: any, index: number) => (
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
                {Coat1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Pleasure trip</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ParrotMap.map((item: any, index: number) => (
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
                {Parrot1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Parrot</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CapMap.map((item: any, index: number) => (
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
                {Cap1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Cap</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {NoiseMap.map((item: any, index: number) => (
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
                {Noise1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Noise</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CauliflowerMap.map((item: any, index: number) => (
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
                {Cauliflower1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Cauliflower</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {RoundMap.map((item: any, index: number) => (
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
                {Round1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Round</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {LanguagesMap.map((item: any, index: number) => (
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
                {Languages1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Languages</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BowlMap.map((item: any, index: number) => (
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
                {Bowl1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bowl</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {LapMap.map((item: any, index: number) => (
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
                {Lap1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Lap</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HoliMap.map((item: any, index: number) => (
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
                {Holi1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Fine flour</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {basketMap.map((item: any, index: number) => (
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
                {basket1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>basket</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PassionMap.map((item: any, index: number) => (
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
                {Passion1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Passion</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {WashermanMap.map((item: any, index: number) => (
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
                {Washerman1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Washerman</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DholakMap.map((item: any, index: number) => (
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
                {Dholak1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Dholak</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SensesMap.map((item: any, index: number) => (
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
                {Senses1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Senses</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PearlMap.map((item: any, index: number) => (
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
                {Pearl1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Pearl</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SamosaMap.map((item: any, index: number) => (
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
                {Samosa1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Samosa</div>
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
