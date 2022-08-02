import headerPic from "../media/katherine.jpg";
import Image from "next/image";

function Header() {
  return (
    <>
      <Image
        src={headerPic}
        alt="Picture collage of Katherine"
        width="10%"
        height="5%"
        layout="responsive"
        priority='true'
      />
      <h1>Catchin&rsquo; Up With Kat</h1>
    </>
  );
}

export default Header;
