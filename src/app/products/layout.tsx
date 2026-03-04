import { HeaderNav } from "@/app/components/header-nav";
import { Footer } from "@/app/components/footer";
import BackToTopButton from "@/app/components/back-to-top-button";

export default async function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}