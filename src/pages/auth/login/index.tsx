import Logo from "@/components/atoms/Logo";
import LogInSection from "@/components/organisms/LogInSection";
import Footer from "@/components/templates/Footer";

export default function Login() {

  return (
    <main className="flex flex-col items-center">
      <Logo />
      <LogInSection />
      <Footer />
    </main>
  );
}
