import TextInput from "@/components/TextInput";

export default function Login() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-blue-100">
        <TextInput label="Username" text="Enter your username" />
        <TextInput label="Password" text="Enter your password" />
    </div>
  );
}
