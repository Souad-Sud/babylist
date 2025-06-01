// import { AllBabylist } from "../../data/data";
import { pagesLinks, Categories } from "../../data/data";
import { ListIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import { useState } from "react";

const Navigation: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  // Toggle dropdown only when "Categories" is clicked
  const handleCategoriesClick = (link: string) => {
    if (link === "Categories") {
      setDropdownOpen(!dropdownOpen);
    } else {
      setDropdownOpen(false); // close dropdown if other link clicked
    }
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
         <ListIcon size={34} className="navigation__responsivemenu" onClick={toggleMenu} />
      <ul className={`navigation__list-container ${isOpen ? 'show' : ""}`} >
        {pagesLinks.map((link, index) => (
          <li key={index} className="navigation__list-item" onClick={toggleMenu}>
            <NavLink
              to={
                link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`
              }
              className="navigation__list-link"
              onClick={() => handleCategoriesClick(link)}
              >
              {link}
            </NavLink>

            {/* Dropdown shown only if "Categories" and dropdownOpen is true */}
            {dropdownOpen && (
              <ul
              className={`navigation__dropdown ${
                dropdownOpen ? "navigation__dropdown--open" : ""
              }`}
              >
                {Categories.map((item, i) => (
                  <li key={i} className="navigation__dropdown-item">
                    <NavLink
                      to={`/categories/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`} // e.g. /categories/baby-names
                        className="navigation__dropdown-link"
                        onClick={() => setDropdownOpen(false)} // optionally close dropdown on click
                        >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
       

      </ul>
        </div>
    </nav>
  );
};

export default Navigation;
