"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

export const SignIn = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (user && user.emailVerified) {
          user.getIdToken().then((token) => {
            dispatch(
              setUser({
                id: user.uid,
                token: token,
                email: user.email,
              }),
            );
            route.push("/all");
          });
        } else {
          setError(
            "Account registration has not been confirmed. Please check your email",
          );
        }
      })
      .catch(() => {
        setError("Wrong login or password");
      });
  };

  return (
    <div>
      <Form title="Sign In" handleSubmit={handleLogin} />
      {!!error && <p className="text-center mt-2 text-red-500">[ {error} ]</p>}
    </div>
  );
};
