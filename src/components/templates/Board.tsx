import Illust from "../atoms/Illust";

export default function Board() {
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
        </section>
    )
};
