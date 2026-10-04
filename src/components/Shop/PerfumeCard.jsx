import "../../styles/PerfumeCard.css";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

// const handleAddToCart = (perfume) => {
//   console.log(`Added ${perfume.name} to cart.`);
// }


function PerfumeCard({ perfume, onSelect, onAddToCart }) {
  return (
    <article className="shop-card">
      <button
        className="shop-card__open"
        type="button"
        aria-label={`View details for ${perfume.name}`}
        onClick={() => onSelect(perfume)}
      >
        <div className="shop-card__image-wrap">
          <img
            className="shop-card__image"
            src={perfume.image_url}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="shop-card__details">
          <p className="shop-card__brand">{perfume.brand}</p>
          <h2>{perfume.name}</h2>
          <p className="shop-card__price">{currency.format(perfume.price)}</p>
        </div>
      </button>
      <button className="shop-card__add" type="button" onClick={() => onAddToCart(perfume)}>
        Add to cart
      </button>
    </article>
  );
}

export default PerfumeCard;
