import "./Pricing.css";

const pricingData = [
  {
    title: "Digitalization",
    price: 5,
    features: ["Digital copy"],
  },
  {
    title: "Enhancing",
    price: 20,
    features: ["Digital copy", "Photo enhancing"],
  },
  {
    title: "Restoration",
    price: 30,
    features: ["Digital copy", "Photo enhancing", "Restoration"],
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Pricing</h2>
      <div className="card-container">
        {pricingData.map((item) => (
          <div key={`${item.title}-card`} className="card">
            <p className="card-title">{item.title}</p>
            <div className="card-content">
              <h2>{item.price}.-</h2>
              <ul>
                {item.features.map((feature) => (
                  <li key={`card-item-${feature}`}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
