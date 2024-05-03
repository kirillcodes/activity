import { CSSProperties } from "react";

type Props = {
  name: string;
  days: string;
  style?: CSSProperties;
};

export const ActivityItem: React.FC<Props> = ({ name, days, style }) => {
  return (
    <div
      className="flex justify-between border-2 border-gray-300 rounded-md px-5 py-2 hover:cursor-pointer select-none hover:bg-gray-300 transition-colors"
      style={style}
    >
      <h2>{name}</h2>
      <div>{days}</div>
    </div>
  );
};
