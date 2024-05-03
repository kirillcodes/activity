import { ActivityItem } from "@/components";

export default function Manage() {
  return (
    <div>
      <button className="w-full h-10 bg-gray-100 rounded-md text-2xl">+</button>
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
