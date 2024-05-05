"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";

export default function Verificaiton() {
  const route = useRouter();

  return (
    <div>
      <p className="text-center mb-3">
        We have sent a letter to your email. Please confirm your registration
      </p>
      <Button name="Back to login" onClick={() => route.push("/")} />
    </div>
  );
}
