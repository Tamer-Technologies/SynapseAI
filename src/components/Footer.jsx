import { footerData } from "../constants";

const Footer = () => {
  return (
    <footer className="text-gray-md text-center">
      {footerData.copyright.text}
    </footer>
  );
};

export default Footer;
