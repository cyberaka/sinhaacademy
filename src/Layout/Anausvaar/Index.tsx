'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const RightBall = '/assets/images/right_ball_boy.png';
const centerGirl = '/assets/images/center_girl.png';
const leftTenBoy = '/assets/images/left_ten_boy.png';
const leftIcon = '/assets/images/left_arrow.png';
const rightIcon = '/assets/images/right_arrow.png';

const GrapesMap = [
  { name: 'अ', audioUrl: '/assets/mp3/swara/अ.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Grapes1Map = [{ name: 'अंगूर', audioUrl: '/assets/mp3/words/अंगूर.mp3' }];
const SwanMap = [
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
];
const Swan2Map = [{ name: 'हंस', audioUrl: '/assets/mp3/words/हंस.mp3' }];
const BellMap = [
  { name: 'घ', audioUrl: '/assets/mp3/vyanjan/घ.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
];
const Bell1Map = [{ name: 'घंटी', audioUrl: '/assets/mp3/words/घंटी.mp3' }];
const MonkeyMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Monkey1Map = [{ name: 'बंदर', audioUrl: '/assets/mp3/words/बंदर.mp3' }];
const KiteMap = [
  { name: 'प', audioUrl: '/assets/mp3/swara/प.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
];
const Kite1Map = [{ name: 'पतंग', audioUrl: '/assets/mp3/words/पतंग.mp3' }];
const CombMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'घ', audioUrl: '/assets/mp3/vyanjan/घ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Comb1Map = [{ name: 'कंघा', audioUrl: '/assets/mp3/words/कंघा.mp3' }];
const EggMap = [
  { name: 'अ', audioUrl: '/assets/mp3/vyanjan/अ.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Egg1Map = [{ name: 'अंडा', audioUrl: '/assets/mp3/words/अंडा.mp3' }];
const FanMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Fan1Map = [{ name: 'पंखा', audioUrl: '/assets/mp3/words/पंखा.mp3' }];
const ShankhMap = [
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
];
const Shankh1Map = [{ name: 'शंख', audioUrl: '/assets/mp3/words/शंख.mp3' }];
const BangleMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
];
const Bangle1Map = [{ name: 'कंगन', audioUrl: '/assets/mp3/words/कंगन.mp3' }];
const OrangeMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Orange1Map = [{ name: 'संतरा', audioUrl: '/assets/mp3/words/संतरा.mp3' }];
const SanjayMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
];
const Sanjay1Map = [{ name: 'संजय', audioUrl: '/assets/mp3/words/संजय.mp3' }];
const ColdMap = [
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Cold1Map = [{ name: 'ठंडा', audioUrl: '/assets/mp3/words/ठंडा.mp3' }];
const KanchanMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
];
const Kanchan1Map = [{ name: 'खाना', audioUrl: '/assets/mp3/words/खाना.mp3' }];
const FlagMap = [
  { name: 'झ', audioUrl: '/assets/mp3/vyanjan/झ.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'ड', audioUrl: '/assets/mp3/vyanjan/ड.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
];
const Flag1Map = [{ name: 'झंडा', audioUrl: '/assets/mp3/words/झंडा.mp3' }];

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
            <a href="aematra">
              <img src={leftIcon} alt="Left Boy" />
            </a>
            <h1>ं अनुस्वार Matra</h1>
            <a href="anaunaaisak">
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
                {GrapesMap.map((item: any, index: number) => (
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
                {Grapes1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Grapes</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SwanMap.map((item: any, index: number) => (
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
                {Swan2Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Swan</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BellMap.map((item: any, index: number) => (
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
                {Bell1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bell</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MonkeyMap.map((item: any, index: number) => (
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
                {Monkey1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Monkey</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {KiteMap.map((item: any, index: number) => (
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
                {Kite1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Kite</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CombMap.map((item: any, index: number) => (
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
                {Comb1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Comb</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {EggMap.map((item: any, index: number) => (
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
                {Egg1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Egg</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FanMap.map((item: any, index: number) => (
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
                {Fan1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Fan</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ShankhMap.map((item: any, index: number) => (
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
                {Shankh1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Shankh</div>
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
                  <div key={index} className={styles.NameBg}>
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
                {OrangeMap.map((item: any, index: number) => (
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
                {Orange1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Orange</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SanjayMap.map((item: any, index: number) => (
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
                {Sanjay1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Sanjay</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ColdMap.map((item: any, index: number) => (
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
                {Cold1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Cold</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {KanchanMap.map((item: any, index: number) => (
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
                {Kanchan1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Kanchan</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FlagMap.map((item: any, index: number) => (
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
                {Flag1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Flag</div>
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
