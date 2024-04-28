import { auth } from "@/Firebase/firebase";
import Logo from "@/components/atoms/Logo";
import LogInSection from "@/components/organisms/LogInSection";
import Footer from "@/components/templates/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
  };

  return (
    <main className="flex flex-col items-center">
      <Logo />
      <LogInSection email={email} password={password} onLogin={onSubmit} />
      <Footer />
    </main>
  );
}
