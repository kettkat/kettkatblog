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
       <h2>TRAVELS</h2>
        <p>The carousel functionality below is from Material UI. The images are from places I&apos;ve traveled to around the world that 
          are displayed utilizing a map function to a component with a header, paragraph, and image element. Enjoy!
        </p>
        <div className="center">
        <TravelCarousel />
        </div>
    </div>
  );
}
