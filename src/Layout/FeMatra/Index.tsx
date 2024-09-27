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

const BullMap = [
  { name: 'ब', audioUrl: '/assets/mp3/swara/ब.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Bull1Map = [{ name: 'बैल', audioUrl: '/assets/mp3/words/बैल.mp3' }];
const BagMap = [
  { name: 'थ', audioUrl: '/assets/mp3/vyanjan/थ.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Bag1Map = [{ name: 'थैला', audioUrl: '/assets/mp3/words/थैला.mp3' }];
const MynaMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vayanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Myna1Map = [{ name: 'मैना', audioUrl: '/assets/mp3/words/मैना.mp3' }];
const MoneyMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Money1Map = [{ name: 'पैसा', audioUrl: '/assets/mp3/words/पैसा.mp3' }];
const PleasuretripMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Pleasuretrip1Map = [{ name: 'सैर', audioUrl: '/assets/mp3/words/सैर.mp3' }];
const BoatMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Boat1Map = [{ name: 'नैया', audioUrl: '/assets/mp3/words/नैया.mp3' }];
const KailashMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
];
const Kailash1Map = [{ name: 'कैलाश', audioUrl: '/assets/mp3/words/कैलाश.mp3' }];
const ScumMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
];
const Scum1Map = [{ name: 'मैल', audioUrl: '/assets/mp3/words/मैल.mp3' }];
const AsMap = [
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const As1Map = [{ name: 'जैसा', audioUrl: '/assets/mp3/words/जैसा.mp3' }];
const SoldierMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
];
const Soldier1Map = [{ name: 'सैनिक', audioUrl: '/assets/mp3/words/सैनिक.mp3' }];
const LineMap = [
  { name: 'प', audioUrl: '/assets/mp3/matraein/प.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Line1Map = [{ name: 'पैर', audioUrl: '/assets/mp3/words/पैर.mp3' }];
const HowMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const How1Map = [{ name: 'कैसा', audioUrl: '/assets/mp3/words/कैसा.mp3' }];
const DailyMap = [
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/matraein/क.mp3' },
];
const Daily1Map = [{ name: 'दैनिक', audioUrl: '/assets/mp3/words/दैनिक.mp3' }];
const FineflourMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Fineflour1Map = [{ name: 'मैदा', audioUrl: '/assets/mp3/words/मैदा.mp3' }];
const PrisonerMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Prisoner1Map = [{ name: 'कैदी', audioUrl: '/assets/mp3/words/कैदी.mp3' }];
const DeployedMap = [
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
];
const Deployed1Map = [{ name: 'तैनात', audioUrl: '/assets/mp3/words/तैनात.mp3' }];
const BornMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Born1Map = [{ name: 'पैदा', audioUrl: '/assets/mp3/words/पैदा.mp3' }];
const MeetingMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/matraein/क.mp3' },
];
const Meeting1Map = [{ name: 'बैठक', audioUrl: '/assets/mp3/words/बैठक.mp3' }];
const SwimmerMap = [
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/matraein/क.mp3' },
];
const Swimmer1Map = [{ name: 'तैराक', audioUrl: '/assets/mp3/words/तैराक.mp3' }];
const MotherMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Mother1Map = [{ name: 'मैया', audioUrl: '/assets/mp3/words/मैया.mp3' }];
const GrandeurMap = [
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'भ', audioUrl: '/assets/mp3/vyanjan/भ.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
];
const Grandeur1Map = [{ name: 'वैभव', audioUrl: '/assets/mp3/words/वैभव.mp3' }];
const FieldMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Field1Map = [{ name: 'मैदान', audioUrl: '/assets/mp3/words/मैदान.mp3' }];

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
            <a href="fmatra"><img src={leftIcon} alt="Left Boy" /></a>
            <h1>ऐ Matra</h1>
            <a href="aaematra"><img src={rightIcon} alt="Left Boy" /></a>
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
                {BullMap.map((item: any, index: number) => (
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
                {Bull1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bull</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BagMap.map((item: any, index: number) => (
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
                {Bag1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bag</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MynaMap.map((item: any, index: number) => (
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
                {Myna1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Myna</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MoneyMap.map((item: any, index: number) => (
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
                {Money1Map.map((item: any, index: number) => (
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
                {PleasuretripMap.map((item: any, index: number) => (
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
                {Pleasuretrip1Map.map((item: any, index: number) => (
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
                {BoatMap.map((item: any, index: number) => (
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
                {Boat1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Boat</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {KailashMap.map((item: any, index: number) => (
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
                {Kailash1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Kailash</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ScumMap.map((item: any, index: number) => (
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
                {Scum1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Scum</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {AsMap.map((item: any, index: number) => (
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
                {As1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>As</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SoldierMap.map((item: any, index: number) => (
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
                {Soldier1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Soldier</div>
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
                  <div key={index} className={styles.NameBg}>
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
                {HowMap.map((item: any, index: number) => (
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
                {How1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>How</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DailyMap.map((item: any, index: number) => (
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
                {Daily1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Daily</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FineflourMap.map((item: any, index: number) => (
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
                {Fineflour1Map.map((item: any, index: number) => (
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
                {PrisonerMap.map((item: any, index: number) => (
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
                {Prisoner1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Prisoner</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DeployedMap.map((item: any, index: number) => (
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
                {Deployed1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Deployed</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BornMap.map((item: any, index: number) => (
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
                {Born1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Born</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MeetingMap.map((item: any, index: number) => (
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
                {Meeting1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Meeting</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SwimmerMap.map((item: any, index: number) => (
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
                {Swimmer1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Swimmer</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MotherMap.map((item: any, index: number) => (
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
                {Mother1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Mother</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {GrandeurMap.map((item: any, index: number) => (
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
                {Grandeur1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Grandeur</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FieldMap.map((item: any, index: number) => (
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
                {Field1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Field</div>
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
