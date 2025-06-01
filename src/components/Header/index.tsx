import Logo from "../Logo";
import "./header.scss";
import Navigation from "../Navigation";
import Search from "../Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__items">
          <Logo />
          <Search />
          <Navigation />
        </div>  
          <div className="wishinglist">
            <h1 className="wishinglist__title">
              Make your life easier and create your babyList ........
            </h1>
            <Link to="/wishingList">
              <button>Create your wishing list</button>
            </Link>
          </div>
      </div>
    </header>
  );
};

export default Header;
