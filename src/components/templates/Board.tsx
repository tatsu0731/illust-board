import { useEffect } from "react";
import Illust from "../atoms/Illust";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/Firebase/firebase";
import Image from "next/image";

export default function Board() {
    useEffect(() => {
        const fetch = async () => {
            console.log(await getDownloadURL(ref(storage, "image/スクリーンショット 2024-01-08 7.12.48.png")))
        }
        fetch()
    }, [])

    return(
        <section className="flex justify-center">
            <div className="grid grid-cols-3 gap-1">
                <Illust />
                <Illust />
                <Illust />
                <Illust />
                <Illust />
                <Illust />
            </div>
            <Image
            height={50}
            width={50}
            alt="画像"
            src={'https://firebasestorage.googleapis.com/v0/b/illust-board.appspot.com/o/image%2FIMG_3848.jpeg?alt=media&token=d96bdd83-3e8b-4450-8231-921ffe064448'}
            />
            <Image
            height={50}
            width={50}
            alt="画像"
            src={'https://firebasestorage.googleapis.com/v0/b/illust-board.appspot.com/o/image%2FIMG_3848.jpeg?alt=media&token=d96bdd83-3e8b-4450-8231-921ffe064448'}
            />
        </section>
    )
};
