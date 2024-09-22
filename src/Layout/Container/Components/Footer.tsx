import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '@/styles/Components/Container/Footer.module.scss';
function Footer() { 
  const FooterTit = '/assets/images/join_us_today.png';
  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.footerCont}>
          <img src={FooterTit} alt="" />
          <p>Embark on a fun-filled journey of learning Hindi with Sinha Academy. Explore our resources and let your child discover the beauty of the Hindi language, all for free.</p>
          <a href="#" className={styles.FooterBtn}>Join Now</a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
