import Image from "next/image";

export default function CleanProductHero({ title, description, backgroundImage }: { title?: string; description?: string; backgroundImage?: string }) {
    return (
        <>
            <section className="relative w-full h-[500px] md:h-[500px] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                {backgroundImage && (
                    <Image
                        src={backgroundImage}
                        alt="Product Background"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/60 backdrop-brightness-75" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        {title}
                    </h1>

                    <p className="text-sm md:text-lg leading-relaxed opacity-90 mb-10">
                        {description}
                    </p>
                </div>
            </section>
        </>
    )
}