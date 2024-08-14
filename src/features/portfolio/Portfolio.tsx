import "./Portfolio.css";

import after1 from "../showcase/assets/img20220704_14330085_NONNO_GIUSEPPE_REST_DOPO.jpg";
import before1 from "../showcase/assets/img20220704_14330085_NONNO_GIUSEPPE_REST_PRIMA.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img className="image-before" src={before1} alt="Before" />
          <img className="image-after" src={after1} alt="After" />
        </div>
        <div className="portfolio-item">
          <img className="image-before" src={before1} alt="Before" />
          <img className="image-after" src={after1} alt="After" />
        </div>
        <div className="portfolio-item">
          <img className="image-before" src={before1} alt="Before" />
          <img className="image-after" src={after1} alt="After" />
        </div>
        <div className="portfolio-item">
          <img className="image-before" src={before1} alt="Before" />
          <img className="image-after" src={after1} alt="After" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
