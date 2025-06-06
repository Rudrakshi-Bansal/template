// export default function InputBox({ placeholder, type="text", onChange}) {
//     return <div>
//       <input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" />
//     </div>
// }

export default function InputBox({ placeholder, onChange, type = "text"}) {
  return (
    <div className="mb-8">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-b-2 border-black focus:outline-none pr-1 py-1 bg-transparent placeholder-black text-xl"
        onChange={onChange}
      />
    </div>
  );
}
