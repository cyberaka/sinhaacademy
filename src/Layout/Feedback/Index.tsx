'use client';

import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Feedback.module.scss';

function Index() {
  const RightBall = '/assets/images/right_ball_boy.png';
  const centerGirl = '/assets/images/center_girl.png';
  const leftTenBoy = '/assets/images/left_ten_boy.png';

  return (
    <>
      <div className={styles.FeedBackPage}>
        <div className={styles.yourFeedback}>
          <Container>
            <div className={styles.FeedbackCont}>
              <h1>We Value Your Feedback!</h1>
              <p>
                At Sinha Academy, we're always looking for ways to improve and make learning Hindi even more fun and
                engaging for kids. Your feedback helps us understand what we're doing right and where we can do better.
                Please take a moment to share your thoughts with us.
              </p>
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
        <div className={styles.FeedbackForm}>
          <Container>
            <div className={styles.FeedbackFormInner}>
              <Form>
                <h2>Feedback Form</h2>
                <div className="my-3 pt-2">
                  <label className={styles.formLabel}>Parent/Guardian Name:</label>
                  <input type="text" className={styles.formControl} />
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>Email address</label>
                  <input type="email" className={styles.formControl} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>Child's Age</label>
                  <input type="number" className={styles.formControl} />
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>Rate Your Experience</label>
                  <div className="star_rating">
                    <div className={styles.ratingStars}>
                      <input type="radio" name="rating" checked />
                      <label></label>
                      <input type="radio" name="rating" />
                      <label></label>
                      <input type="radio" name="rating" />
                      <label></label>
                      <input type="radio" name="rating" />
                      <label></label>
                      <input type="radio" name="rating" />
                      <label></label>
                      <input type="radio" name="rating" />
                      <label></label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>What did you like the most about Sinha Academy? </label>
                  <textarea className={styles.formControl} placeholder="Write here"></textarea>
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>What can we improve to make your experience better? </label>
                  <textarea className={styles.formControl} placeholder="Write here"></textarea>
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>Any additional comments or suggestions? </label>
                  <textarea className={styles.formControl} placeholder="Write here"></textarea>
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>Would you recommend Sinha Academy to others?</label>
                  <div className={styles.FormCheck}>
                    <div className={styles.FormCheckInline}>
                      <input className="form-check-input" type="radio" name="" value="option1" />
                      <label className="form-check-label">yes</label>
                    </div>
                    <div className={styles.FormCheckInline}>
                      <input className="form-check-input" type="radio" name="" value="option2" />
                      <label className="form-check-label">No</label>
                    </div>
                    <div className={styles.FormCheckInline}>
                      <input className="form-check-input" type="radio" name="" value="option2" />
                      <label className="form-check-label">Maybe</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className={styles.formLabel}>How did you hear about us?</label>
                  <div className={styles.FormCheck}>
                    <div className={styles.FormCheckInline}>
                      <input className="form-check-input" type="radio" name="" value="option1" />
                      <label className="form-check-label">Friend/Family</label>
                    </div>
                    <div className={styles.FormCheckInline}>
                      <input className="form-check-input" type="radio" name="" value="option2" />
                      <label className="form-check-label">Social media search</label>
                    </div>
                    <div className={styles.FormCheckInline}>
                      <input className="form-check-input" type="radio" name="" value="option2" />
                      <label className="form-check-label">Advertisement</label>
                    </div>
                  </div>
                  <br />
                  <input type="text" className={styles.formControl} placeholder="Other (Specify)" />
                </div>
                <div className="text-end mt-4">
                  <input type="Submit" value="Submit" className={styles.feedbackSubmit} />
                </div>
              </Form>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;
