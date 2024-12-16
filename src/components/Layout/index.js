import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, Bars3Icon } from "@heroicons/react/24/outline"; // Icono de hamburguesa

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
  const { setTheme, theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true); // Estado para mostrar/ocultar el sidebar

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Alterna la visibilidad del sidebar
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 bg-opacity-75 lg:bg-transparent lg:block lg:w-60 transition-transform duration-300 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-60 h-full bg-gray-800 text-white p-4">
          <div className="mb-6">
            <AcmeLogo />
            <p className="font-bold text-xl">HORAS</p>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Horas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Reportes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Configuración
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-0'}`}>
        {/* Navbar with Hamburger for mobile */}
        <Navbar isBordered>
          <div className="flex items-center gap-4">
            {/* Button to open sidebar */}
            <NavbarItem>
              <Button
                onClick={toggleSidebar} // Abre o cierra el sidebar
                auto
                flat
              >
                <Bars3Icon className="h-6 w-6 text-gray-800" />
              </Button>
            </NavbarItem>

            <NavbarBrand>
              <AcmeLogo />
              <p className="font-bold text-inherit ml-2">HORAS</p>
            </NavbarBrand>
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
