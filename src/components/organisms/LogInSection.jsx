import Link from "next/link";
import InputAdress from "../atoms/InputAdress";
import InputPassword from "../atoms/InputPassword";
import LogInButton from "../atoms/LogInButton";

export default function LogInSection() {
    return(
        <section className="flex flex-col items-center">
            <InputAdress />
            <InputPassword />
            <LogInButton />
            <Link href={'/Auth/register'}>
                <p className="text-xs text-gray-400 hover:text-opacity-70">新しく登録する</p>
            </Link>
        </section>
    )
};
