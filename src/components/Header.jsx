import Logo from "../assets/images/logo.png";
import { authPortal, navigation } from "../constants/index";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const location = useLocation();

  const getLinkClasses = (url) => {
    const baseClasses = "transition duration-200 active:text-primary-color2";
    const activeClass = "text-primary-color2";
    const inactiveClasses = "hover:text-primary-color1";

    return location.hash === url
      ? activeClass
      : `${inactiveClasses} ${baseClasses}`;
  };

  return (
    <header className="p-7.5 font-sharp text-grayed text-lg flex items-center justify-between gap-10 border-b border-grayed bg-primary-dark">
      <Link to="#hero">
        <img src={Logo} alt="logo" />
      </Link>

      <ul className="flex gap-10">
        {navigation.map((item) => (
          <li key={item.id} className={getLinkClasses(item.url)}>
            <Link to={item.url}>{item.name.toUpperCase()}</Link>
          </li>
        ))}
      </ul>

      <div>
        <Link
          to={authPortal.register.url}
          className={getLinkClasses(authPortal.register.url)}
        >
          {authPortal.register.name.toUpperCase()}
        </Link>

        <Button
          variant="gradient"
          wrapperClassName="text-white ml-10"
          contentClassName="px-6 py-3"
          href={authPortal.login.url}
        >
          {authPortal.login.name.toUpperCase()}
        </Button>
      </div>
    </header>
  );
};

export default Header;
