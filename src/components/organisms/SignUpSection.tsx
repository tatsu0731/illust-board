import InputAdress from "@/components/atoms/InputAdress";
import InputPassword from "@/components/atoms/InputPassword";
import RegisterButton from "@/components/atoms/RegisterButton";
import Link from "next/link";
import InputConfirmPassword from "../atoms/InputConfirmPassword";

export default function SignUpSection() {
    return(
        <section className="flex flex-col items-center">
            <InputAdress />
            <InputPassword />
            <InputConfirmPassword />
            <RegisterButton />
            <Link href={'/Auth/login'}>
                <p className="text-xs text-gray-400 hover:text-opacity-70">ログイン画面へ戻る</p>
            </Link>
        </section>
    )
};
