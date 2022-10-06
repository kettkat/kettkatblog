import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Switzerland from "../media/switzerland.jpeg";
import Barcelona from "../media/barcelona.jpeg";
import Africa from "../media/tanzania.jpeg";
import GrandHaven from "../media/grandhaven.jpeg";
import Image from "next/image";

function TravelCarousel() {
  var items = [
    {
      name: "Switzerland",
      imagePath: Switzerland,
      funFact: "4 out of 5 of the Most Expensive Cities for Coffee are Swiss",
      altText: "Photo of Switzerland bridge and flowers, taken in 2018 by Catherine Kettner ",
    },
    {
      name: "Basílica de la Sagrada Família",
      imagePath: Barcelona,
      funFact:
        "Located in Barcelona, construction on this began in 1882 and still is not completed.",
      altText: "Photo of Basílica de la Sagrada Família in Spain in 2018",
    },
    {
      name: "Tanzania, Africa",
      imagePath: Africa,
      funFact:
        "The Great Migration Sees Over 2 Million Animals Travel Across the Plains",
      altText: "Photo of giraffe in Tanzania, Africa in 2019",
    },
    {
      name: "Grand Haven Sunset",
      imagePath: GrandHaven,
      funFact:
        "Named one of the Top 5 Beaches in the US by Good Morning America",
      altText: "Photo of Grand Haven Sunset taken by Catherine Kettner",
    },
  ];

  return (
    <Carousel
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h3>{props.item.name}</h3>
      <p>{props.item.funFact}</p>
      <Image src={props.item.imagePath} alt={props.item.altText} />
    </Paper>
  );
}

export default TravelCarousel;
