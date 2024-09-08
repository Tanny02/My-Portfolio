import { navItems } from "../data";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center fixed top-0 p-4 sm:p-6 lg:p-8 z-10">
      <ul className="flex flex-row gap-2 sm:gap-10 md:gap-12 lg:gap-16 text-blue-800 bg-black border rounded-3xl p-2 md:p-3 glassss">
        {navItems.map((item) => (
          <li key={item}>
            <a className="p-2 lg:text-lg hover:text-blue-100" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
