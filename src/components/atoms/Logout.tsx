import { auth } from "@/Firebase/firebase"
import { signOut } from "firebase/auth"
import { useRouter } from "next/router";

export default function Logout() {

    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/auth/login');
    }
    return(
            <button onClick={handleLogout} className="text-xs text-slate-400 block">ログアウト</button>
    )
};