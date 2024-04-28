import Link from "next/link";
import InputAdress from "../atoms/InputAdress";
import InputPassword from "../atoms/InputPassword";
import LogInButton from "../atoms/LogInButton";
import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebase/firebase";

export default function LogInSection() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            // console.log(userCredential.user);
            router.push('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    return(
        <section className="flex flex-col items-center">
            <InputAdress setEmail={setEmail}/>
            <InputPassword setPassword={setPassword}/>
            <LogInButton onClick={handleLogin}/>
            <Link href={'/auth/register'}>
                <p className="text-xs text-gray-400 hover:text-opacity-70">新しく登録する</p>
            </Link>
        </section>
    )
};
