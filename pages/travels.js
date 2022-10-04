//ourdomain.com/news
import Meta from "../components/Meta";
import TravelCarousel from "../components/CarouselComponent";
export default function Travels() {
  
  return (
    <div>
      <Meta
        title="Travels"
        keywords="blog, katherine k, traveling"
        description="A peak into my travels"
      />
      <div className="center">
        <h2>TRAVELS</h2>
        <TravelCarousel />
      </div>
    </div>
  );
}
