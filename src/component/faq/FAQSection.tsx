import { useState } from "react";
import "./FAQSection.css";
import FaqImage from "../../assets/faq.svg";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqItems: FAQItem[] = [
//   {
//     question: "How do I book a car?",
//     answer:
//       "You can book a car through our website by selecting your package and filling out the form.",
//   },
//   {
//     question: "Can I hire a driver for a few hours?",
//     answer:
//       "Don’t worry, we’ve got you covered.When booking, simply provide your flight details and our driver will track your flight in real time. Even if your flight is delayed, your driver will be waiting for you and your group in the airport arrivals hall.Would you like me to make this in a short reassuring version for quick website highlights?",
//   },
//   {
//     question: "Are your cars insured?",
//     answer:
//       "All our vehicles are fully insured and meet local safety standards.",
//   },
//   {
//     question: "Can I change my booking?",
//     answer:
//       "Yes, you can modify your booking up to 24 hours before your scheduled trip.",
//   },
//   {
//     question: "Do you provide airport transfers?",
//     answer:
//       "Yes, we provide private airport transfers for Paris and surrounding areas.",
//   },
// ];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index:any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the cancellation Policy?",
      answer: "Transfers can be cancelled free of charge up to 24 hours prior to your transfer. Cancellations within 24 hours may be subject to a cancellation fee."
    },
    {
      question: "What if my flight is delayed?",
      answer: "Don’t worry, we’ve got you covered.When booking, simply provide your flight details and our driver will track your flight in real time. Even if your flight is delayed, your driver will be waiting for you and your group in the airport arrivals hall.Would you like me to make this in a short reassuring version for quick website highlights?"
    },
    {
      question: "How much will all of my cost?",
      answer: "The cost depends on your destination, vehicle type, and number of passengers. Use our instant quote calculator on the booking page to get an accurate price. All prices include taxes and tolls - no hidden fees."
    },
    {
      question: "What is provide transfer?",
      answer: "A private transfer means you'll have a dedicated vehicle and professional driver just for your group. Unlike shared shuttles, you won't wait for other passengers and can travel directly to your destination in comfort."
    },
    {
      question: "How can I pay for my booking?",
      answer: "We offer three payment options: pay cash directly to the driver upon arrival, complete online payment at the time of booking, or pay by card to the driver. All methods are secure and convenient."
    },
    {
      question: "When will I meet my driver?",
      answer: "For airport pickups, your driver will meet you in the arrivals hall holding a sign with your name. For hotel pickups, the driver will arrive at your hotel lobby at the scheduled time. You'll receive full driver details and contact information 24 hours before your transfer."
    }
  ];

  return (
    <section className="faq-section">
    <div className="faq-container">
      <div className="faq-grid">
        
        {/* Left - FAQ List */}
        <div className="faq-list-col">
          <div className="faq-header">
            <span className="faq-bar"></span>
            <h3>FAQ</h3>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
              >
                <button 
                  className={`faq-question ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className="faq-chevron" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div className="faq-answer">
                <div className="faq-divider"></div>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Eiffel Tower Image */}
        <div className="faq-image-col">
          <img 
            src={FaqImage}
            alt="Eiffel Tower" 
            className="faq-eiffel-img"
          />
        </div>

      </div>
    </div>
  </section>
  );
};

export default FAQSection;
