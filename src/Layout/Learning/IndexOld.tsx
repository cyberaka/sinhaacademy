'use client';

import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

import { useCommonReducer } from '@/components/App/reducer';
import SimpleModal from '@/components/Default/SimpleModal';
import styles from '@/styles/Components/Container/Learning.module.scss';

import AaeMatra from '../AaeMatra/Index';
import AaMatra from '../AaMatra/Index';
import AEMatra from '../AEMatra/Index';
import Anaunaaisak from '../Anaunaaisak/Index';
import Anausvaar from '../Anausvaar/Index';
import Barakhari from '../Barakhari/Index';
import EEmatra from '../EEmatra/Index';
import Ematra from '../Ematra/Index';
import FeMatra from '../FeMatra/Index';
import FMatra from '../FMatra/Index';
import Matraein from '../Matraein/Index';
import RMatra from '../RMatra/Index';
import Sanyukt from '../Sanyukt/Index';
import Svar from '../Svar/Index';
import Umatra from '../Wmatra/Index';
import UUmatra from '../WUmatra/Index';
import Vyanjan from '../Vyanjan/Index';

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
  const { state, dispatch } = useCommonReducer({});

  const openSwarModal = () => {
    dispatch({
      viewModal: true,
      edit: false,
      modalTitle: 'Swar',
    });
  };
  const openVyanjanModal = () => {
    dispatch({
      viewVyanjanModal: true,
      edit: false,
      modalTitle: 'Vyajana',
    });
  };
  const openAaMatraModal = () => {
    dispatch({
      viewAaMatraModal: true,
      edit: false,
      modalTitle: 'Aa Matra',
    });
  };
  const openEmatraModal = () => {
    dispatch({
      viewEmatraModal: true,
      edit: false,
      modalTitle: 'E Matra',
    });
  };
  const openEEmatraModal = () => {
    dispatch({
      viewEEmatraModal: true,
      edit: false,
      modalTitle: 'EE Matra',
    });
  };
  const openUmatraModal = () => {
    dispatch({
      viewUmatraModal: true,
      edit: false,
      modalTitle: 'U Matra',
    });
  };
  const openUUmatraModal = () => {
    dispatch({
      viewUUmatraModal: true,
      edit: false,
      modalTitle: 'UU Matra',
    });
  };
  const openRMatraModal = () => {
    dispatch({
      viewRMatraModal: true,
      edit: false,
      modalTitle: 'R Matra',
    });
  };
  const openFMatraModal = () => {
    dispatch({
      viewFMatraModal: true,
      edit: false,
      modalTitle: 'F Matra',
    });
  };
  const openFeMatraModal = () => {
    dispatch({
      viewFeMatraModal: true,
      edit: false,
      modalTitle: 'Fe Matra',
    });
  };
  const openAaeMatraModal = () => {
    dispatch({
      viewAaeMatraModal: true,
      edit: false,
      modalTitle: 'Aae Matra',
    });
  };
  const openAEMatraModal = () => {
    dispatch({
      viewAEMatraModal: true,
      edit: false,
      modalTitle: 'AeE Matra',
    });
  };
  const openAnausvaarModal = () => {
    dispatch({
      viewAnausvaarModal: true,
      edit: false,
      modalTitle: 'Anausvaar',
    });
  };
  const openAnaunaaisakModal = () => {
    dispatch({
      viewAnaunaaisakModal: true,
      edit: false,
      modalTitle: 'Anaunaaisak',
    });
  };
  const openSanyuktModal = () => {
    dispatch({
      viewSanyuktModal: true,
      edit: false,
      modalTitle: 'Sanyukt',
    });
  };
  const openBarakhariModal = () => {
    dispatch({
      viewBarakhariModal: true,
      edit: false,
      modalTitle: 'Barakhari',
    });
  };
  const openMatraeinModal = () => {
    dispatch({
      viewMatraeinModal: true,
      edit: false,
      modalTitle: 'Matraein',
    });
  };

  const closeModal = (key: string) => {
    dispatch({ [key]: false, modalTitle: '' });
  };

  console.log(state.viewModal);
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
                        <div className={styles.learningBox} onClick={() => openSwarModal()}>
                          <img src={B1} alt="Svar" />

                          <h4 className="mt-3">svar</h4>
                        </div>
                      </div>
                      <div className={styles.AccordionBox}>
                        <div className={styles.learningBox} onClick={() => openVyanjanModal()}>
                          <a href="#">
                            <img src={B2} alt="Vya/jana" />
                          </a>
                          <h4 className="mt-3">vya/jana</h4>
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
                        <div className={styles.learningBox} onClick={() => openAaMatraModal()}>
                          <a href="#">
                            <img src={W1} alt="Aa maaPaa" />
                          </a>
                          <h4 className="mt-3">Aa maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openEmatraModal()}>
                          <img src={W2} alt="q maaPaa" />

                          <h4 className="mt-3">q maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openUmatraModal()}>
                          <img src={W3} alt="w maaPaa" />

                          <h4 className="mt-3">w maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openUUmatraModal()}>
                          <a href="#">
                            <img src={W4} alt="wu maaPaa" />
                          </a>
                          <h4 className="mt-3">wu maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openRMatraModal()}>
                          <a href="#">
                            <img src={W5} alt="R maaPaa" />
                          </a>
                          <h4 className="mt-3">R maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openFMatraModal()}>
                          <a href="#">
                            <img src={W6} alt="F maaPaa" />
                          </a>
                          <h4 className="mt-3">F maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openFeMatraModal()}>
                          <a href="#">
                            <img src={W7} alt="Fe maaPaa" />
                          </a>
                          <h4 className="mt-3">Fe maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openAaeMatraModal()}>
                          <a href="#">
                            <img src={W8} alt="Aae maaPaa" />
                          </a>
                          <h4 className="mt-3">Aae maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openAEMatraModal()}>
                          <a href="#">
                            <img src={W9} alt="AaE maaPaa" />
                          </a>
                          <h4 className="mt-3">AaE maaPaa</h4>
                        </div>
                      </div>
                      <div className={styles.WordBox}>
                        <div className={styles.learningBox} onClick={() => openEEmatraModal()}>
                          <img src={W10} alt="qQ maaPaa" />
                          <h4 className="mt-3">qQ maaPaa</h4>
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
                        <div className={styles.learningBox} onClick={() => openAnausvaarModal()}>
                          <img src={M1} alt="Anausvaar" />
                          <h4 className="mt-3">Anausvaar</h4>
                        </div>
                      </div>
                      <div className={styles.MatraBox}>
                        <div className={styles.learningBox} onClick={() => openAnaunaaisakModal()}>
                          <img src={M2} alt="Anaunaaisak" />
                          <h4 className="mt-3">Anaunaaisak</h4>
                        </div>
                      </div>
                      <div className={styles.MatraBox}>
                        <div className={styles.learningBox}>
                          <img src={M3} alt="Anausvaar" />
                          <h4 className="mt-3">Anausvaar</h4>
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
                        <div className={styles.learningBox} onClick={() => openSanyuktModal()}>
                          <img src={S1} alt="Special" />
                          <h4 className="mt-3">say/au|ta vya/jana</h4>
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
                        <div className={styles.learningBox} onClick={() => openMatraeinModal()}>
                          <img src={A1} alt="maaPaaF~" />
                          <h4 className="mt-3">maaPaaF~</h4>
                        </div>
                      </div>
                      <div className={styles.AdvancedBox}>
                        <div className={styles.learningBox} onClick={() => openBarakhariModal()}>
                          <img src={A2} alt="baarhKaDI" />
                          <h4 className="mt-3">baarhKaDI</h4>
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
      <SimpleModal
        id={'Svar' + '_modal'}
        title={state?.modalTitle}
        show={state.viewModal}
        onClose={() => closeModal('viewModal')}
      >
        <Svar />
      </SimpleModal>
      <SimpleModal
        id={'Vyanjan' + '_modal'}
        title={state?.modalTitle}
        show={state.viewVyanjanModal}
        onClose={() => closeModal('viewVyanjanModal')}
      >
        <Vyanjan />
      </SimpleModal>
      <SimpleModal
        id={'AaMatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewAaMatraModal}
        onClose={() => closeModal('viewAaMatraModal')}
      >
        <AaMatra />
      </SimpleModal>
      <SimpleModal
        id={'Ematra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewEmatraModal}
        onClose={() => closeModal('viewEmatraModal')}
      >
        <Ematra />
      </SimpleModal>
      <SimpleModal
        id={'EEmatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewEEmatraModal}
        onClose={() => closeModal('viewEEmatraModal')}
      >
        <EEmatra />
      </SimpleModal>
      <SimpleModal
        id={'Umatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewUmatraModal}
        onClose={() => closeModal('viewUmatraModal')}
      >
        <Umatra />
      </SimpleModal>
      <SimpleModal
        id={'UUmatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewUUmatraModal}
        onClose={() => closeModal('viewUUmatraModal')}
      >
        <UUmatra />
      </SimpleModal>
      <SimpleModal
        id={'RMatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewRMatraModal}
        onClose={() => closeModal('viewRMatraModal')}
      >
        <RMatra />
      </SimpleModal>
      <SimpleModal
        id={'FMatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewFMatraModal}
        onClose={() => closeModal('viewFMatraModal')}
      >
        <FMatra />
      </SimpleModal>
      <SimpleModal
        id={'FeMatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewFeMatraModal}
        onClose={() => closeModal('viewFeMatraModal')}
      >
        <FeMatra />
      </SimpleModal>
      <SimpleModal
        id={'AaeMatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewAaeMatraModal}
        onClose={() => closeModal('viewAaeMatraModal')}
      >
        <AaeMatra />
      </SimpleModal>
      <SimpleModal
        id={'AEMatra' + '_modal'}
        title={state?.modalTitle}
        show={state.viewAEMatraModal}
        onClose={() => closeModal('viewAEMatraModal')}
      >
        <AEMatra />
      </SimpleModal>
      <SimpleModal
        id={'Anausvaar' + '_modal'}
        title={state?.modalTitle}
        show={state.viewAnausvaarModal}
        onClose={() => closeModal('viewAnausvaarModal')}
      >
        <Anausvaar />
      </SimpleModal>
      <SimpleModal
        id={'Anausvaar' + '_modal'}
        title={state?.modalTitle}
        show={state.viewAnausvaarModal}
        onClose={() => closeModal('viewAnausvaarModal')}
      >
        <Anausvaar />
      </SimpleModal>
      <SimpleModal
        id={'Anaunaaisak' + '_modal'}
        title={state?.modalTitle}
        show={state.viewAnaunaaisakModal}
        onClose={() => closeModal('viewAnaunaaisakModal')}
      >
        <Anaunaaisak />
      </SimpleModal>
      <SimpleModal
        id={'Sanyukt' + '_modal'}
        title={state?.modalTitle}
        show={state.viewSanyuktModal}
        onClose={() => closeModal('viewSanyuktModal')}
      >
        <Sanyukt />
      </SimpleModal>
      <SimpleModal
        id={'Barakhari' + '_modal'}
        title={state?.modalTitle}
        show={state.viewBarakhariModal}
        onClose={() => closeModal('viewBarakhariModal')}
      >
        <Barakhari />
      </SimpleModal>
      <SimpleModal
        id={'Matraein' + '_modal'}
        title={state?.modalTitle}
        show={state.viewMatraeinModal}
        onClose={() => closeModal('viewMatraeinModal')}
      >
        <Matraein />
      </SimpleModal>
    </>
  );
}

export default Index;
