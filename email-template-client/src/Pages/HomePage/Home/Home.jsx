import About from "../About/About";
import Banner from "../Banner/Banner";
import Demo from "../Demo/Demo";
import SubscriptionSection from "../SubscriptionSection/SubscriptionSection";
import Workwith from "../Workwith/Workwith";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Workwith></Workwith>
      <Demo></Demo>
      <About></About>
      <SubscriptionSection></SubscriptionSection>
    </>
  );
};

export default Home;
