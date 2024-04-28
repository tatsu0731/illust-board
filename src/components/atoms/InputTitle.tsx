export default function InputTitle({setTitle}) {
    return(
        <div className="mb-4 flex flex-col">
            <label htmlFor="title" className="font-bold text-xs mb-1">タイトル</label>
                <input type="text" className="rounded py-1 px-2 bg-slate-100 w-80" placeholder="タイトルを入力" name="title" id="title" onChange={(e) => setTitle(e.target.value)}/>
        </div>
    )
};
