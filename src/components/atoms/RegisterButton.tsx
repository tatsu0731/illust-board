export default function RegisterButton({onClick}) {
    return(
        <>
            <button className="py-2 px-24 text-white font-bold bg-blue-400 rounded-lg hover:bg-opacity-70 hover:text-opacity-70 mt-8 mb-8" onClick={onClick}>Sign up</button>
        </>
    )
};