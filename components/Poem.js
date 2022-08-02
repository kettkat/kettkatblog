import React from "react";
import styles from "../styles/Home.module.css";

function Poem({ title, author, lines }) {
  const newArray = lines
  return (
    <div className={styles.center}>
      <h2>{title}</h2>
      <h3>{author}</h3>
      {newArray?.map((item,index) => <p key={index}>{item}</p>)}
    </div>
  );
}

export default Poem;
