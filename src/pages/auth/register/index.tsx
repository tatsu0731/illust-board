import { doCreateUserWithEmailAndPassword } from "@/Firebase/auth";
import Logo from "@/components/atoms/Logo";
import SignUpSection from "@/components/organisms/SignUpSection";
import Footer from "@/components/templates/Footer";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(ture)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return(
        <section className="flex flex-col items-center">
            {userLoggedIn && router.push('/')}
            <Logo />
            <SignUpSection />
            <Footer />
        </section>
    )
};
