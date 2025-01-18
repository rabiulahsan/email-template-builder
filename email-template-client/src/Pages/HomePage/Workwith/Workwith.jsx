import Marquee from "react-fast-marquee";
import MarqueeCard from "./MarqueeCard";

const Workwith = () => {
  return (
    <div className=" my-[6%]">
      <div className="w-[70%] mx-auto">
        <Marquee
          pauseOnHover={true}
          gradient={true}
          speed={70}
          loop={0}
          className=""
        >
          <MarqueeCard image={"partnerImages/google.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/amazon.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/netflix.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/microsoft.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/samsung.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/meta.png"}></MarqueeCard>
        </Marquee>
      </div>
      <div className="w-[70%] mx-auto mt-[3%]">
        <Marquee
          pauseOnHover={true}
          gradient={true}
          speed={70}
          loop={0}
          direction="right"
          className=""
        >
          <MarqueeCard image={"partnerImages/asus.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/msi.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/nvidia.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/qualqom.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/intel.png"}></MarqueeCard>
          <MarqueeCard image={"partnerImages/amd.png"}></MarqueeCard>
        </Marquee>
      </div>
    </div>
  );
};

export default Workwith;
