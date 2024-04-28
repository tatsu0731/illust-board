import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { auth, db, storage } from "@/Firebase/firebase";
import Image from "next/image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


export default function Board() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
            const q = query(
                collection(db, "images"),
                where("userId", "==", user.uid)
            );
            const querySnapshot = await getDocs(q);
            const tmpImages = [];
            querySnapshot.forEach(async (doc) => {
                tmpImages.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            for (const image of tmpImages) {
                image.url = await getDownloadURL(ref(storage, image.imagePath));
            }
            setImages(tmpImages);
            } else {
            }
        });
    },[]);

    return (
        <section className="flex justify-center">
        <div className="grid grid-cols-3 gap-1">
            {images.map((image) => {
            return <Image key={image.id} height={80} width={80} alt="画像" src={image.url} />
            })}
        </div>
        </section>
    );
}
