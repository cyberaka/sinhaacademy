'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const WarriorMap = [
  { name: 'क्ष', audioUrl: '/assets/mp3/vyanjan/क्ष.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'त्र', audioUrl: '/assets/mp3/vyanjan/त्र.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' }
];
const Warrior1Map = [
  { name: 'क्षत्रिय', audioUrl: '/assets/mp3/words/क्षत्रिय.mp3' }
];
const TridentMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'त्र', audioUrl: '/assets/mp3/vyanjan/त्र.mp3' },
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
  { name: 'ू', audioUrl: '/assets/mp3/matraein/ू.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Trident2Map = [
  { name: 'त्रिशूल', audioUrl: '/assets/mp3/words/त्रिशूल.mp3' }
];
const RingMap = [
  { name: 'ज्ञ', audioUrl: '/assets/mp3/vyanjan/ज्ञ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Ring1Map = [
  { name: 'ज्ञानी', audioUrl: '/assets/mp3/words/ज्ञानी.mp3' }
];
const LabourerMap = [
  { name: 'श्र', audioUrl: '/assets/mp3/vyanjan/श्र.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' }
];
const Labourer1Map = [
  { name: 'श्रमिक', audioUrl: '/assets/mp3/words/श्रमिक.mp3' }
];
const LetterMap = [
  { name: 'प', audioUrl: '/assets/mp3/swara/प.mp3' },
  { name: 'त्र', audioUrl: '/assets/mp3/vyanjan/त्र.mp3' }
];
const Letter1Map = [
  { name: 'पत्र', audioUrl: '/assets/mp3/words/पत्र.mp3' }
];
const YagyaMap = [
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ज्ञ', audioUrl: '/assets/mp3/vyanjan/ज्ञ.mp3' }
];
const Yagya1Map = [
  { name: 'यज्ञ', audioUrl: '/assets/mp3/words/यज्ञ.mp3' }
];
const StudentMap = [
  { name: 'छ', audioUrl: '/assets/mp3/vyanjan/छ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: '', audioUrl: '/assets/mp3/vyanjan/त्र.mp3' }
];
const Student1Map = [
  { name: 'छात्र', audioUrl: '/assets/mp3/words/छात्र.mp3' }
];
const GyanMap = [
  { name: 'ज्ञ', audioUrl: '/assets/mp3/vyanjan/ज्ञ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' }
];
const Gyan1Map = [
  { name: 'ज्ञान', audioUrl: '/assets/mp3/words/ज्ञान.mp3' }
];
const TreeMap = [
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'ृ', audioUrl: '/assets/mp3/matraein/ृ.mp3' },
  { name: 'क्ष', audioUrl: '/assets/mp3/vyanjan/क्ष.mp3' }
];
const Tree1Map = [
  { name: 'वृक्ष', audioUrl: '/assets/mp3/words/वृक्ष.mp3' }
];
const VegetableMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ब्', audioUrl: '/assets/mp3/vyanjan/ब्.mp3' },
  { name: 'ज़', audioUrl: '/assets/mp3/vyanjan/ज़.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Vegetable1Map = [
  { name: 'सब्ज़ी', audioUrl: '/assets/mp3/words/सब्ज़ी.mp3' }
];
const BiscuitMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'स्', audioUrl: '/assets/mp3/vyanjan/स्.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' }
];
const Biscuit1Map = [
  { name: 'बिस्कुट', audioUrl: '/assets/mp3/words/बिस्कुट.mp3' }
];
const BookMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'स्', audioUrl: '/assets/mp3/vyanjan/स्.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' }
];
const Book1Map = [
  { name: 'पुस्तक', audioUrl: '/assets/mp3/words/पुस्तक.mp3' }
];
const TeacherMap = [
  { name: 'अ', audioUrl: '/assets/mp3/vyanjan/अ.mp3' },
  { name: 'ध्', audioUrl: '/assets/mp3/vyanjan/ध्.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' }
];
const Teacher1Map = [
  { name: 'अध्यापक', audioUrl: '/assets/mp3/words/अध्यापक.mp3' }
];
const BunchMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ु', audioUrl: '/assets/mp3/matraein/ु.mp3' },
  { name: 'च्', audioUrl: '/assets/mp3/vyanjan/च्.mp3' },
  { name: 'छ', audioUrl: '/assets/mp3/vyanjan/छ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Bunch1Map = [
  { name: 'गुच्छा', audioUrl: '/assets/mp3/words/गुच्छा.mp3' }
];
const FlyMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'क्', audioUrl: '/assets/mp3/vyanjan/क्.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Fly1Map = [
  { name: 'मक्खी', audioUrl: '/assets/mp3/words/मक्खी.mp3' }
];
const OnionMap = [
  { name: 'प्', audioUrl: '/assets/mp3/vyanjan/प्.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ज़', audioUrl: '/assets/mp3/vyanjan/ज़.mp3' }
];
const Onion1Map = [
  { name: 'प्याज़', audioUrl: '/assets/mp3/words/प्याज़.mp3' }
];
const MilkmanMap = [
  { name: 'ग्', audioUrl: '/assets/mp3/vyanjan/ग्.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Milkman1Map = [
  { name: 'ग्वाला', audioUrl: '/assets/mp3/words/ग्वाला.mp3' }
];
const Letter2Map = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ट्', audioUrl: '/assets/mp3/vyanjan/ट्.mp3' },
  { name: 'ठ', audioUrl: '/assets/mp3/vyanjan/ठ.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Letter21Map = [
  { name: 'चिट्ठी', audioUrl: '/assets/mp3/words/चिट्ठी.mp3' }
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
                {WarriorMap.map((item: any, index: number) => (
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
                {Warrior1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Warrior</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {TridentMap.map((item: any, index: number) => (
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
                {Trident2Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Trident</div>
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
                {LabourerMap.map((item: any, index: number) => (
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
                {Labourer1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Labourer</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {LetterMap.map((item: any, index: number) => (
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
                {Letter1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Letter</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {StudentMap.map((item: any, index: number) => (
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
                {Student1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Student</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {GyanMap.map((item: any, index: number) => (
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
                {Gyan1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Gyan</div>
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
                {VegetableMap.map((item: any, index: number) => (
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
                {Vegetable1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Vegetable</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BiscuitMap.map((item: any, index: number) => (
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
                {Biscuit1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Biscuit</div>
                  </div>
                ))}
              </div>
            </div>
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
                  <div className={styles.NameBg}>
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
                {TeacherMap.map((item: any, index: number) => (
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
                {Teacher1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Teacher</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BunchMap.map((item: any, index: number) => (
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
                {Bunch1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bunch</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {FlyMap.map((item: any, index: number) => (
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
                {Fly1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Fly</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {OnionMap.map((item: any, index: number) => (
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
                {Onion1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Onion</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MilkmanMap.map((item: any, index: number) => (
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
                {Milkman1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Milkman</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {Letter2Map.map((item: any, index: number) => (
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
                {Letter21Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Letter</div>
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
