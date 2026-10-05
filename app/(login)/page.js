import Image from "next/image";
import Login from "./components/Login";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-blue-100">

        <h1>test</h1>

        <Image
          className="h-[100px] w-[100px]"
          src="/tempimg.jpg"
          alt="Next.js logo"
          width={100}
          height={100}
          priority
        />

        <Login />

    </div>
  );
}
