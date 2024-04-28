export default function ConfirmPostButtonSection({onClick}) {
    return(
        <div className="flex justify-center mb-4">
                <button className="py-2 px-24 text-white font-bold bg-blue-400 rounded-lg hover:bg-opacity-70 hover:text-opacity-70" onClick={onClick}>投稿する</button>
        </div>
    )
};