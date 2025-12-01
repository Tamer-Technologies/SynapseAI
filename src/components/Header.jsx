import Logo from "../assets/icons/logo.svg";
import { authPortal, navigation } from "../constants/index";
import { Link, useLocation } from "react-router-dom";
import ButtonVariant from "./units/ButtonVariant";
import HamburgerMenu from "../assets/icons/hamburger-icon.svg?react";
import CloseMenu from "../assets/icons/close-icon.svg?react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClasses = (url) => {
    const baseClasses = "transition duration-200 active:text-primary-color2";
    const activeClass = "text-primary-color2";
    const inactiveClasses = "hover:text-primary-color1";

    return location.hash === url
      ? activeClass
      : `${inactiveClasses} ${baseClasses}`;
  };

  return (
    <header className="py-5.5 px-7.5 font-sharp fixed w-full text-gray-md text-md uppercase flex items-center gap-7 border-b border-gray-dark bg-primary-dark isolate z-50 justify-between">
      <Link to="#hero">
        <img src={Logo} alt="logo" />
      </Link>

      <ButtonVariant
        className="p-5 z-50 navbar:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseMenu /> : <HamburgerMenu />}
      </ButtonVariant>

      <div
        className={`${
          !isMenuOpen && "hidden"
        } absolute left-0 top-0 w-full pt-25 navbar:p-0 flex flex-col gap-7 items-center navbar:justify-center bg-primary-dark h-dvh navbar:static navbar:flex navbar:flex-row navbar:h-full`}
      >
        <nav className="mx-auto">
          <ul className="flex flex-col gap-7 navbar:flex-row">
            {navigation.map((item) => (
              <li key={item.id} className={getLinkClasses(item.url)}>
                <Link to={item.url} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to={authPortal.register.url}
          className={getLinkClasses(authPortal.register.url)}
          onClick={() => setIsMenuOpen(false)}
        >
          {authPortal.register.name}
        </Link>

        <ButtonVariant
          className="px-6 py-3 text-white hover:text-primary-color1 transition duration-300"
          href={authPortal.login.url}
          onClick={() => setIsMenuOpen(false)}
        >
          {authPortal.login.name}
        </ButtonVariant>
      </div>
    </header>
  );
};

export default Header;
