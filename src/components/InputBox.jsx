export default function InputBox({ placeholder, onChange, type = "text"}) {
  if (type === "select") {
    return (
      <div className="w-full">
        <select className="w-full px-0 py-2 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-500 text-sm">
          <option value="">{placeholder}</option>
        </select>
      </div>
    );
  }

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
