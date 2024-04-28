export default function InputAdress({ setEmail }) {
    return(
        <div className="mb-4 flex flex-col">
            <label htmlFor="adress" className="font-bold text-xs mb-1">メールアドレス</label>
            <input type="email" className="rounded py-1 px-2 bg-slate-100 w-80" placeholder="メースアドレスを入力" name="adress" id="adress" onChange={(e) => setEmail(e.target.value)}/>
        </div>
    )
};
