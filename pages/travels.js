//ourdomain.com/news
import Meta from "../components/Meta";
import TravelCarousel from "../components/CarouselComponent";
export default function Travels() {
  
  return (
    <div>
      <Meta
        title="Catchin Up With Kat- Travels"
        keywords="blog, katherine k, traveling"
        description="A peak into my travels"
      />
       <h2>TRAVELS</h2>
       <p>I love to travel! Growing up in a military family I got to live around the world and US. I've lived in California, Rhode Island, and even Europe. Traveling at a young age has allowed me to push out of my comfort zone as an adult and travel to Europe twice, and volunteer in Africa. I can't wait to see where I can go next.</p>
        <p>The carousel functionality below is from Material UI. The images are from places I&apos;ve traveled to around the world that 
          are displayed utilizing a map function to a component with a header, paragraph, and image element. Enjoy!
        </p>
        <div className="center">
        <TravelCarousel />
        </div>
    </div>
  );
}
