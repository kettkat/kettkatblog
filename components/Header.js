import headerPic from "../media/katherine.jpg";
import Image from "next/image";
import headerPic2 from "../media/katherine2.jpg";

function Header() {
  return (
    <>
      <Image
        src={headerPic}
        alt="Picture collage of Katherine"
        width="10%"
        height="5em"
        layout="responsive"
        priority='true'
      />
      <h1 className="titlepage">CATCHIN&rsquo; &nbsp; UP &nbsp; WITH &nbsp; KAT</h1>
    </>
  );
}

export default Header;

{/* <Image
        src={headerPic2}
        alt="Picture collage of Katherine"
        width="10%"
        height="5em"
        layout="responsive"
        priority='true'
      /> */}