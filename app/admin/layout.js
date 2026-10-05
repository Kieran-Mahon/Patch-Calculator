import { Button } from "@/components/ui/button";

export default function RootLayout({ children }) {
  return (
    <div>
      <header className="flex items-center justify-between p-4 ">
        <Button type="button">
          LOG OUT
        </Button>
        <h1>Path Calculator</h1>
        <Button type="button">
          PATH FIND
        </Button>
      </header>
      {children}
    </div>
  );
}
