export default function Button({label, onClick}){
    return (
        <button onClick={onClick} type="button" className="w-full bg-black text-white py-3 text-2xl rounded-xl hover:bg-gray-800 transition">{label}</button>
    )
}

