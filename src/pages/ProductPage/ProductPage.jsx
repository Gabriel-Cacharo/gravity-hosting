import { useParams } from "react-router-dom";

import Eua from "../../assets/images/eua.png";
import Brasil from "../../assets/images/Brasil.png";

import Product from "../../components/Product/Product";
import ProductPageHeader from "../../components/ProductPageHeader/ProductPageHeader";
import ServerProduct from "../../components/ServerProduct/ServerProduct";
import CommonQuestions from "../../components/CommonQuestions/CommonQuestions";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Benefits from "../../components/Benefits/Benefits";

import { minecraftProducts } from "../../data/minecraft";
import { botProducts } from "../../data/bot";
import { vpsCanadaProducts } from "../../data/vpsCanada";

const ProductPage = () => {
  const { product } = useParams();

  const renderProducts = () => {
    if (product === "minecraft") {
      return minecraftProducts.map((minecraftProduct) => (
        <Product
          list={minecraftProduct.list}
          name={minecraftProduct.name}
          price={minecraftProduct.price}
          buyLink={minecraftProduct.buyLink}
          type="Minecraft"
        />
      ));
    } else if (product === "bot") {
      return botProducts.map((botProduct) => (
        <Product
          list={botProduct.list}
          name={botProduct.name}
          price={botProduct.price}
          type="Bot"
        />
      ));
    } else if (product === "vps") {
      return <ServerProduct serverProducts={vpsCanadaProducts} />;
    }
  };

  return (
    <main className="productPage">
      <ProductPageHeader
        title={product}
        type={product}
        imageUrl={
          product === "minecraft"
            ? '"https://wallpaperaccess.com/full/171177.jpg"'
            : product === "bot"
            ? "https://diversatecnologia.com.br/wp-content/uploads/2015/11/slider_Diversa-Tecnologia.jpg"
            : "https://blog.ethti.com.br/wp-content/uploads/2018/07/217699-veja-5-otimas-dicas-para-otimizar-a-virtualizacao-de-servidores.jpg"
        }
      />

      <div className="productsLocationContainer">
        <SectionHeader
          title="Localização"
          subtitle="Escolha a localização do seu servidor."
        />

        <div className="location">
          <img src={Eua} alt="" />
          <h6>Virgínia</h6>
        </div>
      </div>

      <div className="productsContainer" data-aos="fade-in">
        {renderProducts()}
      </div>

      <div className="companyBenefitsContainer">
        <SectionHeader
          title="Benefícios ao comprar conosco"
          subtitle="Veja alguns benefícios que você garante ao comprar conosco."
        />

        <div className="benefitsContainer">
          <Benefits
            description="O seu plano é ativado instantaneamente após a compra, podendo demorar até no máximo 1 dia útil."
            name="Ativação Instantânea"
            imageType="velocity"
          />

          <Benefits
            description="Possuímos um AntiDDOs com alta eficácia para deixar seu projeto sempre online."
            name="AntiDDOs"
            imageType="armor"
          />

          <Benefits
            description="Nós damos uma garantia de reembolso em até 7 dias caso não goste do produto!"
            name="Reembolso"
            // imageType="armor"
          />

          <Benefits
            description="Contamos com os melhores processadores do mercado, Ryzen 5 5600x e Ryzen 7 3800x para a sua melhor experiência!"
            name="Processadores de ponta"
            imageType="server"
          />
        </div>
      </div>

      <CommonQuestions />
    </main>
  );
};

export default ProductPage;
