import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const NavLink = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Services",
      path: "#",
    },
    {
      id: 3,
      name: "About",
      path: "#",
    },
    {
      id: 4,
      name: "Our Team",
      path: "#",
    },
    {
      id: 5,
      name: "Contact Us",
      path: "#",
    },
  ];
  return (
    <nav className="bg-white">
      <div className="container py-10 flex  justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl ">E-johar Education</h1>
        </div>

        {/* Menu section */}
        <div className="hidden  lg:block">
          <ul className="flex items-center justify-between gap-3 ">
            {NavLink.map((menu) => (
              // eslint-disable-next-line react/jsx-key
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group "
                >
                  <div className="w-2 h-2 bg-secondary absolute mr-2 left-1/2 rounded-full -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.name}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign up</button>
          </ul>
        </div>

        {/* Mobile hambuger menu  section */}
        <div className="lg:hidden">
          <IoMenu className="text-4xl" />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
