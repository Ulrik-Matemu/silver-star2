import BackToTopButton from "@/app/components/back-to-top-button";

export default async function ContactUsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {children}
                <BackToTopButton />
            </main>
        </div>
    );
}