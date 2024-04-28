import Logout from "@/components/atoms/Logout";
import Information from "@/components/atoms/Information";
import PostActionSection from "@/components/molecules/PostActionSection";
import SettingSection from "@/components/molecules/SettingSection";
import Board from "@/components/templates/Board";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Profile from "@/components/templates/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-72 mx-auto">
        <Profile />
        <SettingSection />
        <Board />
        <PostActionSection />
        <Logout />
        <Information />
      </main>
      <Footer />
    </>
  );
}
