import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { FaClock, FaTachometerAlt, FaFileAlt, FaCogs } from "react-icons/fa";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Layout({ children }) {
  const { setTheme, theme } = useTheme('light');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-30 bg-gray-900 text-white lg:block lg:w-60 transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-60 h-full bg-gray-900 p-4">
          {sidebarOpen && (
            <div className="mb-6 flex items-center gap-2">
              <AcmeLogo />
              <p className="font-bold text-xl">HORAS</p>
            </div>
          )}
          <nav>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
                <FaClock className="text-lg" />
                <Link href="#" className="text-gray-300 hover:text-white">
                  Horas
                </Link>
              </li>
              <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
                <FaTachometerAlt className="text-lg" />
                <Link href="#" className="text-gray-300 hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
                <FaFileAlt className="text-lg" />
                <Link href="#" className="text-gray-300 hover:text-white">
                  Reportes
                </Link>
              </li>
              <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
                <FaCogs className="text-lg" />
                <Link href="#" className="text-gray-300 hover:text-white">
                  Configuración
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-60" : "ml-0"}`}>
        {/* Navbar */}
        <Navbar isBordered>
          <div className="flex items-center gap-4">
            {/* Hamburger button */}
            <NavbarItem>
              <Button onClick={toggleSidebar} auto flat>
                <Bars3Icon className="h-6 w-6 text-gray-800" />
              </Button>
            </NavbarItem>

            {/* Logo (conditionally displayed) */}
            {!sidebarOpen && (
              <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit ml-2">HORAS</p>
              </NavbarBrand>
            )}
          </div>

          <NavbarContent justify="end" className="flex items-center gap-4">
            <NavbarItem>
              <Link href="#">Iniciar sesión</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Registrarse
              </Button>
            </NavbarItem>

            <NavbarItem>
              <Button onClick={toggleTheme} auto flat>
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-blue-500" />
                )}
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        {/* Main content section */}
        <main>{children}</main>
      </div>
    </div>
  );
}
