//import logo from "./logo.svg";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4">Demo App</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="./todo" className="nav-link active" aria-current="page">
            To-Do
          </a>
        </li>
        {/* <li class="nav-item">
            <a href="#" class="nav-link">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              About
            </a>
          </li> */}
      </ul>
    </header>
  );
};

export default Header;
