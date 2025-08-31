import { NavLink, useLocation } from "react-router-dom";
const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Contact",
    path: "/Contact",
  },
  {
    id: 3,
    title: "About me",
    path: "/Aboutme",
  },
  {
    id: 4,
    title: "Skills",
    path: "/Skills",
  },
  {
    id: 5,
    title: "Experience",
    path: "/Experience",
  },
];
export default function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="flex w-[100%] pl-7 h-15 bg-gradient-to-r from-violet-500 to to-fuchsia-600 justify-between items-center fixed z-2">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            className={`font-bold ${
              location.pathname === item.path
                ? "underline text-black"
                : "text-white"
            }`}
            to={item.path}
          >
            {item.title}
          </NavLink>
        ))}

        <NavLink to="/ChatButton">
          <button className="bg-white p-3 rounded-[25px] font-bold absolute right-3 top-1.75 text-sm cursor-pointer">
            Let's Chat
          </button>
        </NavLink>

        <div></div>
      </div>
    </nav>
  );
}
