import About from "./components/About";
import Annoucement from "./components/Annoucement";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      <Annoucement />
      <Banner />
      <Featured />
      <Review />
      <About />
      <Footer />
    </div>
  );
};

export default App;
