'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const SeasonMap = [
  { name: 'ऋ', audioUrl: '/assets/mp3/swara/ऋ.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' }
];
const Season1Map = [
  { name: 'ऋतु', audioUrl: '/assets/mp3/words/ऋतु.mp3' }
];
const StrawMap = [
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'ण', audioUrl: '/assets/mp3/vyanjan/ण.mp3' }
];
const Straw1Map = [
  { name: 'तृण', audioUrl: '/assets/mp3/words/तृण.mp3' }
];
const HomeMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vayanjan/ह.mp3' }
];
const Home1Map = [
  { name: 'गृह', audioUrl: '/assets/mp3/words/गृह.mp3' }
];
const CreationMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' }
];
const Creation1Map = [
  { name: 'सृजन', audioUrl: '/assets/mp3/words/सृजन.mp3' }
];
const GheeMap = [
  { name: 'घ', audioUrl: '/assets/mp3/vyanjan/घ.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' }
];
const Ghee1Map = [
  { name: 'घृत', audioUrl: '/assets/mp3/words/घृत.mp3' }
];
const WorkMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' }
];
const Work1Map = [
  { name: 'कृति', audioUrl: '/assets/mp3/words/कृति.mp3' }
];
const DemandMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' }

];
const Demand1Map = [
  { name: 'कृत', audioUrl: '/assets/mp3/words/कृत.mp3' }
];
const KingMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' }
];
const King1Map = [
  { name: 'नृप', audioUrl: '/assets/mp3/words/नृप.mp3' }
];
const MaternalMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' }
];
const Maternal1Map = [
  { name: 'मातृ', audioUrl: '/assets/mp3/words/मातृ.mp3' }
];
const HeartMap = [
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/matraein/द.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/matraein/य.mp3' }
];
const Heart1Map = [
  { name: 'ह्रदय', audioUrl: '/assets/mp3/words/ह्रदय.mp3' }
];
const FatherMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' }
];
const Father1Map = [
  { name: 'पितृ', audioUrl: '/assets/mp3/words/पितृ.mp3' }
];
const FarmerMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'ष', audioUrl: '/assets/mp3/vyanjan/ष.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' }
];
const Farmer1Map = [
  { name: 'कृषक', audioUrl: '/assets/mp3/words/कृषक.mp3' }
];
const TreeMap = [
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: '्', audioUrl: '/assets/mp3/matraein/्.mp3' },
  { name: 'ष', audioUrl: '/assets/mp3/matraein/ष.mp3' }
];
const Tree1Map = [
  { name: 'वृक्ष', audioUrl: '/assets/mp3/words/वृक्ष.mp3' }
];
const TenderMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' }
];
const Tender1Map = [
  { name: 'मृदु', audioUrl: '/assets/mp3/words/मृदु.mp3' }
];
const GratefulMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: '्', audioUrl: '/assets/mp3/matraein/्.mp3' },
  { name: 'ञ', audioUrl: '/assets/mp3/vyanjan/ञ.mp3' }
];
const Grateful1Map = [
  { name: 'कृतज्ञ', audioUrl: '/assets/mp3/words/कृतज्ञ.mp3' }
];
const DeerMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' }
];
const Deer1Map = [
  { name: 'मृग', audioUrl: '/assets/mp3/words/मृग.mp3' }
];
const AgricultureMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ष', audioUrl: '/assets/mp3/vyanjan/ष.mp3' }
];
const Agriculture1Map = [
  { name: 'कृषि', audioUrl: '/assets/mp3/words/कृषि.mp3' }
];
const EarthMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'थ', audioUrl: '/assets/mp3/vyanjan/थ.mp3' },
  { name: '्', audioUrl: '/assets/mp3/matraein/्.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Earth1Map = [
  { name: 'पृथ्वी', audioUrl: '/assets/mp3/words/पृथ्वी.mp3' }
];
const SaberMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }, 
  { name: 'ण', audioUrl: '/assets/mp3/vyanjan/ण.mp3' }
];
const Saber1Map = [
  { name: 'कृपाण', audioUrl: '/assets/mp3/words/कृपाण.mp3' }
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
              <h2>ऋ Matra - Pop all the balloons!  🤪🎈🎊</h2>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SeasonMap.map((item: any, index: number) => (
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
                {Season1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Season</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {StrawMap.map((item: any, index: number) => (
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
                {Straw1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Straw</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HomeMap.map((item: any, index: number) => (
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
                {Home1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Home</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CreationMap.map((item: any, index: number) => (
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
                {Creation1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Creation</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {GheeMap.map((item: any, index: number) => (
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
                {Ghee1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Ghee</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {WorkMap.map((item: any, index: number) => (
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
                {Work1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Work</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DemandMap.map((item: any, index: number) => (
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
                {Demand1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Demand</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {KingMap.map((item: any, index: number) => (
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
                {King1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>King</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MaternalMap.map((item: any, index: number) => (
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
                {Maternal1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Maternal</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HeartMap.map((item: any, index: number) => (
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
                {Heart1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Heart</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FatherMap.map((item: any, index: number) => (
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
                {Father1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Father</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FarmerMap.map((item: any, index: number) => (
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
                {Farmer1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Farmer</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {TreeMap.map((item: any, index: number) => (
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
                {Tree1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Tree</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {TenderMap.map((item: any, index: number) => (
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
                {Tender1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Tender</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {GratefulMap.map((item: any, index: number) => (
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
                {Grateful1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Grateful</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DeerMap.map((item: any, index: number) => (
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
                {Deer1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Deer</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {AgricultureMap.map((item: any, index: number) => (
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
                {Agriculture1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Agriculture</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {EarthMap.map((item: any, index: number) => (
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
                {Earth1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Earth</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SaberMap.map((item: any, index: number) => (
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
                {Saber1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Saber</div>
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
