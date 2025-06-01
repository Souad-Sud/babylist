import { AllBabylist } from "../../data/data";
import './productPage.scss'
import { getImageUrl } from "../../utils/types";

interface ProductPageProps {
  title: string;
}
const ProductPage = ({ title }: ProductPageProps) => {
    
  const babylists = AllBabylist.filter(
    (babylist) => babylist.group.toLowerCase() === title.toLowerCase()
  );

  return (
    <div className="product">
      <h1 className="product__title">{title}</h1>
      <div className="product__intro">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure ipsam dolorem aperiam ut quidem est neque aspernatur deleniti asperiores! Numquam, sed autem expedita quibusdam animi modi dolorem quas temporibus.
        Animi corporis ab commodi similique exercitationem odit architecto ullam maxime sequi, cum adipisci <br />nulla totam, cumque, placeat nostrum dolores nam quo nemo dicta. Id incidunt cumque minima atque consequuntur sit?
        Quod cumque praesentium earum omnis sapiente, laborum blanditiis quidem harum rem amet repellat eius velit incidunt expedita repellendus excepturi quisquam et maiores, ut nesciunt. Corrupti eum tenetur minus illum. Nobis?
        Molestiae reiciendis eveniet vitae. Aspernatur quae quod architecto saepe animi ullam laboriosam mollitia eius incidunt, earum natus voluptatibus vero, magnam consequatur sit consectetur facilis? Magni eligendi eius porro debitis dicta!
        Nulla mollitia tenetur delectus dolorem <br /> perspiciatis at unde debitis aliquam reiciendis quae eaque, possimus itaque! Provident necessitatibus velit eum amet quae maiores corporis eaque repellat cum, beatae a suscipit sit!
        Veritatis ad animi ratione quisquam temporibus iste vitae iusto dolorum blanditiis ducimus atque, nostrum culpa ut dolore, totam odit fugiat dolores, ipsa reprehenderit architecto unde. Sequi illum beatae aperiam! Facilis?
        Laboriosam laborum eligendi non quas nam placeat illum libero suscipit aliquid totam! Temporibus reprehenderit illum, quia maiores a, quisquam qui obcaecati dicta dolores aut nulla neque, itaque quis amet commodi.
        Doloribus esse sunt officiis excepturi veritatis eius, architecto quod obcaecati<br /> cumque molestiae in ipsum id? Tempora, praesentium vitae, animi, architecto ratione quaerat repudiandae voluptas eveniet alias dolor fugit numquam ex?
        Voluptatum, nesciunt laboriosam, rerum ut quae nulla sed quas, optio sapiente at eaque corrupti magnam aliquam ratione. Debitis repellat culpa explicabo tempore accusantium temporibus necessitatibus, consequuntur commodi minus aliquid laborum?
        Architecto labore blanditiis consequuntur aperiam quaerat nemo distinctio eos facilis obcaecati similique harum esse, eveniet quis cumque sequi deserunt, et hic natus? Eveniet rem enim est facilis! Fugiat, nobis nulla?</p>
        <div className="product__flex">
        {babylists.map((item, index) => (
          <div key={index} className="product__col">
            <div className="product__image">
              <img src={getImageUrl(item.image)} alt={item.name} width={300} height={300} />

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
