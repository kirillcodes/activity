const tabs = [
  { name: "dashboard", path: "/" },
  { name: "dashboard", path: "/" },
  { name: "dashboard", path: "/" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between py-3 px-10 bg-gray-50">
      <h1>Activity</h1>
      <div className="flex">
        {tabs.map(({ name, path }, index) => (
          <div key={index}>
            {name}, {path}
          </div>
        ))}
      </div>
    </nav>
  );
};
