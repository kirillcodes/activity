"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

type Props = {
  title: string;
  handleSubmit: (email: string, password: string) => void;
};

export const Form: React.FC<Props> = ({ title, handleSubmit }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>{title}</h2>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => handleEmail(e)}
        value={email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => handlePassword(e)}
        value={password}
      />
      <Button name={title} onClick={() => handleSubmit(email, password)} />
    </div>
  );
};
