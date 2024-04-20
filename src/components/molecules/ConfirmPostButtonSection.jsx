import Link from "next/link";
import ConfirmPostButton from "../atoms/ConfirmPostButton";

export default function ConfirmPostButtonSection() {
    return(
        <section className="flex justify-center mb-4">
            <Link href="/post">
                <ConfirmPostButton />
            </Link>
        </section>
    )
};