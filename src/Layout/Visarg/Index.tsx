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
const PlayIcon = '/assets/images/play.png';

const MorningMap = [
  { name: 'प्र', audioUrl: '/assets/mp3/extra/प्र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Morning1Map = [{ name: 'प्रातः', audioUrl: '/assets/mp3/words/प्रातः.mp3' }];
const NamahMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Namah2Map = [{ name: 'नमः', audioUrl: '/assets/mp3/words/नमः.mp3' }];
const AtahMap = [
  { name: 'अ', audioUrl: '/assets/mp3/svar/अ.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Atah1Map = [{ name: 'अतः', audioUrl: '/assets/mp3/words/अतः.mp3' }];
const EventuallyMap = [
  { name: 'अ', audioUrl: '/assets/mp3/svar/अ.mp3' },
  { name: 'ं', audioUrl: '/assets/mp3/matraein/ं.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Eventually1Map = [{ name: 'अंततः', audioUrl: '/assets/mp3/words/अंततः.mp3' }];
const ShanehMap = [
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ै', audioUrl: '/assets/mp3/matraein/ै.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Shaneh1Map = [{ name: 'शनैः', audioUrl: '/assets/mp3/words/शनैः.mp3' }];
const OftenMap = [
  { name: 'प्र', audioUrl: '/assets/mp3/extra/प्र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Often1Map = [{ name: 'प्रायः', audioUrl: '/assets/mp3/words/प्रायः.mp3' }];
const AgainMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Again1Map = [{ name: 'पुनः', audioUrl: '/assets/mp3/words/पुनः.mp3' }];
const AutomaticallyMap = [
  { name: 'स्', audioUrl: '/assets/mp3/extra/स्.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ः', audioUrl: '/assets/mp3/matraein/ः.mp3' },
];
const Automatically1Map = [{ name: 'स्वतः', audioUrl: '/assets/mp3/words/स्वतः.mp3' }];

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
            <a href="anaunaaisak">
              <img src={leftIcon} alt="Left Boy" />
            </a>
            <h1>ः विसर्ग मात्रा</h1>
            <a href="sanyukt">
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
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Morning</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {NamahMap.map((item: any, index: number) => (
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
                {Namah2Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Namah</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {AtahMap.map((item: any, index: number) => (
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
                {Atah1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Atah</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {EventuallyMap.map((item: any, index: number) => (
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
                {Eventually1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Eventually</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ShanehMap.map((item: any, index: number) => (
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
                {Shaneh1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Shaneh</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {OftenMap.map((item: any, index: number) => (
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
                {Often1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Often</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {AgainMap.map((item: any, index: number) => (
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
                {Again1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Again</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {AutomaticallyMap.map((item: any, index: number) => (
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
                {Automatically1Map.map((item: any, index: number) => (
                  <div key={index} className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Automatically</div>
                    <div className={styles.PlayWrap}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
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
