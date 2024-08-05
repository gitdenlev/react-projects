import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  const navLinks = [
    {
      name: "Feedback",
      path: "/feedback",
    },
    {
      name: "Phonebook",
      path: "/phone-book",
    },
    {
      name: "Photogallery",
      path: "/photogallery",
    },
  ];
  return (
    <header>
      <nav>
        <ul className="navLinks">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink className="link" to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
