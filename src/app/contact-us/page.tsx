import ContactForm from "../components/contact-form";
import OfficeSection from "../components/office-section";
import Image from "next/image";

export default async function ContactUsPage() {
    return (
        <>
        <section className="relative w-full h-[500px] md:h-[500px] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <Image
                    src="/bg-contatti-1560.jpg"
                    alt="Product Background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/60 backdrop-brightness-75" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Contact-Us
                    </h1>

                    <p className="text-sm md:text-lg leading-relaxed opacity-90 mb-10">
                        Have questions or need assistance? Our team is here to help. Reach out to us through the contact form below, and we'll get back to you as soon as possible.
                    </p>

                    {/* Buttons */}

                </div>
            </section>
        <ContactForm />
        <OfficeSection />
        </>
    );
}