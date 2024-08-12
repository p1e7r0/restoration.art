import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">DR</div>
        <nav>
          <ul>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
