import Card from "./Card";
import Features from "./Features";
import Vision from "./Vision";
import MovingText from "./MovingText";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="about1" className="about-container">
      <Vision />
      <Card />
      <Features />
      <Footer />
    </div>
  );
};
export default Home;
