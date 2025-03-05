import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Faq = [
    {
      question: "How do your solutions simplify product understanding?",
      answer:
        "We make complex technical details accessible through immersive 3D, XR, and VR experiences, transforming static information into engaging, interactive models. This enhances learning, reduces misunderstandings, and ensures better retention of product features.",
    },
    {
      question: "Can your platform help accelerate sales cycles?",
      answer:
        "Yes! Our interactive demos captivate clients, offering hands-on experiences that foster confidence in your products. By reducing the time needed for explanations and increasing engagement, our solutions drive faster decision-making and deal closures.",
    },
    {
      question: "Are your solutions cost-effective?",
      answer:
        "Absolutely! Our digital tools minimize the need for physical prototypes, printed materials, and on-site visits, leading to significant cost savings. With virtual demonstrations and remote collaboration capabilities, businesses can scale efficiently while optimizing their resources.",
    },
    {
      question: "Do you have experience across multiple industries?",
      answer:
        "Yes, we have a proven track record of success across various sectors, including manufacturing, healthcare, energy, automotive, and consumer electronics. Our adaptable solutions cater to diverse industry needs, ensuring seamless integration and impactful results.",
    },
  ];

  return (
    <div>
      <section className="py-12 ">
        <h2 className="text-center text-2xl font-bold text-[#4F8A8B]">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 mb-6" >
          Delivering Excellence with Innovation and Reliability
        </p>

        <div>
          {Faq.map((faqs, index) => (
            <div key={index} className=" faq-cart rounded-lg overflow-hidden shadow-lg">
              <button
                className="w-full faq-btn flex justify-between items-center bg-white"
                onClick={() => toggle(index)}
              >
                <span className="text-[#4F8A8B] font-medium">{faqs.question}</span>
                <span className="text-xl text-[#4F8A8B]">{openIndex === index ?  "x" : "+"}</span>
              </button>

              
              <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[200px] opacity-100 faq-ans" : "max-h-0 p-0  opacity-0"
              }`}
            >

              <p className="text-gray-700 text-sm">{faqs.answer}</p>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
