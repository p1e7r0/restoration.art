import "./Portfolio.css";

import after1 from "../showcase/assets/img20220704_14330085_NONNO_GIUSEPPE_REST_DOPO.jpg";
import before1 from "../showcase/assets/img20220704_14330085_NONNO_GIUSEPPE_REST_PRIMA.jpg";

const Portfolio = () => {
  return (
    <section className="py-16 px-0 md:px-8 bg-black flex flex-col items-center gap-16" id="portfolio">
      <h2 className="text-3xl font-extrabold text-center text-gray-50 dark:text-white sm:text-4xl">Portfolio</h2>

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
