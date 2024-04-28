import { addDoc, collection } from "firebase/firestore";
import InputDescription from "../atoms/InputDescription";
import InputTitle from "../atoms/InputTitle";
import UploadImage from "../atoms/UploadImage";
import { auth, db, storage } from "@/Firebase/firebase";
import { useState } from "react";
import ConfirmPostButtonSection from "../molecules/ConfirmPostButtonSection";
import { ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";

export default function UploadSection() {
    const [image, setImage] = useState<File>();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const router = useRouter();

    const addTest = async() => {
        try {
            // 画像アップロードのための記述
            const storageRef = ref(storage, "image/" + image.name);
            await uploadBytes(storageRef, image);
            // DBへの入力のための記述
            const docRef = await addDoc(collection(db, "images"), {
                userId:auth.currentUser.uid,
                title,
                description,
                imagePath: `image/${image.name}`
            });
            console.log("Document written with ID: ", docRef.id);
            router.push('/');
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }

    return(
        <section className="flex flex-col items-center mb-10">
            <UploadImage setImage={setImage}/>
            <InputTitle setTitle={setTitle}/>
            <InputDescription setDescription={setDescription}/>
            <ConfirmPostButtonSection onClick={addTest} />
        </section>
    )
};
