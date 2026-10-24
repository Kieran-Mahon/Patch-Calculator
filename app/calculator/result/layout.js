import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <div>
      <Suspense>
        {children}
      </Suspense>
    </div>
  );
}

