import Logo from "@/components/atoms/Logo";
import LogInSection from "@/components/organisms/LogInSection";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <Logo />
            <LogInSection />
            <Footer />
        </main>
    );
}
