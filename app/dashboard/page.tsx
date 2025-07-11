"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    }
  }, []);

  return (
    <main>
      <h1>Welcome to the Dashboard</h1>
    </main>
  );
}
