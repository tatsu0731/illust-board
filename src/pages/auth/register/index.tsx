import Logo from "@/components/atoms/Logo";
import SignUpSection from "@/components/organisms/SignUpSection";
import Footer from "@/components/templates/Footer";

export default function Register() {
    return(
        <section className="flex flex-col items-center">
            <Logo />
            <SignUpSection />
            <Footer />
        </section>
    )
};
