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

const RoseMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
];
const Rose1Map = [{ name: 'गुलाब', audioUrl: '/assets/mp3/words/गुलाब.mp3' }];
const SocksMap = [
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
];
const Socks1Map = [{ name: 'जुराब', audioUrl: '/assets/mp3/words/जुराब.mp3' }];
const TortoiseMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'छ', audioUrl: '/assets/mp3/vyanjan/छ.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'आ', audioUrl: '/assets/mp3/swara/आ.mp3' },
];
const Tortoise1Map = [{ name: 'कछुआ', audioUrl: '/assets/mp3/words/कछुआ.mp3' }];
const BridgeMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Bridge1Map = [{ name: 'पुल', audioUrl: '/assets/mp3/words/पुल.mp3' }];
const SilentMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
];
const Silent1Map = [{ name: 'चुप', audioUrl: '/assets/mp3/words/चुप.mp3' }];
const ListenMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];

const Listen1Map = [{ name: 'सुन', audioUrl: '/assets/mp3/words/सुन.mp3' }];
const BadMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Bad1Map = [{ name: 'बुरा', audioUrl: '/assets/mp3/words/बुरा.mp3' }];
const ShopMap = [
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Shop1Map = [{ name: 'दुकान', audioUrl: '/assets/mp3/words/दुकान.mp3' }];
const LookatMap = [
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
];
const Lookat1Map = [{ name: 'लुकाट', audioUrl: '/assets/mp3/words/लुकाट.mp3' }];
const KneeMap = [
  { name: 'घ', audioUrl: '/assets/mp3/vyanjan/घ.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Knee1Map = [{ name: 'घुटना', audioUrl: '/assets/mp3/words/घुटना.mp3' }];
const ShirtMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: '्', audioUrl: '/assets/mp3/matraein/्.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Shirt1Map = [{ name: 'कुर्ता', audioUrl: '/assets/mp3/words/कुर्ता.mp3' }];
const JamunMap = [
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Jamun1Map = [{ name: 'जामुन', audioUrl: '/assets/mp3/words/जामुन.mp3' }];
const PinkMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/vyanjan/ी.mp3' },
];
const Pink1Map = [{ name: 'गुलाबी', audioUrl: '/assets/mp3/words/गुलाबी.mp3' }];
const ChunariMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/vyanjan/ी.mp3' },
];
const Chunari1Map = [{ name: 'चुनरी', audioUrl: '/assets/mp3/words/चुनरी.mp3' }];
const KumudMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
];
const Kumud1Map = [{ name: 'कुमुद', audioUrl: '/assets/mp3/words/कुमुद.mp3' }];
const PriestMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/vyanjan/ी.mp3' },
];
const Priest1Map = [{ name: 'पुजारी', audioUrl: '/assets/mp3/words/पुजारी.mp3' }];
const SafflowerMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
];
const Safflower1Map = [{ name: 'कुसुम', audioUrl: '/assets/mp3/words/कुसुम.mp3' }];
const ChairMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: '्', audioUrl: '/assets/mp3/matraein/्.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/vyanjan/ी.mp3' },
];
const Chair1Map = [{ name: 'कुर्सी', audioUrl: '/assets/mp3/words/कुर्सी.mp3' }];

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
            <a href="eematra">
              <img src={leftIcon} alt="Left Boy" />
            </a>
            <h1>उ Matra</h1>
            <a href="wumatra">
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
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {RoseMap.map((item: any, index: number) => (
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
                {Rose1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Rose</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SocksMap.map((item: any, index: number) => (
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
                {Socks1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Socks</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {TortoiseMap.map((item: any, index: number) => (
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
                {Tortoise1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Tortoise</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BridgeMap.map((item: any, index: number) => (
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
                {Bridge1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bridge</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SilentMap.map((item: any, index: number) => (
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
                {Silent1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Silent</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ListenMap.map((item: any, index: number) => (
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
                {Listen1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Listen</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BadMap.map((item: any, index: number) => (
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
                {Bad1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bad</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ShopMap.map((item: any, index: number) => (
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
                {Shop1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Shop</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {LookatMap.map((item: any, index: number) => (
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
                {Lookat1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Lookat</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {KneeMap.map((item: any, index: number) => (
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
                {Knee1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Knee</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ShirtMap.map((item: any, index: number) => (
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
                {Shirt1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Shirt</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {JamunMap.map((item: any, index: number) => (
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
                {Jamun1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Jamun</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PinkMap.map((item: any, index: number) => (
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
                {Pink1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Pink</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ChunariMap.map((item: any, index: number) => (
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
                {Chunari1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Chunari</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {KumudMap.map((item: any, index: number) => (
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
                {Kumud1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Kumud</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PriestMap.map((item: any, index: number) => (
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
                {Priest1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Priest</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SafflowerMap.map((item: any, index: number) => (
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
                {Safflower1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Safflower</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ChairMap.map((item: any, index: number) => (
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
                {Chair1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Chair</div>
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
