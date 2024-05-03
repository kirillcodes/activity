import { CSSProperties, ChangeEvent } from "react";

type Props = {
  type?: "text" | "password";
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
};

export const Input: React.FC<Props> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  style,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        className="w-full p-2 bg-gray-50 rounded-md outline-none focus:border-gray-300 border-2"
      />
    </>
  );
};
