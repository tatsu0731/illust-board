export default function InputDescription({setDescription}) {
    return(
        // 後にtextareに変更したい
        <div className="mb-4 flex flex-col">
            <label htmlFor="description" className="font-bold text-xs mb-1">説明</label>
            <input type="text" className="rounded py-1 px-2 bg-slate-100 w-80" placeholder="説明を入力" name="description" id="description" onChange={(e) => setDescription(e.target.value)}/>
        </div>
    )
};
