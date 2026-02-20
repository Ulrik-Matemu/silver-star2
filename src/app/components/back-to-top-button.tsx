"use client"
import React, { useEffect, useState } from "react";

type Props = {
    threshold?: number; // how far to scroll before showing (px)
    bottom?: string; // CSS bottom position
    right?: string; // CSS right position
    size?: number; // square button size in px
    className?: string;
    ariaLabel?: string;
};

const BackToTopButton: React.FC<Props> = ({
    threshold = 300,
    bottom = "2rem",
    right = "2rem",
    size = 48,
    className,
    ariaLabel = "Back to top",
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const onScroll = () => {
            const scrolled = window.pageYOffset ?? document.documentElement.scrollTop;
            setVisible(scrolled > threshold);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    const handleClick = () => {
        if (typeof window === "undefined") return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const buttonStyle: React.CSSProperties = {
        position: "fixed",
        right,
        bottom,
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9999,
        background: "rgba(0,0,0,0.7)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 200ms ease, transform 200ms ease",
        zIndex: 9999,
        padding: 0,
    };

    const focusStyle: React.CSSProperties = {
        outline: "2px solid rgba(255,255,255,0.9)",
        outlineOffset: 2,
    };

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            title={ariaLabel}
            onClick={handleClick}
            className={className}
            style={buttonStyle}
            onKeyDown={(e) => {
                // space/enter already trigger click on button, but keep handler just in case
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick();
                }
            }}
            onFocus={(e) => {
                (e.currentTarget as HTMLButtonElement).style.outline = focusStyle.outline as string;
            }}
            onBlur={(e) => {
                (e.currentTarget as HTMLButtonElement).style.outline = "none";
            }}
        >
            {/* simple upward arrow icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={Math.round(size * 0.5)}
                height={Math.round(size * 0.5)}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M12 19V6" />
                <path d="M5 12l7-7 7 7" />
            </svg>
        </button>
    );
};

export default BackToTopButton;