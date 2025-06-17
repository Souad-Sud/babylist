// import { AllBabylist } from "../../data/data";
import { pagesLinks, Categories } from "../../data/data";
import { ListIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saveDropDownState = localStorage.getItem("dropdownOpen");
    const saveMenuState = localStorage.getItem("menuOpen");

    if (saveDropDownState === "true") setDropdownOpen(true);
    if (saveMenuState === "true") setIsOpen(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("menuOpen", newState.toString());
      return newState;
    });
  };

   
  const handleCategoriesClick = (link: string) => {
    if (link === "Categories") {
      setDropdownOpen((prev) => {
        const newState = !prev;
        localStorage.setItem("dropdownOpen", newState.toString());
        return newState;
      });
    } else {
      setDropdownOpen(false);
      localStorage.setItem("dropdownOpen", "false");
    }
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <ListIcon
          size={34}
          className="navigation__responsivemenu"
          onClick={toggleMenu}
        />
        <ul className={`navigation__list-container ${isOpen ? "show" : ""}`}>
          {pagesLinks.map((link, index) => (
            <li
              key={index}
              className="navigation__list-item"
              onClick={toggleMenu}
            >
              {link === "Categories" ? (
                <span
                  className="navigation__list-link"
                  onClick={() => handleCategoriesClick(link)}
                  style={{ cursor: "pointer" }}
                >
                  {link}
                </span>
              ) : (
                <NavLink
                  to={
                    link.toLowerCase() === "home"
                      ? "/"
                      : `/${link.toLowerCase()}`
                  }
                  className="navigation__list-link"
                  onClick={() => handleCategoriesClick(link)}
                >
                  {link}
                </NavLink>
              )}

              {link === "Categories" && dropdownOpen && (
                <ul className="navigation__dropdown navigation__dropdown--open">
                  {Categories.map((item, i) => (
                    <li key={i} className="navigation__dropdown-item">
                      <NavLink
                        to={`/categories/${item.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`} 
                        className="navigation__dropdown-link"
                        onClick={() => {
                          setDropdownOpen(false);
                          localStorage.setItem("dropdownOpen", "false");
                          localStorage.setItem("lastCategory", item.name); 
                        }}
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
