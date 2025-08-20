import NavBar from "./components/navBar";
import Home from "./pages/Home";
import AboutMe from "./pages/Abour";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import Footer from "./components/footer";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/AboutMe":
      Component = AboutMe;
      break;
    case "/Portofolio":
      Component = Portofolio;
      break;
    case "/Contact":
      Component = Contact;
      break;
    default:
      Component = Home; // Fallback to Home if no match
  }
  return (
    <div style={{ backgroundColor: "rgb(16 53 128 / 16%) " }}>
      <div className="container" style={{ backgroundColor: "#f7f9fc   " }}>
        <NavBar />
        <Component />
        <Footer />
      </div>
    </div>
  );
}

export default App;
