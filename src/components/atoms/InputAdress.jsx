export default function InputAdress() {
    return(
        <div className="mb-4 flex flex-col">
            <label htmlFor="title" className="font-bold text-xs mb-1">メールアドレス</label>
            <input type="mail" className="rounded py-1 px-2 bg-slate-100 w-80" placeholder="メースアドレスを入力" name="adress" id="adress"/>
        </div>
    )
};
