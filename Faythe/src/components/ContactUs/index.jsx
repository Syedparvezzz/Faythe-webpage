import React from 'react';

const ContactUs = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>We Love to Hear from You!</h1>

      <p style={styles.phone}>+1 833 670 1200</p>
      <p style={styles.hours}>Mon–Fri: 8am–5pm CT</p>

      <a href="mailto:info@nataliemills.com" style={styles.email}>
        info@nataliemills.com
      </a>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: 'auto',
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: "'Inter', sans-serif",
    color: '#0f172a',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '20px',
  },
  phone: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '5px',
  },
  hours: {
    fontSize: '16px',
    color: '#64748b',
    marginBottom: '20px',
  },
  email: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0f172a',
    textDecoration: 'none',
  },
};

export default ContactUs;
