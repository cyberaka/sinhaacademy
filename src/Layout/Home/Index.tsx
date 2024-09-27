'use client';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Home.module.scss';

function Index() {
  const MeetBanner = '/assets/images/meet_hindi.png';
  const RightBall = '/assets/images/right_ball_boy.png';
  const centerGirl = '/assets/images/center_girl.png';
  const leftTenBoy = '/assets/images/left_ten_boy.png';
  const FunEase = '/assets/images/fun_ease.png';
  const OurCurriculumLeft = '/assets/images/our_curriculum_left.png';
  const OurCurriculumRight = '/assets/images/our_curriculum_right.png';
  const Box1 = '/assets/images/curriculum_1.png';
  const Box2 = '/assets/images/curriculum_2.png';
  const Box3 = '/assets/images/curriculum_3.png';
  const Box4 = '/assets/images/curriculum_4.png';
  const Box5 = '/assets/images/curriculum_5.png';
  const Box6 = '/assets/images/curriculum_6.png';
  const Box7 = '/assets/images/curriculum_7.png';
  const Box8 = '/assets/images/curriculum_8.png';
  const Box9 = '/assets/images/curriculum_9.png';
  const Why1 = '/assets/images/why_choose_center.png';
  const Why2 = '/assets/images/why_choose_btm.png';
  const W1 = '/assets/images/off.png';
  const W2 = '/assets/images/interactive_learning.png';
  const W3 = '/assets/images/expert_educators.png';
  const W4 = '/assets/images/comprehensive_resources.png';
  const W5 = '/assets/images/cultural_insights.png';
  return (
    <>
      <div className={styles.HomePage}>
        <div className={styles.meetHindiContent}>
          <Container>
            <div className={styles.backClrF}>
              <div className={styles.backClrS}>
                <Row className={styles.BgCls}>
                  <Col md="6" className={styles.textStart}>
                    <h1 className={styles.txtOuter}>Meet Hindi!</h1>
                    <p>
                      Hello, little friends! Welcome to the magical world of Hindi. Let's start by meeting the Hindi
                      alphabet and learning some cool facts about this language. Are you ready to have some fun while
                      learning?
                    </p>
                  </Col>
                  <Col md="6">
                    <img src={MeetBanner} alt="" />
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.FeedbackWrap}>
          <div className={styles.LearningHindiLang}>
            <img src={leftTenBoy} alt="" className={styles.leftTenBoy} />
            <img src={centerGirl} alt="" className={styles.CenterGirl} />
            <img src={RightBall} alt="" className={styles.RightBallBoy} />
          </div>
        </div>
        <div className={styles.WelcomeWrap}>
          <Container>
            <div className={styles.WelCont}>
              <h5>Welcome to Sinha Academy</h5>
              <h2>Learn Hindi with Fun and Ease</h2>
              <p>
                At Sinha Academy, we believe in making language learning an enjoyable and interactive experience for
                young minds. Our curriculum is tailored specifically for children aged 6-10, ensuring they grasp the
                fundamentals of Hindi in a fun and engaging manner.
              </p>
            </div>
            <div className={styles.FunEase}>
              <img src={FunEase} alt="" />
            </div>
          </Container>
        </div>
        <div className={styles.ourCurriculumContent}>
          <div className={styles.OurCurriculumImg}>
            <img src={OurCurriculumLeft} className={styles.OurCurriculumLeft} alt="" />
            <img src={OurCurriculumRight} className={styles.OurCurriculumRight} alt="" />
          </div>
          <Container>
            <div className={styles.OurCurriculumTitle}>
              <h2>Our Curriculum</h2>
              <p>
                We cover essential Hindi language concepts that form the foundation of fluency and literacy. Our lessons
                include:
              </p>
            </div>
            <div className={styles.curriculumContent}>
              <Row>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box1} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box2} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box3} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box4} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box5} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box6} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box7} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>

                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box8} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.ourCurriculumBox}>
                    <img src={Box9} alt="Box " />
                    <h5>Introduction to Hindi vowels and </h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className={styles.whyChooseContent}>
          <img src={Why1} alt="" className={styles.whyChooseCenter} />
          <img src={Why2} alt="" className={styles.whyChooseBtm} />
          <Container className={styles.ContainerWrap}>
            <div className={styles.WhyChooseTitle}>
              <h2>Why Choose Sinha Academy?</h2>
            </div>
            <div className={styles.WhyChooseBox}>
              <Row className={styles.RowWrap}>
                <Col md="4" className="mb-4">
                  <img src={W1} alt="" />
                  <h6 className="mt-3 mb-3">100% Off</h6>
                  <p>No login, registration, or advertisements. Our platform is completely free to use.</p>
                </Col>
                <Col md="4" className="mb-4">
                  <img src={W2} alt="" />
                  <h6 className="mt-3 mb-3">Interactive Learning</h6>
                  <p>Our lessons are designed to be interactive, keeping the young learners engaged</p>
                </Col>
                <Col md="4" className="mb-4">
                  <img src={W3} alt="" />
                  <h6 className="mt-3 mb-3">Expert Educators</h6>
                  <p>Our teachers are experienced and passionate about teaching Hindi to children</p>
                </Col>
                <Col md="4" className="mb-4">
                  <img src={W4} alt="" />
                  <h6 className="mt-3 mb-3">Comprehensive Resources</h6>
                  <p>We provide a variety of resources, including worksheets, games, and multimedia content.</p>
                </Col>
                <Col md="4" className="mb-4">
                  <img src={W5} alt="" />
                  <h6 className="mt-3 mb-3">Cultural Insights</h6>
                  <p>
                    Along with language, we also impart cultural knowledge to give students a holistic understanding of
                    Hindi.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;
