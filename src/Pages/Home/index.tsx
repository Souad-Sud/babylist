import HomeIntroduction from "../../components/HomeIntroduction";
import { items } from "../../data/data";
import { getImageUrl } from "../../utils/types";
import "./homepage.scss"

const Home = () => {
  return (
    <div className="homepage">
        <HomeIntroduction />
      <div className="homepage__list">
        {items.map((item, index: number) => (
        <div  key={index} className={`homepage__liststyle--${item.bgclr}`}>
          <div className={`homepage__listItems--${item.bgclrOutsidDiv}`}>
            <div className="homepage__introduction">
            <div className="homepage__introductionstyle">
            <h2 className="homepage__title">{item.name}</h2>
            <p className="homepage__description">{item.description}</p>
            </div>
            </div>
            <div className="homepage__img">
              <img src={getImageUrl(item.img)} alt={item.name} />
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
