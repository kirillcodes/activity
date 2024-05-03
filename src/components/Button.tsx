import { CSSProperties } from "react";

type Props = {
  name: string;
  onClick?: () => void;
  checked?: boolean;
  style?: CSSProperties;
};

export const Button: React.FC<Props> = ({ name, onClick, checked, style }) => {
  return (
    <>
      <button
        className={`w-full h-10 px-2 bg-gray-100 rounded-md text-2xl hover:bg-gray-300 border-2 transition-colors ${checked && "bg-gray-300 border-gray-100"}`}
        onClick={onClick}
        style={style}
      >
        {name}
      </button>
    </>
  );
};
