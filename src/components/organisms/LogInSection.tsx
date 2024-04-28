import Link from "next/link";
import InputAdress from "../atoms/InputAdress";
import InputPassword from "../atoms/InputPassword";
import LogInButton from "../atoms/LogInButton";
import { useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase";

export default function LogInSection() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email);
        console.log(password);
        // signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in
        //     router.push("/")
        //     console.log("Login attempt with", email, password);
        //     const user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // });
    };

    return(
        <section className="flex flex-col items-center">
            <InputAdress email={setEmail}/>
            <InputPassword password={setPassword}/>
            <LogInButton onClick={handleLogin}/>
            <Link href={'/Auth/register'}>
                <p className="text-xs text-gray-400 hover:text-opacity-70">新しく登録する</p>
            </Link>
        </section>
    )
};
