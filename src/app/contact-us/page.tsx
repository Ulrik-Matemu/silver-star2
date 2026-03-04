import ContactForm from "../components/contact-form";
import OfficeSection from "../components/office-section";
import ProductHero from "../components/product-hero";

export default async function ContactUsPage() {
    return (
        <>
        <ProductHero
            title="Contact Us"
            description="Have questions or need assistance? Our team is here to help. Reach out to us through the contact form below, and we'll get back to you as soon as possible."
            backgroundImage="/bg-contatti-1560.jpg"
        />
        <ContactForm />
        <OfficeSection />
        </>
    );
}