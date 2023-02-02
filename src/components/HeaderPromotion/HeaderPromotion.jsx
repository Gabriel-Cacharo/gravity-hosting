import { TbPlanet } from "react-icons/tb";

const HeaderPromotion = () => {
  return (
    <header className="headerPromotionContainer">
      <h6>
        <TbPlanet className="iconMarginRight" /> PROMOÇÃO DE INAUGURAÇÃO!
        Utilize o cupom <span>GRAVITY10</span> para receber 10% de desconto!
      </h6>
    </header>
  );
};

export default HeaderPromotion;
