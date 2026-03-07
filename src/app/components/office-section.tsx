"use client";

export interface OfficeProps {
  name?: string;
  address?: string;
  secondAddress?: string;
  thirdAddress?: string;
  phone?: string;
  secondPhone?: string;
  email?: string;
  googleMapsUrl?: string;
  embedUrl?: string; // Added for the iframe source
}

const defaultOffice: OfficeProps = {
  name: "Silver Star - Mikocheni Office",
  address: "Coca-cola Road, Mikocheni,",
  secondAddress: "P. O. Box 11451,",
  thirdAddress: "Dar es Salaam, Tanzania",
  email: "info@silverstar.co.tz",
  phone: "+255 713 484 175",
  secondPhone: "+255 787 788 288",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Coca-cola+Road+Mikocheni+Dar+es+salaam",
  // Standard Google Maps Embed URL for the specific location
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.942475630656!2d39.2486!3d-6.7647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4943f972b93f%3A0x6336a5c3789304a!2sCoca%20Cola%20Rd%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1709825000000!5m2!1sen!2stz"
};

export default function OfficeSection({
  name = defaultOffice.name,
  address = defaultOffice.address,
  email = defaultOffice.email,
  googleMapsUrl = defaultOffice.googleMapsUrl,
  embedUrl = defaultOffice.embedUrl,
  phone = defaultOffice.phone,
  secondPhone = defaultOffice.secondPhone,
  secondAddress = defaultOffice.secondAddress,
  thirdAddress = defaultOffice.thirdAddress,
}: OfficeProps) {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "56px 24px 72px",
        fontFamily: "'Barlow', 'Helvetica Neue', Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Office name */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 400,
            color: "#1a1a2e",
            marginBottom: "24px",
          }}
        >
          {name}
        </h2>

        {/* Content row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Map Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#e0e0e0",
              border: "none"
            }}
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing location of ${name}`}
            />
          </div>

          {/* Info panel */}
          <div
            style={{
              minWidth: "260px",
              maxWidth: "300px",
              paddingTop: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Address */}
            <div>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: "6px",
                }}
              >
                Address
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#444",
                  margin: 0,
                }}
              >
                {address}
                <br />
                {secondAddress}
                <br />
                {thirdAddress}
              </p>
            </div>

            {/* Email */}
            <div>
             
              <a
                href={`mailto:${email}`}
                style={{
                  fontSize: "0.88rem",
                  color: "#444",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fa8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
              >
                E: {email}
              </a>
            </div>
             <div>
              
              <a
                href={`tel:${phone}`}
                style={{
                  fontSize: "0.88rem",
                  color: "#444",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fa8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
              >
                T: {phone}
                <br />
                T: {secondPhone}
              </a>
            </div>

            {/* Google Maps external link button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "13px 24px",
                borderRadius: "50px",
                backgroundColor: "#1a6fa8",
                color: "#fff",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textDecoration: "none",
                textAlign: "center",
                textTransform: "uppercase",
                transition: "background-color 0.25s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#155a8a";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a6fa8";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}