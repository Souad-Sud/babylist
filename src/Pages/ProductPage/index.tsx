import { useParams } from "react-router-dom";
import { AllBabylist } from "../../data/data";
import './productPage.scss';
import { getImageUrl } from "../../utils/types";

interface ProductPageProps {
  title?: string;
}

const ProductPage = ({ title }: ProductPageProps) => {
  const { categoryName } = useParams();


  const resolvedTitle = (title || categoryName?.replace(/-/g, " ") || "").toUpperCase();
 

  const babylists = AllBabylist.filter(
    (babylist) => babylist.group.toLowerCase() === resolvedTitle.toLowerCase()
  );

  return (
    <div className="product">
      <h1 className="product__title">{resolvedTitle}</h1>
      <div className="product__intro">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore officia soluta labore, quo, ullam iusto quam eaque quos necessitatibus adipisci libero pariatur? Eveniet deserunt pariatur totam nam quisquam earum.
        Ipsa adipisci amet consequuntur culpa nobis maxime ad enim quod fugiat? Delectus voluptatibus cumque quam cupiditate suscipit omnis, ullam, autem provident repudiandae rem totam officiis neque, deserunt maiores quisquam voluptate.</p>
        <div className="product__flex">
          {babylists.map((item, index) => (
            <div key={index} className="product__col">
              <div className="product__image">
                <img
                  src={getImageUrl(item.image)}
                  alt={item.name}
                  width={300}
                  height={300}
                />
              </div>
              <h2 className="product__itemstitle">{item.name}</h2>
             
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;