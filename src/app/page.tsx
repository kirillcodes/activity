"use client";

import { Button, SignIn, SignUp } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const route = useRouter();
  const { isAuth } = useAuth();
  const [signMethod, setSignMethod] = useState<"in" | "up" | null>(null);

  const handleSignIn = () => {
    setSignMethod("in");
  };

  const handleSignUp = () => {
    setSignMethod("up");
  };

  useEffect(() => {
    isAuth && route.push("/all");
  }, [isAuth, route]);

  if (signMethod === null) {
    return (
      <div className="flex justify-center items-center">
        <Button name="Sign In" onClick={handleSignIn} />
        <span className="text-lg mx-3">or</span>
        <Button name="Sign Up" onClick={handleSignUp} />
      </div>
    );
  }

  return (
    <div>
      {signMethod === "in" ? (
        <div>
          <SignIn />
          <div className="my-2 text-lg text-center">or</div>
          <Button name="Sign Up" onClick={() => handleSignUp()} />
        </div>
      ) : (
        <div>
          <SignUp />
          <div className="my-2 text-lg text-center">or</div>
          <Button name="Sign In" onClick={() => handleSignIn()} />
        </div>
      )}
    </div>
  );
}
