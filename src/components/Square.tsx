type SquareProps = {
  active?: boolean;
  onClick?: () => void;
};

export const Square: React.FC<SquareProps> = ({ active = true, onClick }) => {
  return (
    <div
      className={`w-4 h-4 rounded-sm m-px ${
        active ? "bg-green-500" : "bg-gray-300"
      } cursor-pointer`}
      onClick={onClick}
    ></div>
  );
};
