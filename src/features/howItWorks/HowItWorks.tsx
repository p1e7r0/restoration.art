const HowItWorks = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
        <p className="text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="text-center">
              <div className="text-4xl mb-2">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="text-center">
              <div className="text-4xl mb-2">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buy</h3>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="text-center">
              <div className="text-4xl mb-2">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pay</h3>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
