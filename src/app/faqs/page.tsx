"use client"

import { useState } from "react"
import CleanProductHero from "../components/clean-product-hero"

const faqs = [
  {
    id: 1,
    question: "What does Silverstar Resources Company Limited do?",
    answer:
      "Silverstar Resources Company Limited is a trusted provider of construction solutions, supplying high-quality building materials and professional technical support for construction projects. We specialize in products used for concrete performance, flooring systems, waterproofing, tile installation, structural repair, and bonding solutions.",
  },
  {
    id: 2,
    question: "What types of construction solutions do you provide?",
    answer: "We offer a wide range of solutions tailored to modern construction demands.",
    bullets: [
      "Concrete admixtures to improve workability, strength, and durability",
      "Waterproofing systems for roofs, foundations, and wet areas",
      "Flooring systems such as epoxy, polyurethane, and sports surfaces",
      "Tile adhesives and installation systems",
      "Concrete repair and structural strengthening materials",
      "Sealants and bonding agents",
    ],
  },
  {
    id: 3,
    question: "Do you provide technical support for your products?",
    answer:
      "Yes. Our team provides technical advice and product recommendations to ensure that the correct materials and systems are used for each application.",
  },
  {
    id: 4,
    question: "Can you help recommend the right product for my project?",
    answer:
      "Absolutely. By understanding your project requirements, site conditions, and performance expectations, we can recommend the most suitable MAPEI products and application systems.",
  },
  {
    id: 5,
    question: "What are the differences between your product options?",
    answer: "We carry a wide range of solutions to meet different project needs. For example:",
    bullets: [
      "Epoxy vs. Polyurethane flooring – Epoxy is ideal for heavy-duty, chemical-resistant floors, while polyurethane provides flexibility and UV resistance.",
      "Different waterproofing systems – Some are ideal for exposed roofs, others for foundations or wet areas.",
    ],
    footer: "Our team can guide you to select the most suitable product for your project requirements.",
  },
  {
    id: 6,
    question: "How can I request a quotation?",
    answer:
      "You can request a quotation by contacting us through our website contact form, email, or phone, and our team will respond promptly with product details and pricing.",
  },
]

export default function Faqs() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <style>{`

        .faq-section {
          background-color: #f4f6f9ff;
          padding: 80px 24px 120px;
          min-height: 60vh;
        }

        .faq-inner {
          max-width: 780px;
          margin: 0 auto;
        }

        .faq-header {
          margin-bottom: 60px;
          text-align: center;
        }

        .faq-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b08d57;
          margin-bottom: 14px;
        }

        .faq-title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 300;
          color: #1c1a17;
          letter-spacing: -0.01em;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .faq-divider {
          width: 48px;
          height: 1px;
          background: #b08d57;
          margin: 0 auto;
        }

        .faq-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid #e2ddd6;
        }

        .faq-item {
          border-bottom: 1px solid #e2ddd6;
        }

        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          padding: 28px 0;
          text-align: left;
          transition: opacity 0.2s ease;
        }

        .faq-trigger:hover {
          opacity: 0.75;
        }

        .faq-number {
          font-size: 13px;
          font-weight: 500;
          color: #b08d57;
          letter-spacing: 0.05em;
          padding-top: 3px;
          min-width: 24px;
          flex-shrink: 0;
        }

        .faq-question {
          flex: 1;
          font-size: 16px;
          font-weight: 500;
          color: #1c1a17;
          line-height: 1.5;
          letter-spacing: -0.01em;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border: 1px solid #c9c2b8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          transition: background 0.25s ease, border-color 0.25s ease;
          color: #5a5449;
        }

        .faq-item.open .faq-icon {
          background: #b08d57;
          border-color: #b08d57;
          color: #fff;
        }

        .faq-icon svg {
          width: 10px;
          height: 10px;
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-icon svg {
          transform: rotate(45deg);
        }

        .faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
          opacity: 0;
        }

        .faq-item.open .faq-body {
          max-height: 600px;
          opacity: 1;
        }

        .faq-answer {
          padding: 0 0 32px 36px;
          font-size: 15px;
          font-weight: 300;
          color: #4a4641;
          line-height: 1.8;
        }

        .faq-answer p {
          margin: 0 0 12px;
        }

        .faq-answer p:last-child {
          margin-bottom: 0;
        }

        .faq-bullets {
          list-style: none;
          padding: 0;
          margin: 12px 0;
        }

        .faq-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 10px;
          font-size: 14.5px;
          color: #4a4641;
          line-height: 1.7;
        }

        .faq-bullets li::before {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b08d57;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .faq-footer-note {
          font-size: 14.5px;
          color: #7a7368;
          font-style: italic;
          margin-top: 12px;
        }

        @media (max-width: 600px) {
          .faq-section { padding: 60px 16px 80px; }
          .faq-question { font-size: 15px; }
          .faq-answer { padding-left: 28px; }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-header">
            <p className="faq-eyebrow">Need Answers?</p>
            <h2 className="faq-title">Everything You Need to Know</h2>
            <div className="faq-divider" />
          </div>

          <ul className="faq-list">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <li key={faq.id} className={`faq-item${isOpen ? " open" : ""}`}>
                  <button className="faq-trigger" onClick={() => toggle(faq.id)} aria-expanded={isOpen}>
                    <span className="faq-number">0{faq.id}</span>
                    <span className="faq-question">{faq.question}</span>
                    <span className="faq-icon">
                      <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="5" y1="1" x2="5" y2="9" />
                        <line x1="1" y1="5" x2="9" y2="5" />
                      </svg>
                    </span>
                  </button>

                  <div className="faq-body" aria-hidden={!isOpen}>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                      {faq.bullets && (
                        <ul className="faq-bullets">
                          {faq.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {faq.footer && <p className="faq-footer-note">{faq.footer}</p>}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}