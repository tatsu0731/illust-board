import PostActionSection from "@/components/molecules/PostActionSection";
import SettingSection from "@/components/molecules/SettingSection";
import Board from "@/components/templates/Board";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Profile from "@/components/templates/Profile";

export default function Home() {
  return (
    <main>
      <Header />
      <Profile />
      <SettingSection />
      <Board />
      <PostActionSection />
      <Footer />
    </main>
  );
}
