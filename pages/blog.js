//ourdomain.com/blog
import Meta from "../components/Meta";
import Image from "next/image";
import Modal from "react-modal";
import ModalImage from "../components/ModalImage";
import { Document } from "react-pdf";
import { useState } from "react";

export default function Blog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [counterClicked, setCounterCicked] = useState(0);
  function counterClickHandler() {
    setCounterCicked(counterClicked + 1)
  }
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
        title="Catchin Up With Kat- Various Blog Posts"
        keywords="blog, katherine k, favorite reads, poems, books, music, travels"
        description="A peak into my favorite excerpts, books, poems, and more"
      />
      <h2>PROJECTS</h2>
      <h3>Page coming soon</h3>
    </div>
  );
}
