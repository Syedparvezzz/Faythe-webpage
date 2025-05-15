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
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
      />

      <Section
        title="2. Information We Collect"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
      />

      <Section
        title="3. How We Use Your Information"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
      />

      <Section
        title="4. Sharing Your Information"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
      />

      <Section
        title="5. Cookies and Tracking"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
      />

      <Section
        title="6. Data Security"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
      />

      <Section
        title="7. Your Rights"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
      />

      <Section
        title="8. Changes to This Privacy Policy"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, 
        nibh nec vestibulum luctus, velit libero scelerisque metus, a porttitor 
        leo ipsum a lorem. Quisque iaculis odio sed dui congue, a dignissim elit 
        tristique."
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
