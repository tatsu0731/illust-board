import { useRouter } from "next/router";

export default function Information() {

    const router = useRouter();

    const handleinformation = async () => {
        router.push('/faq');
    }
    return(
        <button onClick={handleinformation} className="text-xs text-green-200">ヘルプ</button>
    )
};