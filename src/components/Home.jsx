import { Link } from "react-router";
import perfumeHero from "../assets/perfume-hero.png";
import storyImage from "../assets/about-home.jpg";
import santalImage from "../assets/perfume-home-1.png";
import roseImage from "../assets/perfume-home-2.png";
import boisImage from "../assets/perfume-home-3.png";
import "../styles/Home.css";

const fragrances = [
  { name: "Santal 33", note: "Sandalwood · Cardamom · Leather", price: "$98", src: santalImage },
  { name: "Rose d’Orient", note: "Damask rose · Saffron · Amber", price: "$112", src: roseImage },
  { name: "Bois de Minuit", note: "Cedar · Fig · Vetiver", price: "$105", src: boisImage },
];

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <p className="home-hero__eyebrow">A study in scent</p>
        <h1 className="home-hero__headline">
          <span>A SCENT</span>
          <span>FOR YOU</span>
        </h1>
        <img
          className="home-hero__image"
          src={perfumeHero}
          alt="Black perfume bottle"
        />
        <div className="home-hero__action">
          <p>Made to be remembered.</p>
          <Link className="button button--dark" to="/shop">
            Discover the collection <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="intro-title">
        <p className="eyebrow">The art of wearing scent</p>
        <h2 id="intro-title">
          Not just a fragrance.
          <br />
          <em>A feeling, bottled.</em>
        </h2>
        <p>
          Made for the moments that become memories. Find your signature in a
          collection of beautifully balanced, quietly distinctive scents.
        </p>
      </section>

      <section className="home-collection" aria-labelledby="collection-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2 id="collection-title">A few of our favourites</h2>
          </div>
          <Link className="text-link" to="/shop">
            View all fragrances <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="fragrance-grid">
          {fragrances.map((fragrance, index) => (
            <article className="fragrance-card" key={fragrance.name}>
              <img
                className="fragrance-card__image"
                src={fragrance.src}
                alt={`${fragrance.name} perfume`}
              />
              <div className="fragrance-card__details">
                <div>
                  <p className="fragrance-card__number">0{index + 1}</p>
                  <h3>{fragrance.name}</h3>
                </div>
                <span className="fragrance-card__price">{fragrance.price}</span>
              </div>
              <p className="fragrance-card__notes">{fragrance.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-story" aria-labelledby="story-title">
        <img
          className="home-story__image"
          src={storyImage}
          alt="Perfume bottles held in a hand against soft fabric"
        />
        <div className="home-story__copy">
          <p className="eyebrow">Less, but more meaningful</p>
          <h2 id="story-title">A softer kind of statement.</h2>
          <p>
            We believe the best things don’t need to announce themselves. Each
            fragrance is composed with intention, using beautiful ingredients
            and nothing you don’t need.
          </p>
          <Link className="text-link" to="/about">
            Our point of view <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="home-signoff">
        <p className="eyebrow">Your next favourite is waiting</p>
        <h2>Make room for a little <em>wonder.</em></h2>
        <Link className="button button--dark" to="/shop">
          Find your fragrance <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Home;
