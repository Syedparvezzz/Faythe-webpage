import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
    style={{
        fontFamily: "Manrope, sans-serif",
        padding: "3rem 1rem",
        maxWidth: "1100px",
        margin: "0 auto",
        color: "#333",
        lineHeight: "1.6"
      }}
    >
      <h1 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem" }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: "0.9rem", marginBottom: "2rem", color: "#666" }}>
        Last updated: May 15, 2025
      </p>

      <Section
        title="1. Introduction"
        content="We are committed to protecting your personal information and your right to privacy. 
        This Privacy Policy outlines how we collect, use, and protect your information when you 
        use our website."
      />

      <Section
        title="2. Information We Collect"
        content="We may collect personal information that you voluntarily provide to us such as 
        your name, email address, and other contact details. We also collect non-personal 
        information such as browser type and device information."
      />

      <Section
        title="3. How We Use Your Information"
        content="We use your information to provide, operate, and maintain our website, improve 
        user experience, communicate with you, and comply with legal obligations."
      />

      <Section
        title="4. Sharing Your Information"
        content="We do not share your personal information with third parties except when necessary 
        to provide services, comply with the law, or protect our rights."
      />

      <Section
        title="5. Cookies and Tracking"
        content="We may use cookies and similar tracking technologies to track the activity on our 
        site and hold certain information to improve user experience."
      />

      <Section
        title="6. Data Security"
        content="We take reasonable steps to protect your personal information. However, no method 
        of transmission over the Internet is 100% secure."
      />

      <Section
        title="7. Your Rights"
        content="You have the right to access, update, or delete your personal information. You may 
        also opt out of receiving marketing communications from us."
      />

      <Section
        title="8. Changes to This Privacy Policy"
        content="We may update our Privacy Policy from time to time. Changes will be posted on this 
        page with an updated effective date."
      />

      <p style={{ fontSize: "0.9rem", marginTop: "2rem", color: "#555" }}>
        If you have any questions about this Privacy Policy, please contact us at
        example@example.com.
      </p>
    </div>
  );
};

const Section = ({ title, content }) => (
  <div style={{ marginBottom: "1.5rem" }}>
    <h2 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>
      {title}
    </h2>
    <p style={{ fontSize: "0.9rem", color: "#555" }}>{content}</p>
  </div>
);

export default PrivacyPolicy;
