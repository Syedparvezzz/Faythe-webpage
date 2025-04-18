import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import "./FaqSection.css";
import featuresImg from "../../assets/features.png";

const faqs = [
  {
    question: "How does it work ?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    question: "Do I need a designer to use Appever ?",
    answer: "No, our platform is designed for everyone including non-designers.",
  },
  {
    question: "What do I need to do to start selling ?",
    answer: "Just sign up, create your listing, and start promoting your product.",
  },
  {
    question: "What happens when I receive an order ?",
    answer: "You’ll get notified and can manage everything from your dashboard.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // one open by default

  const toggleFAQ = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index); // always switch, never close all
    }
  };

  return (
    <section className="faq-wrapper" id="faqs">
      <div className="faq-section">
        <div className="faq-left">
          <h4 className="faq-tag">FAQS</h4>
          <h2 className="faq-title">Have Questions? Look Here</h2>
          <p className="faq-subtitle">
            Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>

          <a href="#" className="faq-more">
            Find Out More <ArrowRight size={20} />
          </a>
        </div>

        <div className="faq-right">
          <div className="mockup-background">
            <div className="phone-mockup">
              <img src={featuresImg} alt="App Preview" className="mockup-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
