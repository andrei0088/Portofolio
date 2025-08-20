import "@fontsource/exo-2";
import "@fontsource/source-sans-pro";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" href="/">
        <img src="./logo.png" alt="" style={{ height: "50px" }} />
        <span style={{ fontFamily: '"Exo 2", sans-serif' }}>Soft</span>
        <span style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>88A</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/AboutMe">About Me</CustomLink>
          <CustomLink href="/Portofolio">Portofolio</CustomLink>
          <CustomLink href="/Contact">Contact</CustomLink>
        </ul>
      </div>
    </nav>
  );
}
function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className="nav-item">
      <a className={path === href ? "nav-link active" : "nav-link"} href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavBar;
