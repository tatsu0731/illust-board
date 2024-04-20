export default function UploadImage() {
    return(
        <div className="mb-4 flex flex-col">
            <label htmlFor="title" className="font-bold text-xs mb-1">画像を追加</label>
            <div className="w-80 h-60 bg-slate-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">画像アップロード</p>
            </div>
        </div>
    )
};
