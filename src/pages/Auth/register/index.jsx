import Logo from "@/components/atoms/Logo";
import SignUpSection from "@/components/organisms/SignUpSection";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";

export default function Home() {
    return(
        <section className="flex flex-col items-center">
            <Header />
            <Logo />
            <SignUpSection />
            <Footer />
        </section>
    )
};
