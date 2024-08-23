import "./Pricing.css";

const checkmark = (
  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
  </svg>
);

const cross = (
  <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const pricingData = [
  {
    title: "Digitalization",
    subtitle: "Best option for personal use & for your next project.",
    price: "$9",
    features: [
      {
        icon: checkmark,
        element: "Digital copy",
      },
      { icon: cross, element: "Photo enhancing" },
      { icon: cross, element: "Restoration" },
      {
        icon: cross,
        element: (
          <>
            Batch size: <span className="font-semibold">100 items</span>
          </>
        ),
      },
    ],
  },
  {
    title: "Enhancing",
    price: "$20",
    subtitle: "Relevant for multiple users, extended & premium support.",
    features: [
      { icon: checkmark, element: "Digital copy" },
      { icon: checkmark, element: "Photo enhancing" },
      { icon: cross, element: "Restoration" },
      {
        icon: cross,
        element: (
          <>
            Batch size: <span className="font-semibold">100 items</span>
          </>
        ),
      },
    ],
  },
  {
    title: "Restoration",
    price: "$30",
    subtitle: "Best for large scale uses and extended redistribution rights.",
    features: [
      { icon: checkmark, element: "Digital copy" },
      { icon: checkmark, element: "Photo enhancing" },
      { icon: checkmark, element: "Restoration" },
      {
        icon: checkmark,
        element: (
          <>
            Batch size: <span className="font-semibold">100 items</span>
          </>
        ),
      },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 px-0 md:px-8 bg-white flex flex-col items-center" id="pricing">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">Pricing</h2>
      <div className="pricing space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 max-w-screen-xl mx-auto">
        {pricingData.map((item) => (
          <div
            key={`pricing-${item.title}-card`}
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use &amp; for your next project.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{item.price}</span>
              <span className="text-gray-500 dark:text-gray-400">/item</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {item.features.map((feature) => (
                <li key={`pricing-${item.title}-${feature.element}`} className="flex items-center space-x-3">
                  {feature.icon}
                  <span>{feature.element}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
