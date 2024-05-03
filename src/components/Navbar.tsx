import Link from "next/link";

const tabs = [
  { name: "Board", path: "/all" },
  { name: "Manage", path: "/manage" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between py-3 px-10 bg-gray-50">
      <h1>Activity</h1>
      <div className="flex gap-5">
        {tabs.map(({ name, path }, index) => (
          <Link href={path} key={index}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
