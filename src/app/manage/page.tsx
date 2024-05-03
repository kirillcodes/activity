import { ActivityItem, Button } from "@/components";
import Link from "next/link";

export default function Manage() {
  return (
    <div>
      <Link href="/manage/add">
        <Button name="+" />
      </Link>{" "}
      <div>
        <ActivityItem
          name="Algo's"
          days="Mon, Tue, Fri"
          style={{ marginTop: 15 }}
        />
      </div>
    </div>
  );
}
