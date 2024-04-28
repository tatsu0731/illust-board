export default function UploadImage({setImage}) {
    return(
        <div className="mb-4 flex flex-col">
            <label htmlFor="file-upload" className="font-bold text-xs mb-1 cursor-pointer">画像を追加</label>
            <input type="file" id="file-upload" className="hidden" onChange={(e) => setImage(e.target.files[0])} accept=".png, .jpeg, .jpg"/>
        </div>
    )
};
