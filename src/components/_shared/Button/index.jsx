export default function Button({ text, className }) {
  return (
    <>
      <button
        className={`flex py-2 px-6 bg-yellow-400 text-black w-fit rounded ${className}`}
      >
        {text}
      </button>
    </>
  );
}
