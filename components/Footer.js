import React from "react";
import Image from "next/image";
import instagramImage from "../media/instagram.png";
import gmailImage from "../media/gmail.png";
import styles from "../styles/Home.module.css";
import linkedinImage from "../media/linkedinIcon.png";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; Copyright 2022. All Rights Reserved. <br />
        <a
          className={styles.iconresize}
          href="mailto:catherinekettner1@gmail.com"
        >
          <Image src={gmailImage} alt="gmail image link" />
        </a>
        <a
          className={styles.iconresize}
          href="https://www.instagram.com/katherinekettner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagramImage} alt="Instagram logo link" />
        </a>
        <a
          className={styles.iconresize}
          href="https://www.linkedin.com/in/catherine-kettner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedinImage} alt="LinkedIn logo with link" />
        </a>
      </p>
    </footer>
  );
}
export default Footer;
