import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ onClick }) {
  return (
    <div className="w-full space-y-4">
      <div className="my-4 flex items-center space-x-2">
        <div className="flex-grow h-px bg-gray-300" />
        <div className="text-gray-500 text-sm">or</div>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      <button
        onClick={onClick}
        type="button"
        className="w-full border border-gray-300 py-3 text-2xl rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition font-medium text-black"
      >
        <FcGoogle className="text-3xl" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
