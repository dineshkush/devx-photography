import "./App.scss";
import BodyImg from "./images/body-img.jpg";
import Home from "./components/home/Home";
import Footer from "./main/footer/Footer";
import Header from "./main/header/Header";

function App() {
  return (
    <>
      <div
        className="body_overflow"
        style={{ backgroundImage: `url(${BodyImg})` }}
      >
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
