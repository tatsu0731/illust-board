import Link from "next/link";
import PostButton from "../atoms/PostButton";

export default function PostActionSection() {
    return(
        <section className="flex justify-center">
            <div className="w-80">
                <div className="flex justify-end">
                    <Link href="/post">
                        <PostButton />
                    </Link>
                </div>
            </div>
        </section>
    )
};