import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./FaqSection.css";
import faqImg from "../../assets/FAQs.svg";

const faqs = [
  {
    question: "What makes this app different?",
    answer:
      "Unlike typical social media, this app is built on faith. It’s a safe space where you can connect, pray, and grow spiritually.",
  },
  {
    question: "Is the app free to use?",
    answer: "Absolutely! Most of the core features — including the Prayer Wall, and community groups — are completely free. Additional features may be available in the future through premium options.",
  },
  {
    question: "Can I share my prayer requests with the community?",
    answer: "Yes, absolutely! You can post your prayer needs on the Prayer Wall, and other users will be able to support you with prayers and uplifting comments.",
  },
  {
    question: "What are Community Groups used for?",
    answer: "Community Groups help you find and connect with believers who share your interests or church community.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-wrapper" id="faqs" data-aos="fade-up">
      <div className="faq-section">
        <div className="faq-left" data-aos="fade-up">
          {/* <h4 className="faq-tag">FAQS</h4> */}
          <h2 className="faq-title">Have Questions? Look Here</h2>
          <p className="faq-subtitle">
           If you have a question about faythe, you are at the right place. <br />
           We're here to guide you along.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
                // data-aos="fade-up" 
                data-aos-delay={index * 100} // delay to stagger the effects
              >
                <div className="faq-question">
                  {faq.question}
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>

        </div>

        <div className="faq-right">
          <div className="mockup-background">
            <div className="phone-mockup">
              <img src={faqImg} alt="App Preview" className="mockup-img" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
