'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const AppleMap = [
  { name: 'स', audioUrl: '/assets/mp3/swara/स.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' }
];
const Apple1Map = [
  { name: 'सेब', audioUrl: '/assets/mp3/words/सेब.mp3' }
];
const TreeMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' }
];
const Tree1Map = [
  { name: 'तृण', audioUrl: '/assets/mp3/words/तृण.mp3' }
];
const BananaMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vayanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Banana1Map = [
  { name: 'केला', audioUrl: '/assets/mp3/words/केला.mp3' }
];
const BitterGourdMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const BitterGourd1Map = [
  { name: 'करेला', audioUrl: '/assets/mp3/words/करेला.mp3' }
];
const GameMap = [
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Game1Map = [
  { name: 'खेल', audioUrl: '/assets/mp3/words/खेल.mp3' }
];
const OilMap = [
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Oil1Map = [
  { name: 'तेल', audioUrl: '/assets/mp3/words/तेल.mp3' }
];
const BerryMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }

];
const Berry1Map = [
  { name: 'बेर', audioUrl: '/assets/mp3/words/बेर.mp3' }
];
const CreepersMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Creepers1Map = [
  { name: 'बेल', audioUrl: '/assets/mp3/words/बेल.mp3' }
];
const FestivalMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Festival1Map = [
  { name: 'मेला', audioUrl: '/assets/mp3/words/मेला.mp3' }
];
const TrolleyMap = [
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Trolley1Map = [
  { name: 'ठेला', audioUrl: '/assets/mp3/words/ठेला.mp3' }
];
const LineMap = [
  { name: 'र', audioUrl: '/assets/mp3/matraein/र.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Line1Map = [
  { name: 'रेखा', audioUrl: '/assets/mp3/words/रेखा.mp3' }
];
const DreamsMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' }
];
const Dreams1Map = [
  { name: 'सपने', audioUrl: '/assets/mp3/words/सपने.mp3' }
];
const ManyMap = [
  { name: 'अ', audioUrl: '/assets/mp3/vyanjan/अ.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/matraein/क.mp3' }
];
const Many1Map = [
  { name: 'अनेक', audioUrl: '/assets/mp3/words/अनेक.mp3' }
];
const MorningMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Morning1Map = [
  { name: 'सवेरा', audioUrl: '/assets/mp3/words/सवेरा.mp3' }
];
const RoostMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Roost1Map = [
  { name: 'बसेरा', audioUrl: '/assets/mp3/words/बसेरा.mp3' }
];
const MongooseMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Mongoose1Map = [
  { name: 'नेवला', audioUrl: '/assets/mp3/words/नेवला.mp3' }
];
const ScofferMap = [
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Scoffer1Map = [
  { name: 'ठठेरा', audioUrl: '/assets/mp3/words/ठठेरा.mp3' }
];
const PuzzleMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/matraein/ल.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Puzzle1Map = [
  { name: 'पहेली', audioUrl: '/assets/mp3/words/पहेली.mp3' }
];
const FriendMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/matraein/ल.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Friend1Map = [
  { name: 'सहेली', audioUrl: '/assets/mp3/words/सहेली.mp3' }
];
const ClothesMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3' },
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' }
];
const Clothes1Map = [
  { name: 'कपड़े', audioUrl: '/assets/mp3/words/कपड़े.mp3' }
];
const HardWorkMap = [
  { name: 'े', audioUrl: '/assets/mp3/matraein/े.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
];
const HardWork1Map = [
  { name: 'मेहनत', audioUrl: '/assets/mp3/words/मेहनत.mp3' }
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
              <h2>ए Matra - Pop all the balloons!  🤪🎈🎊</h2>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {AppleMap.map((item: any, index: number) => (
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
                {Apple1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Apple</div>
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
                {BananaMap.map((item: any, index: number) => (
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
                {Banana1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Banana</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BitterGourdMap.map((item: any, index: number) => (
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
                {BitterGourd1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
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
                {GameMap.map((item: any, index: number) => (
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
                {Game1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Game</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {OilMap.map((item: any, index: number) => (
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
                {Oil1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Oil</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BerryMap.map((item: any, index: number) => (
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
                {Berry1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Berry</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CreepersMap.map((item: any, index: number) => (
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
                {Creepers1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Creepers</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FestivalMap.map((item: any, index: number) => (
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
                {Festival1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Festival</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {TrolleyMap.map((item: any, index: number) => (
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
                {Trolley1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Trolley</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {LineMap.map((item: any, index: number) => (
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
                {Line1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Line</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DreamsMap.map((item: any, index: number) => (
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
                {Dreams1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Dreams</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ManyMap.map((item: any, index: number) => (
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
                {Many1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Many</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MorningMap.map((item: any, index: number) => (
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
                {Morning1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Morning</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {RoostMap.map((item: any, index: number) => (
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
                {Roost1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Roost</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MongooseMap.map((item: any, index: number) => (
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
                {Mongoose1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Mongoose</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ScofferMap.map((item: any, index: number) => (
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
                {Scoffer1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Scoffer</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PuzzleMap.map((item: any, index: number) => (
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
                {Puzzle1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Puzzle</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FriendMap.map((item: any, index: number) => (
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
                {Friend1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Friend</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ClothesMap.map((item: any, index: number) => (
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
                {Clothes1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Clothes</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HardWorkMap.map((item: any, index: number) => (
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
                {HardWork1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Hard work</div>
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
