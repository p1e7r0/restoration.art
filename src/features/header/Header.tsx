import "./Header.css";

const sections = [
  { name: "Portfolio", link: "#portfolio" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" },
];

const Header = () => {
  return (
    <header className="bg-white">
      <div className="logo">DR</div>
      <div className="navbar">
        <nav>
          <ul className="flex flex-row gap-4 md:gap-7 mt-0 border-0 dark:bg-gray-900 dark:border-gray-700">
            {sections.map((section) => (
              <li key={section.name}>
                <a
                  href={section.link}
                  className="block py-2 text-gray-900  hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Dr Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DR</span>
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {sections.map((section) => (
                <li key={section.name}>
                  <a
                    href={section.link}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
