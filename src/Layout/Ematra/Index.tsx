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
const BookMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
];
const Book1Map = [{ name: 'किताब', audioUrl: '/assets/mp3/words/किताब.mp3' }];
const DeerMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Deer1Map = [{ name: 'हिरन', audioUrl: '/assets/mp3/words/हिरन.mp3' }];
const SitarMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Sitar1Map = [{ name: 'सितार', audioUrl: '/assets/mp3/words/सितार.mp3' }];
const BirdMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Bird1Map = [{ name: 'चिड़िया', audioUrl: '/assets/mp3/words/चिड़िया.mp3' }];
const DayMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Day1Map = [{ name: 'दिन', audioUrl: '/assets/mp3/words/दिन.mp3' }];
const CountMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Count1Map = [{ name: 'गिन', audioUrl: '/assets/mp3/words/गिन.mp3' }];
const BillMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Bill1Map = [{ name: 'बिल', audioUrl: '/assets/mp3/words/बिल.mp3' }];
const HeadMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Head1Map = [{ name: 'सिर', audioUrl: '/assets/mp3/words/सिर.mp3' }];
const CastelMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Castel1Map = [{ name: 'किला', audioUrl: '/assets/mp3/words/किला.mp3' }];
const PlaneMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Plane1Map = [{ name: 'विमान', audioUrl: '/assets/mp3/words/विमान.mp3' }];
const TongsMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Tongs1Map = [{ name: 'चिमटा', audioUrl: '/assets/mp3/words/चिमटा.mp3' }];
const WheelMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Wheel1Map = [{ name: 'चिमटा', audioUrl: '/assets/mp3/words/चिमटा.mp3' }];
const GuitarMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Guitar1Map = [{ name: 'गिटार', audioUrl: '/assets/mp3/words/गिटार.mp3' }];
const JackalMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Jackal1Map = [{ name: 'सियार', audioUrl: '/assets/mp3/words/सियार.mp3' }];
const StampMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
];
const Stamp1Map = [{ name: 'टिकट', audioUrl: '/assets/mp3/words/टिकट.mp3' }];
const WhereMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ध', audioUrl: '/assets/mp3/vyanjan/ध.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Where1Map = [{ name: 'किधर', audioUrl: '/assets/mp3/words/किधर.mp3' }];
const BedMap = [
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: ' य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
];
const Bed1Map = [{ name: 'खटिया', audioUrl: '/assets/mp3/words/खटिया.mp3' }];
const BicycleMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'इ', audioUrl: '/assets/mp3/swara/इ.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Bicycle1Map = [{ name: 'साईकिल', audioUrl: '/assets/mp3/words/साईकिल.mp3' }];

const FarmerMap = [
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Farmer1Map = [{ name: 'किसान', audioUrl: '/assets/mp3/words/किसान.mp3' }];
const PostmanMap = [
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Postman1Map = [{ name: 'डाकिया', audioUrl: '/assets/mp3/words/डाकिया.mp3' }];
const DrizzleMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'झ', audioUrl: '/assets/mp3/vyanjan/झ.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
];
const Drizzle1Map = [{ name: 'रिमझिम', audioUrl: '/assets/mp3/words/रिमझिम.mp3' }];
const VestMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Vest1Map = [{ name: 'बनियान', audioUrl: '/assets/mp3/words/बनियान.mp3' }];

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
            <a href="svar"><img src={leftIcon} alt="Left Boy" /></a>
            <h1>इ Matra</h1>
            <a href="eematra"><img src={rightIcon} alt="Left Boy" /></a>
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
                {BookMap.map((item: any, index: number) => (
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
                {Book1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Book</div>
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
                  <div key={index} className={styles.NameBg}>
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
                {SitarMap.map((item: any, index: number) => (
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
                {Sitar1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Sitar</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BirdMap.map((item: any, index: number) => (
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
                {Bird1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bird</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DayMap.map((item: any, index: number) => (
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
                {Day1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Day</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CountMap.map((item: any, index: number) => (
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
                {Count1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Count</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BillMap.map((item: any, index: number) => (
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
                {Bill1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bill</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {HeadMap.map((item: any, index: number) => (
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
                {Head1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Head</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CastelMap.map((item: any, index: number) => (
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
                {Castel1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Castel</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PlaneMap.map((item: any, index: number) => (
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
                {Plane1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Plane</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {TongsMap.map((item: any, index: number) => (
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
                {Tongs1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Tongs</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {WheelMap.map((item: any, index: number) => (
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
                {Wheel1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Wheel</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {GuitarMap.map((item: any, index: number) => (
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
                {Guitar1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Guitar</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {JackalMap.map((item: any, index: number) => (
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
                {Jackal1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Jackal</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {StampMap.map((item: any, index: number) => (
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
                {Stamp1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Stamp</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {WhereMap.map((item: any, index: number) => (
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
                {Where1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Where</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BedMap.map((item: any, index: number) => (
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
                {Bed1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bed</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BicycleMap.map((item: any, index: number) => (
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
                {Bicycle1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bicycle</div>
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
                  <div key={index} className={styles.NameBg}>
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
                {PostmanMap.map((item: any, index: number) => (
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
                {Postman1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Postman</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DrizzleMap.map((item: any, index: number) => (
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
                {Drizzle1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Drizzle</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {VestMap.map((item: any, index: number) => (
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
                {Vest1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Vest</div>
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
