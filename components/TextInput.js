export default function TextInput({ label, text }) {
  
  return (
    <div className="flex flex-col w-full items-center justify-center bg-green-100">
        <div>
            <h2>{label}:</h2>
            <p>{text}</p>
        </div>
    </div>
  );
}
