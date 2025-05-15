import React from "react";

const TermsAndConditions = () => {
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
        Terms and Conditions
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
        title="2. Intellectual Property"
        content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
        veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      />

      <Section
        title="3. User Responsibilities"
        content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
      />

      <Section
        title="4. Limitation of Liability"
        content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
        excepturi sint occaecati cupiditate non provident."
      />

      <Section
        title="5. Termination"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <Section
        title="6. Governing Law"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
        Praesent libero. Sed cursus ante dapibus diam."
      />

      <Section
        title="7. Changes to Terms"
        content="We reserve the right to modify these terms at any time. Changes will be effective 
        immediately upon posting. Continued use of the site constitutes your acceptance 
        of the updated terms."
      />

      <p style={{ fontSize: "0.9rem", marginTop: "2rem", color: "#555" }}>
        If you have any questions about these Terms, please contact us at
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

export default TermsAndConditions;
