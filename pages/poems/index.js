import React, { useEffect, useState } from "react";
import Meta from "../../components/Meta";
import Poem from "../../components/Poem";
import LoadingSpinner from "../../components/LoadingSpinner";

function Poems() {
  const [poem, setPoem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPoemHandler() {
    setIsLoading(true);
    const response = await fetch(
      "https://poetrydb.org/title,random/Sonnet;1.json"
    );
    const data = await response.json();
    const transformedPoem = {
      title: data[0].title,
      author: data[0].author,
      lines: data[0].lines,
    };
    setPoem(transformedPoem);
    setIsLoading(false);
  }

  //output an initial poem when page loads
  useEffect(() => {
    fetchPoemHandler();
  }, []);

  return (
    <div>
      <Meta
        title="Catching Up With Kat- Poem API Output"
        keywords="blog, favorite reads, poems, books, music"
        description="This page connects to a MongoDB Poem API. Enjoy the various poems and the wisdom they give."
      />
      <div className="center">
        <h2>POEMS</h2>
      </div>
      <p>
        This page connects to a MongoDB Poem API. Enjoy the various poems and
        the wisdom they give. This page utilizes an asynchronous function to fetch a poem from the API, 
        and then set the JSON response to a title, author, and message.
      </p>
      <p>Clicking &quot;Grab a Poem&quot; will output a new, random poem from the API!</p>

      {!isLoading && (
        <Poem title={poem.title} author={poem.author} lines={poem.lines} />
      )}
      {isLoading && <LoadingSpinner />}

      <div>
        <button onClick={fetchPoemHandler} disabled={isLoading}>
          Grab a Poem!
        </button>
      </div>
    </div>
  );
}

export default Poems;
