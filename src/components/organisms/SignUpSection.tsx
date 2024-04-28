import InputAdress from "@/components/atoms/InputAdress";
import InputPassword from "@/components/atoms/InputPassword";
import RegisterButton from "@/components/atoms/RegisterButton";
import Link from "next/link";
import InputConfirmPassword from "../atoms/InputConfirmPassword";
import { auth } from "@/Firebase/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpSection() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        // console.log(userCredential.user);
        router.push("/");
    };

    return (
        <section className="flex flex-col items-center">
        <InputAdress setEmail={setEmail} />
        <InputPassword setPassword={setPassword} />
        <InputConfirmPassword />
        <RegisterButton onClick={handleRegister}/>
        <Link href={"/auth/login"}>
            <p className="text-xs text-gray-400 hover:text-opacity-70">
            ログイン画面へ戻る
            </p>
        </Link>
        </section>
    );
}
