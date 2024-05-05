"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

export const SignUp = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
      })
      .catch(() => {
        setError("Invalid user");
      });
  };

  return (
    <div>
      <Form title="Sign Up" handleSubmit={handleLogin} />
      {!!error && <p className="text-center mt-2">[ {error} ]</p>}
    </div>
  );
};
