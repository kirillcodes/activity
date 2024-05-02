import { Board } from "@/components";
import { Timer } from "@/components/Timer";

export default function Dashboard() {
  return (
    <div>
      <Timer />
      <Board style={{ marginTop: 40 }} />
    </div>
  );
}
