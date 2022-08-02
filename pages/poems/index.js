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
        title="Poem API"
        keywords="blog, favorite reads, poems, books, music"
        description="This page connects to a MongoDB Poem API. Enjoy the various poems and the wisdom they give."
      />
      <div className="center">
        <h1>Poems</h1>
      </div>
      <p>
        This page connects to a MongoDB Poem API. Enjoy the various poems and
        the wisdom they give. <br /> Click Grab a Poem to output a new one!
      </p>

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
