"use client";

import Image from "next/image";

export interface OfficeProps {
  name?: string;
  image?: string;
  address?: string;
  email?: string;
  googleMapsUrl?: string;
}

const defaultOffice: OfficeProps = {
  name: "Silver Star - Tabuk Plant",
  image: "/mapei-uae-plant.jpg",
  address:
    "Dar es salaam, Tanzania",
  email: "info@silverstar.co.tz",
  googleMapsUrl: "https://maps.google.com",
};

export default function OfficeSection({
  name = defaultOffice.name,
  image = defaultOffice.image,
  address = defaultOffice.address,
  email = defaultOffice.email,
  googleMapsUrl = defaultOffice.googleMapsUrl,
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
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#e0e0e0",
            }}
          >
            <Image
              src={image!}
              alt={name!}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 65vw"
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
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {address}
              </p>
            </div>

            {/* Email */}
            <div>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: "6px",
                }}
              >
                Email
              </p>
              <a
                href={`mailto:${email}`}
                style={{
                  fontSize: "0.88rem",
                  color: "#444",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#1a6fa8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#444")
                }
              >
                {email}
              </a>
            </div>

            {/* Google Maps button */}
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
              Find us on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}