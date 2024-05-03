type Props = {
  name: string;
  onClick?: () => void;
  checked?: boolean;
};

export const Button: React.FC<Props> = ({ name, onClick, checked }) => {
  return (
    <>
      <button
        className={`w-full h-10 bg-gray-100 rounded-md text-2xl hover:bg-gray-300 border-2 transition-colors ${checked && "bg-gray-300 border-gray-100"}`}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};
