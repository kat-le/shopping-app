import { Link } from "react-router";
import aboutImage1 from "../../assets/images/about-1.jpg";
import aboutImage2 from "../../assets/images/about-2.jpg";
import aboutImage3 from "../../assets/images/about-3.jpg";
import aboutImage4 from "../../assets/images/about-4.jpg";
import "../../styles/About.css";

const images = [
  { src: aboutImage1, alt: "A considered detail from the world of Sillage" },
  { src: aboutImage2, alt: "Fragrance and everyday rituals" },
  { src: aboutImage3, alt: "A close-up of a softly lit fragrance scene" },
  { src: aboutImage4, alt: "An atmospheric view of the Sillage collection" },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-intro" aria-labelledby="about-title">
        <p className="eyebrow">A little about us</p>
        <h1 id="about-title">Made to stay <em>with you.</em></h1>
        <p className="about-intro__copy">
          Sillage is an independent fragrance shop for finding a scent that
          feels like your own. We believe fragrance is personal: a quiet
          signature, a familiar comfort, or a small way to mark a moment.
        </p>
      </section>

      <section className="about-gallery" aria-label="A glimpse into Sillage">
        {images.map((image, index) => (
          <img
            className={`about-gallery__image about-gallery__image--${index + 1}`}
            key={image.src}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </section>

      <section className="about-story" aria-labelledby="story-title">
        <p className="eyebrow">Our point of view</p>
        <h2 id="story-title">A more personal way to find your fragrance.</h2>
        <p>
          We bring together distinctive scents chosen for their character,
          craftsmanship, and the way they make you feel. From first discovery
          to the fragrance you reach for every day, our collection is here to
          make exploring scent feel thoughtful, welcoming, and entirely your
          own.
        </p>
        <Link className="text-link" to="/shop">
          Explore the collection <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="about-contact" id="contact" aria-labelledby="contact-title">
        <div className="about-contact__intro">
          <p className="eyebrow">We’d love to hear from you</p>
          <h2 id="contact-title">Get in touch.</h2>
          <p>
            Have a question about a fragrance or need a little guidance? Reach
            out to us using the details below.
          </p>
          <address className="about-contact__details">
            <a href="tel:+18005550147">+1 (800) 555-0147</a>
            <span>123 Sillage Lane, New York, NY 10001</span>
            <a href="mailto:hello@sillage.example">hello@sillage.example</a>
          </address>
        </div>

        <form className="about-contact__form">
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Your message
            <textarea name="message" rows="4" />
          </label>
          <button className="about-contact__submit" type="button" disabled>
            Send a message — coming soon
          </button>
          <p className="about-contact__note">
            Our message form isn’t connected yet. Please contact us by phone or
            email.
          </p>
        </form>
      </section>
    </main>
  );
}

export default About;
