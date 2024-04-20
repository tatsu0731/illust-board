import InputDescription from "../atoms/InputDescription";
import InputTitle from "../atoms/InputTitle";
import UploadImage from "../atoms/UploadImage";

export default function UploadSection() {
    return(
        <section className="flex flex-col items-center mb-10">
            <UploadImage />
            <InputTitle />
            <InputDescription />
        </section>
    )
};
