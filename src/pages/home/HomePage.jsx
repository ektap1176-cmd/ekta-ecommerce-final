import Home from "./component/Home";
import FlashSales from "./component/FlashSales";
import CategoryPanel from "./component/CategoryPanel";
import BestSelling from "./component/BestSelling";
import MusicPromoPanel from "./component/MusicPromoPanel";
import ExplorePanel from "./component/ExplorePanel";
import NewArrival from "./component/NewArrival";

const HomePage = () => {
  return (
    <>
      <Home />

      <FlashSales />

      <div className="w-full max-w-7xl mx-auto my-16">
        <div className="h-px bg-gray-300"></div>
      </div>

      <CategoryPanel />

      <div className="w-full max-w-7xl mx-auto my-16">
        <div className="h-px bg-gray-300"></div>
      </div>

      <BestSelling />

      <MusicPromoPanel />

      <ExplorePanel />

      <NewArrival />
    </>
  );
};

export default HomePage;
