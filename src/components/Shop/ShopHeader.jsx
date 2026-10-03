import shopImage from "../../assets/shop.jpg";
import "../../styles/ShopHeader.css";

function ShopHeader() {
  return (
    <header className="shop-hero">
      <div className="shop-hero__content">
        <div className="shop-hero__title">
          <div>
            <p className="eyebrow">Find your signature</p>
            <h1>Shop fragrances.</h1>
          </div>
        </div>
        <img className="shop-hero__image" src={shopImage} alt="Fragrance collection" />
        <p className="shop-hero__description">
          Explore a considered collection of scents, selected for every mood.
        </p>
      </div>
    </header>
  );
}

export default ShopHeader;
