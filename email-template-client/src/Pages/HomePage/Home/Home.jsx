import About from "../About/About";
import Banner from "../Banner/Banner";
import Demo from "../Demo/Demo";
import SubscriptionSection from "../SubscriptionSection/SubscriptionSection";
import Workwith from "../Workwith/Workwith";
import Footer from "../../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Workwith></Workwith>
      <Demo></Demo>
      <About></About>
      <SubscriptionSection></SubscriptionSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
