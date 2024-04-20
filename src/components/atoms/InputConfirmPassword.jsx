export default function InputConfirmPassword() {
    return(
        <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="font-bold text-xs mb-1">パスワード確認</label>
            <input type="password" className="rounded py-1 px-2 bg-slate-100 w-80" placeholder="パスワードを入力" name="password" id="password"/>
        </div>
    )
};
