"use client";

import { useState } from "react";

const COUNTRIES = [
  "Arusha",
  "Dar es Salaam",
  "Dodoma",
  "Geita",
  "Iringa",
  "Kagera",
  "Katavi",
  "Kigoma",
  "Kilimanjaro",
  "Lindi",
  "Manyara",
  "Mara",
  "Mbeya",
  "Morogoro",
  "Mtwara",
  "Mwanza",
  "Njombe",
  "Pwani",
  "Rukwa",
  "Ruvuma",
  "Shinyanga",
  "Simiyu",
  "Singida",
  "Songwe",
  "Tabora",
  "Tanga",
  "Zanzibar North",
  "Zanzibar Central/South",
  "Zanzibar Urban/West",
  "Pemba North",
  "Pemba South",
];

const MESSAGE_TYPES = [
  "General Inquiry",
  "Product Information",
  "Technical Support",
  "Sales Request",
  "Partnership Opportunity",
  "Complaint",
  "Other",
];

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  other: string;
  messageType: string;
  message: string;
}

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  company: "",
  position: "",
  phone: "",
  email: "",
  country: "",
  city: "",
  other: "",
  messageType: "",
  message: "",
};

// ─── Replace this with your real API call ───────────────────────────────────
async function submitContactForm(data: ContactFormData): Promise<void> {
  // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
  console.log("Contact form submitted:", data);
}
// ────────────────────────────────────────────────────────────────────────────

const inputStyle = (focused: string | null, name: string): React.CSSProperties => ({
  width: "100%",
  padding: "14px 16px",
  fontSize: "0.9rem",
  color: "#222",
  backgroundColor: "#fff",
  border: `1px solid ${focused === name ? "#1a6fa8" : "#d8d8d8"}`,
  borderRadius: "8px",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
  fontFamily: "inherit",
});

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const required: (keyof ContactFormData)[] = [
      "firstName", "lastName", "company", "position",
      "phone", "email", "country", "city", "messageType", "message",
    ];
    const newErrors: Partial<ContactFormData> = {};
    required.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fieldProps = (name: keyof ContactFormData) => ({
    name,
    value: formData[name],
    onChange: handleChange,
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
  });

  if (submitted) {
    return (
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✓</div>
            <h2 style={{ ...headingStyle, marginBottom: "12px" }}>Message Sent!</h2>
            <p style={subtitleStyle}>Thank you for contacting us. We will get back to you soon.</p>
            <button
              onClick={() => setSubmitted(false)}
              style={{ ...submitBtnStyle, marginTop: "24px" }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={headingStyle}>Silverstar Resource Company Limited</h1>
          <p style={subtitleStyle}>
            Feel free to contact us by filling the below form and we will get back to you soon.
          </p>
        </div>

        {/* Personal Details Grid */}
        <div style={gridTwoStyle}>
          <div>
            <input placeholder="First Name*" style={inputStyle(focused, "firstName")} {...fieldProps("firstName")} />
            {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
          </div>
          <div>
            <input placeholder="Last Name*" style={inputStyle(focused, "lastName")} {...fieldProps("lastName")} />
            {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
          </div>
          <div>
            <input placeholder="Company*" style={inputStyle(focused, "company")} {...fieldProps("company")} />
            {errors.company && <p style={errorStyle}>{errors.company}</p>}
          </div>
          <div>
            <input placeholder="Position*" style={inputStyle(focused, "position")} {...fieldProps("position")} />
            {errors.position && <p style={errorStyle}>{errors.position}</p>}
          </div>
          <div>
            <input placeholder="Phone*" type="tel" style={inputStyle(focused, "phone")} {...fieldProps("phone")} />
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>
          <div>
            <input placeholder="Email*" type="email" style={inputStyle(focused, "email")} {...fieldProps("email")} />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>

          {/* Country dropdown */}
          <div style={{ position: "relative" }}>
            <select
              style={{
                ...inputStyle(focused, "country"),
                appearance: "none",
                color: formData.country ? "#222" : "#999",
                cursor: "pointer",
                paddingRight: "40px",
              }}
              {...fieldProps("country")}
            >
              <option value="" disabled>Region</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <svg
              style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              width="16" height="16" viewBox="0 0 16 16" fill="none"
            >
              <path d="M3 6l5 5 5-5" stroke="#1a6fa8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {errors.country && <p style={errorStyle}>{errors.country}</p>}
          </div>

          <div>
            <input placeholder="Other - Please specify" style={inputStyle(focused, "city")} {...fieldProps("city")} />
            {errors.city && <p style={errorStyle}>{errors.city}</p>}
          </div>
        </div>

        {/* Other field - full width */}
        

        {/* Message section */}
        <div style={{ marginTop: "36px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 400, color: "#1a1a2e", marginBottom: "16px" }}>
            Message
          </h2>

          {/* Message type dropdown */}
          <div style={{ position: "relative", marginBottom: "16px" }}>
            <select
              style={{
                ...inputStyle(focused, "messageType"),
                appearance: "none",
                color: formData.messageType ? "#222" : "#999",
                cursor: "pointer",
                paddingRight: "40px",
              }}
              {...fieldProps("messageType")}
            >
              <option value="" disabled>Type of message*</option>
              {MESSAGE_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <svg
              style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              width="16" height="16" viewBox="0 0 16 16" fill="none"
            >
              <path d="M3 6l5 5 5-5" stroke="#1a6fa8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {errors.messageType && <p style={errorStyle}>{errors.messageType}</p>}
          </div>

          {/* Textarea */}
          <div>
            <textarea
              placeholder="Your message here"
              rows={5}
              style={{
                ...inputStyle(focused, "message"),
                resize: "vertical",
                minHeight: "120px",
              }}
              {...fieldProps("message")}
            />
            {errors.message && <p style={errorStyle}>{errors.message}</p>}
          </div>
        </div>

        <p style={{ fontSize: "0.78rem", color: "#888", marginTop: "10px" }}>
          *All fields are mandatory
        </p>

        {/* Privacy notice */}
        <div style={{ marginTop: "28px" }}>
          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px" }}>
            Processing of personal information
          </p>
          <p style={{ fontSize: "0.82rem", color: "#555", fontStyle: "italic", margin: 0 }}>
            *Personal information will be used for future Silverstar Resource Company Limited communications.
          </p>
        </div>

        {/* Submit button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "36px" }}>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              ...submitBtnStyle,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const sectionStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#f5f5f5",
  padding: "64px 24px 80px",
  fontFamily: "'Barlow', 'Helvetica Neue', Arial, sans-serif",
  boxSizing: "border-box",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "860px",
  margin: "0 auto",
};

const headingStyle: React.CSSProperties = {
  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
  fontWeight: 800,
  color: "#1a1a2e",
  margin: "0 0 12px",
  lineHeight: 1.2,
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "#555",
  margin: 0,
  lineHeight: 1.6,
};

const gridTwoStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const errorStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  color: "#e53e3e",
  margin: "4px 0 0 2px",
};

const submitBtnStyle: React.CSSProperties = {
  padding: "14px 48px",
  borderRadius: "50px",
  backgroundColor: "#1a6fa8",
  color: "#fff",
  fontSize: "0.82rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  border: "none",
  textTransform: "uppercase" as const,
  transition: "background-color 0.25s ease",
};