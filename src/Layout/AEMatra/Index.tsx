'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const PlantMap = [
  { name: 'प', audioUrl: '/assets/mp3/swara/प.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'ध', audioUrl: '/assets/mp3/vyanjan/ध.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Plant1Map = [
  { name: 'पौधा', audioUrl: '/assets/mp3/words/पौधा.mp3' }
];
const BoatMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Boat1Map = [
  { name: 'नौका', audioUrl: '/assets/mp3/words/नौका.mp3' }
];
const ToyMap = [
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vayanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vayanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Toy1Map = [
  { name: 'खिलौना', audioUrl: '/assets/mp3/words/खिलौना.mp3' }
];
const NineMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' }
];
const Nine1Map = [
  { name: 'नौ', audioUrl: '/assets/mp3/words/नौ.mp3' }
];
const ServantMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }
];
const Servant1Map = [
  { name: 'नौकर', audioUrl: '/assets/mp3/words/नौकर.mp3' }
];
const HundredMap = [
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' }
];
const Hundred1Map = [
  { name: 'सौ', audioUrl: '/assets/mp3/words/सौ.mp3' }
];
const OutpostMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Outpost1Map = [
  { name: 'चौकी', audioUrl: '/assets/mp3/words/चौकी.mp3' }
];
const SeasonalMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Seasonal1Map = [
  { name: 'मौसमी', audioUrl: '/assets/mp3/words/मौसमी.mp3' }
];
const RoundMap = [
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }
];
const Round1Map = [
  { name: 'गोभी', audioUrl: '/assets/mp3/words/गोभी.mp3' }
];
const GauriMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Gauri1Map = [
  { name: 'गौरी', audioUrl: '/assets/mp3/words/गौरी.mp3' }
];
const DumplingsMap = [
  { name: 'प', audioUrl: '/assets/mp3/matraein/प.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Dumplings1Map = [
  { name: 'पकौड़ी', audioUrl: '/assets/mp3/words/पकौड़ी.mp3' }
];
const TowelMap = [
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'ि', audioUrl: '/assets/mp3/matraein/ि.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'य', audioUrl: '/assets/mp3/vyanjan/य.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Towel1Map = [
  { name: 'तौलिया', audioUrl: '/assets/mp3/words/तौलिया.mp3' }
];
const DwarfMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Dwarf1Map = [
  { name: 'बौना', audioUrl: '/assets/mp3/words/बौना.mp3' }
];
const BottlegourdMap = [
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Bottlegourd1Map = [
  { name: 'लौकी', audioUrl: '/assets/mp3/words/लौकी.mp3' }
];
const ShortbreadMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Shortbread1Map = [
  { name: 'कचौड़ी', audioUrl: '/assets/mp3/words/कचौड़ी.mp3' }
];
const PennyMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Penny1Map = [
  { name: 'कौड़ी', audioUrl: '/assets/mp3/words/कौड़ी.mp3' }
];
const QuartetMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ड़', audioUrl: '/assets/mp3/vyanjan/ड़.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Quartet1Map = [
  { name: 'चौकड़ी', audioUrl: '/assets/mp3/words/चौकड़ी.mp3' }
];
const CrowMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'आ', audioUrl: '/assets/mp3/swara/आ.mp3' }
];
const Crow1Map = [
  { name: 'कौआ', audioUrl: '/assets/mp3/words/कौआ.mp3' }
];
const SeasonMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' }
];
const Season1Map = [
  { name: 'मौसम', audioUrl: '/assets/mp3/words/मौसम.mp3' }
];
const ChowdharyMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'ध', audioUrl: '/assets/mp3/vyanjan/ध.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' }
];
const Chowdhary1Map = [
  { name: 'चौधरी', audioUrl: '/assets/mp3/words/चौधरी.mp3' }
];
const WatchmanMap = [
  { name: 'च', audioUrl: '/assets/mp3/vyanjan/च.mp3' },
  { name: 'ौ', audioUrl: '/assets/mp3/matraein/ौ.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ी', audioUrl: '/assets/mp3/matraein/ी.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/द.mp3' }
];
const Watchman1Map = [
  { name: 'चौकीदार', audioUrl: '/assets/mp3/words/चौकीदार.mp3' }
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
              <h2>औ Matra - Pop all the balloons!  🤪🎈🎊</h2>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PlantMap.map((item: any, index: number) => (
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
                {Plant1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Plant</div>
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
                  <div className={styles.NameBg}>
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
                {ToyMap.map((item: any, index: number) => (
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
                {Toy1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Toy</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {NineMap.map((item: any, index: number) => (
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
                {Nine1Map.map((item: any, index: number) => (
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
                {ServantMap.map((item: any, index: number) => (
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
                {Servant1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
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
                {HundredMap.map((item: any, index: number) => (
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
                {Hundred1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Hundred</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {OutpostMap.map((item: any, index: number) => (
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
                {Outpost1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Outpost</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {SeasonalMap.map((item: any, index: number) => (
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
                {Seasonal1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Seasonal</div>
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
                  <div className={styles.NameBg}>
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
                {GauriMap.map((item: any, index: number) => (
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
                {Gauri1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Gauri</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DumplingsMap.map((item: any, index: number) => (
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
                {Dumplings1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Dumplings</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {TowelMap.map((item: any, index: number) => (
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
                {Towel1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Towel</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {DwarfMap.map((item: any, index: number) => (
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
                {Dwarf1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Dwarf</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {BottlegourdMap.map((item: any, index: number) => (
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
                {Bottlegourd1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Bottle gourd</div>
                  </div>
                ))}
              </div>
            </div> 
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {ShortbreadMap.map((item: any, index: number) => (
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
                {Shortbread1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Shortbread</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {PennyMap.map((item: any, index: number) => (
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
                {Penny1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Penny</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {QuartetMap.map((item: any, index: number) => (
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
                {Quartet1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Quartet</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CrowMap.map((item: any, index: number) => (
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
                {Crow1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Crow</div>
                  </div>
                ))}
              </div>
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
                {ChowdharyMap.map((item: any, index: number) => (
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
                {Chowdhary1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Chowdhary</div>
                  </div>
                ))}
              </div>
            </div>     
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {WatchmanMap.map((item: any, index: number) => (
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
                {Watchman1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Watchman</div>
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
