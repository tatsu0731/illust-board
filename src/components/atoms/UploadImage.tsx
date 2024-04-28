import { useState } from "react";
import storage from "../../Firebase/firebaseStorage";
import { ref, uploadBytes } from "firebase/storage";


export default function UploadImage() {
    const onFileUploadToFirebase = (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, "image/" + file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    };
    // const [file, setFile] = useState(null);

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setFile(e.target.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };
    return(
        <div className="mb-4 flex flex-col">
            <label htmlFor="file-upload" className="font-bold text-xs mb-1 cursor-pointer">画像を追加</label>
            <input type="file" id="file-upload" className="hidden" onChange={onFileUploadToFirebase} accept=".png, .jpeg, .jpg"/>
        </div>
    )
};
