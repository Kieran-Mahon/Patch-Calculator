import Login from "./components/Login";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">

      <h1>Patch Path Finder</h1>
      
      <Image
          className="h-[200px] w-[200px]"
          src="/tempimg.jpg"
          alt="Next.js logo"
          width={200}
          height={200}
          priority
        />

      <Login />
    </div>
  )
}
