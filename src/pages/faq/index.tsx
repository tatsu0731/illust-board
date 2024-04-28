import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import FAQSection from "@/components/templates/FAQSection";
import BackButtonSection from "@/components/molecules/BackButtonSection";

export default function Home() {
    return (
        <>
            <Header />
            {/* 最終的にはタイトルもコンポーネント化したいところ */}
            <div className="flex justify-center mb-4">
                <h1 className="text-xl font-bold text-gray-700">【 Illust-boardの使い方 】</h1>
            </div>
            <FAQSection
                title={'基本的な使い方を教えてください'}
                description={'普段作成しているイラストなどをアップロードするだけで大丈夫です。名刺や、各種SNSにQRコードを投稿することも可能です。'}
            />
            <FAQSection
                title={'全体公開機能がないのはどうしてですか？'}
                description={'いらぼは全体公開を目的とせず、名刺代わりに用いることを目的に作成されたためです。そのため、就活時のポートフォリオのように使用できます。'}
            />
            <FAQSection
                title={'他の画像アップロードアプリとは何が違うのでしょうか？'}
                description={'最も特徴的なものとして、QRコードを通してしか他者から閲覧できないというところにあります。'}
            />
            <FAQSection
                title={'新しく機能を追加して欲しいです'}
                description={'制作者のX（旧Twitter）にてDMをください。@tanu_cssまでどうぞ！'}
            />
            <BackButtonSection />
            <Footer />
        </>
    );
}
