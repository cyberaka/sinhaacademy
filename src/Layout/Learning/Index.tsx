'use client';

import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Learning.module.scss';

const RightBall = '/assets/images/right_ball_boy.png';
const centerGirl = '/assets/images/center_girl.png';
const leftTenBoy = '/assets/images/left_ten_boy.png';
const B1 = '/assets/images/b_1.png';
const B2 = '/assets/images/b_2.png';
const W1 = '/assets/images/w_1.png';
const W2 = '/assets/images/w_2.png';
const W3 = '/assets/images/w_3.png';
const W4 = '/assets/images/w_4.png';
const W5 = '/assets/images/w_5.png';
const W6 = '/assets/images/w_6.png';
const W7 = '/assets/images/w_7.png';
const W8 = '/assets/images/w_8.png';
const W9 = '/assets/images/w_9.png';
const W10 = '/assets/images/w_10.png';
const M1 = '/assets/images/m_1.png';
const M2 = '/assets/images/m_2.png';
const M3 = '/assets/images/m_3.png';
const S1 = '/assets/images/s_1.png';
const S2 = '/assets/images/s_2.png';
const A1 = '/assets/images/a_1.png';
const A2 = '/assets/images/a_2.png';
function Index() {
  return (
    <>
      <div className={styles.LearningPage}>
        <Container>
          <div className={styles.LearningTitle}>
            <h1>Hindi Learning Chart</h1>
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
            <Accordion defaultActiveKey="0" id="accordionExample">
              <Row>
                <Col md={12}>
                  <Accordion.Item eventKey="0" className={styles.AccordionItem}>
                    <Accordion.Header className="w-100 text-start pb-4 mb-5 accordion-header">Basic</Accordion.Header>
                    <Accordion.Body className={styles.AccordionRow}>
                      <div className={styles.AccordionBox}>
                        <div className={styles.learningBox}>
                          <a href="svar">
                            <img src={B1} alt="Svar" />
                            <h4 className="mt-3">svar</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.AccordionBox}>
                        <div className={styles.learningBox}>
                          <a href="vyanjan">
                            <img src={B2} alt="Vya/jana" />
                            <h4 className="mt-3">vya/jana</h4>
                          </a>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Accordion.Item eventKey="1" className={styles.AccordionItem}>
                    <Accordion.Header className="w-100 text-start pb-4 mb-5 accordion-header">Words</Accordion.Header>
                    <Accordion.Body className={styles.AccordionRow}>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="aamatra">
                            <img src={W1} alt="Aa maaPaa" />
                            <h4 className="mt-3">Aa maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="ematra">
                            <img src={W2} alt="q maaPaa" />
                            <h4 className="mt-3">q maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="wmatra">
                            <img src={W3} alt="w maaPaa" />
                            <h4 className="mt-3">w maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="wumatra">
                            <img src={W4} alt="wu maaPaa" />
                            <h4 className="mt-3">wu maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="rmatra">
                            <img src={W5} alt="R maaPaa" />
                            <h4 className="mt-3">R maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="fmatra">
                            <img src={W6} alt="F maaPaa" />
                            <h4 className="mt-3">F maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="fematra">
                            <img src={W7} alt="Fe maaPaa" />
                            <h4 className="mt-3">Fe maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="aaematra">
                            <img src={W8} alt="Aae maaPaa" />
                            <h4 className="mt-3">Aae maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="aematra">
                            <img src={W9} alt="AaE maaPaa" />
                            <h4 className="mt-3">AaE maaPaa</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox}>
                          <a href="eematra">
                            <img src={W10} alt="qQ maaPaa" />
                            <h4 className="mt-3">qQ maaPaa</h4>
                          </a>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Accordion.Item eventKey="2" className={styles.AccordionItem}>
                    <Accordion.Header className="w-100 text-start pb-4 mb-5 accordion-header">Matra</Accordion.Header>
                    <Accordion.Body className={styles.AccordionRow}>
                      <div className={styles.MatraBox}>
                        <div className={styles.learningBox}>
                          <a href="anausvaar">
                            <img src={M1} alt="Anausvaar" />
                            <h4 className="mt-3">Anausvaar</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.MatraBox}>
                        <div className={styles.learningBox}>
                          <a href="anaunaaisak">
                            <img src={M2} alt="Anaunaaisak" />
                            <h4 className="mt-3">Anaunaaisak</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.MatraBox}>
                        <div className={styles.learningBox}>
                          <a href="anausvaar">
                            <img src={M3} alt="Anausvaar" />
                            <h4 className="mt-3">Anausvaar</h4>
                          </a>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col md={12}>
                  <Accordion.Item eventKey="3" className={styles.AccordionItem}>
                    <Accordion.Header className="w-100 text-start pb-4 mb-5 accordion-header">
                      Special{' '}
                      <span style={{ fontFamily: "'ams_barakhadi_1regular'", margin: 0 }} className="m-0 ps-3">
                        vya/jana
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className={styles.AccordionRow}>
                      <div className={styles.SpecialBox}>
                        <div className={styles.learningBox}>
                          <a href="sanyukt">
                            <img src={S1} alt="Special" />
                            <h4 className="mt-3">say/au|ta vya/jana</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.SpecialBox}>
                        <div className={styles.learningBox}>
                          <img src={S2} alt="idtva vya/jana" />
                          <h4 className="mt-3">idtva vya/jana</h4>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col md={12}>
                  <Accordion.Item eventKey="4" className={styles.AccordionItem}>
                    <Accordion.Header className="w-100 text-start pb-4 mb-5 accordion-header">
                      Advanced
                    </Accordion.Header>
                    <Accordion.Body className={styles.AccordionRow}>
                      <div className={styles.AdvancedBox}>
                        <div className={styles.learningBox}>
                          <a href="matraein">
                            <img src={A1} alt="maaPaaF~" />
                            <h4 className="mt-3">maaPaaF~</h4>
                          </a>
                        </div>
                      </div>
                      <div className={styles.AdvancedBox}>
                        <div className={styles.learningBox}>
                          <a href="barakhari">
                            <img src={A2} alt="baarhKaDI" />
                            <h4 className="mt-3">baarhKaDI</h4>
                          </a>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
            </Accordion>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;
