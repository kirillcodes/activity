"use client";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Form } from "./Form";
import { useState } from "react";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

export const SignUp = () => {
  const route = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await sendEmailVerification(user)
          .then(() => {
            route.push("/verification");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch(() => {
        setError("Invalid user");
      });
  };

  return (
    <div>
      <Form title="Sign Up" handleSubmit={handleLogin} />
      {!!error && <p className="text-center mt-2 text-red-500">[ {error} ]</p>}
    </div>
  );
};
