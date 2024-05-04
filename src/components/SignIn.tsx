"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { auth } from "@/app/firebase";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          console.log(user, token);
          dispatch(
            setUser({
              id: user.uid,
              token: token,
              email: user.email,
            }),
          );
        });
      })
      .catch((error: any) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      {!!error && <p>{error}</p>}
      <Form title="Sign in" handleSubmit={handleLogin} />
    </div>
  );
};
