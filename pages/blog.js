//ourdomain.com/blog
import Meta from "../components/Meta";
import Golf from "../media/golf.jpg";
import Image from "next/image";
import Modal from "react-modal";
import ModalImage from "../components/ModalImage";
import { useState } from "react";
import illinoisImage from "../media/illinois.jpeg";

export default function Blog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffe4e1",
      width: "80%",
    },
  };
  return (
    <div>
      <Meta
        title="Favorite Reads"
        keywords="blog, katherine k, favorite reads, poems, books, music"
        description="A peak into my favorite excerpts, books, poems, and more"
      />
      <div className="center">
        <h2>BLOG</h2>
        <button
          className="button-modal"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          PI Planning
        </button>
        <Modal
          isOpen={modalIsOpen}
          style={modalStyles}
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
        >
          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            Close
          </button>
          <ModalImage />
        </Modal>
      </div>
      <div className="column">
        <h3>Weekend in Woodstock Historic District</h3>
        <h3>July 16, 2022</h3>
        <p>
          In order to attend a wedding in Wisconsin, Morghan and I made a
          weekend trip of it and spent the night at an interesting Airbnb in
          Woodstock Historic District, Illinois.
        </p>
        <div className="image-wrapper">
          <Image
            src={illinoisImage}
            alt="Picture the Airbnb in Illinois"
            layout="responsive"
            priority="true"
          />
        </div>
      </div>
      <div className="column">
        <h3>Team Golfing at Broadmoor</h3>
        <h3>August 5, 2022</h3>
        <p>
          After PI Planning, the web team took off to Broadmoor for a five
          person scramble. Afterwards, we grabbed lunch at Founders. It was a
          great day and only one goose was hit. (Goose is okay)
        </p>
        <div className="image-wrapper">
          <Image
            src={Golf}
            alt="Picture collage of Katherine"
            layout="responsive"
            priority="true"
          />
          <br />
        </div>
      </div>
    </div>
  );
}
