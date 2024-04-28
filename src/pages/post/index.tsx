import ConfirmPostButtonSection from "@/components/molecules/ConfirmPostButtonSection";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import UploadSection from "@/components/templates/UploadSection";

export default function Home() {
    return (
        <>
            <Header />
            <UploadSection />
            <ConfirmPostButtonSection />
            <Footer />
        </>
    );
}
