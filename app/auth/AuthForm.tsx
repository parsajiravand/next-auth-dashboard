"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AuthForm.module.scss";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function AuthForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (number: string) => {
    const iranPhoneRegex = /^09\d{9}$/;
    return iranPhoneRegex.test(number);
  };

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("شماره موبایل معتبر نیست");
      return;
    }

    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data.results[0]));
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h1>ورود</h1>
      <Input
        label="شماره موبایل"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="09xxxxxxxxx"
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}
