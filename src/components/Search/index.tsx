import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__icon-container">
          <button className="search__button">
            <MagnifyingGlassIcon size={32} className="search__icon" />
          </button>
        </div>
        <div className="search__input-container">
          <input
            type="text"
            placeholder="Search"
            //   value="search"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
