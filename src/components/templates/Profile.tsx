import Image from "next/image";
import avater from "../../../public/avater.jpg";

export default function Profile() {
    return(
        <section className="flex justify-center items-center p-2 gap-2">
            <div className="w-80">
                <div className="flex justify-center gap-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-full border-gray-300 border-2">
                        {/* <Image
                            src={avater}
                            alt="avater"
                            width={30}
                            height={30}
                            className="bg-center rounded-full"
                        /> */}
                    </div>
                    <div className=" w-60">
                        <h2 className="font-bold text-base text-slate-700">本松達裕</h2>
                        <p className="text-gray-500 text-xs">こんにちは、都内で文系大学生をしながら絵を趣味で描いています。</p>
                    </div>
                </div>
            </div>
        </section>
    )
};
