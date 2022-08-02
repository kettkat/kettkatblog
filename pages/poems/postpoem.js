import React, { useState, useEffect } from "react";
import useInput from "../../hooks/use-input";
import LoadingSpinner from "../../components/LoadingSpinner";
import Meta from "../../components/Meta";

function postpoem() {
  const [poemList, setPoemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date();
  //format date output
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const {
    value: title,
    isValid: titleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    blurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: author,
    isValid: authorIsValid,
    hasError: authorInputHasError,
    valueChangeHandler: authorChangeHandler,
    blurHandler: authorBlurHandler,
    reset: resetAuthorInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "" && value.length > 15);

  let formIsValid = false;
  if (titleIsValid && messageIsValid && authorIsValid) {
    formIsValid = true;
  }

  async function addPoemHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    if (!formIsValid) {
      return;
    }
    const poem = {
      title: title.trim(),
      author: author.trim(),
      message: message,
      date: date.toLocaleString("en-US", options),
    };
    const response = await fetch(
      "https://poems-e8dc6-default-rtdb.firebaseio.com/poems.json",
      {
        method: "POST",
        body: JSON.stringify(poem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
    resetTitleInput();
    resetMessageInput();
    resetAuthorInput();
  }

  async function fetchPoemHandler() {
    setIsLoading(true);
    const response = await fetch(
      "https://poems-e8dc6-default-rtdb.firebaseio.com/poems.json"
    );
    const data = await response.json();
    const loadedPoems = [];
    for (const key in data) {
      loadedPoems.push({
        id: key,
        title: data[key].title,
        author: data[key].author,
        date: data[key].date,
        message: data[key].message,
      });
    }
    setPoemList(loadedPoems);
    setIsLoading(false);
  }

  //output an initial poem when page loads
  useEffect(() => {
    fetchPoemHandler();
  }, []);
  return (
    <div>
      <Meta
        title="Write your own poem"
        keywords="blog, katherine k, message, contact, email"
        description="A form to reach me"
      />
      <div className="center">
        <h1>Publish a Poem!</h1>
        <p>
          Fill out the form below to publish your own poem to a Firebase
          database for all visitors to see below!
        </p>
        <p>Be sure to leave your name, or type 'anonymous'</p>
      </div>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onBlur={titleBlurHandler}
            onChange={titleChangeHandler}
          ></input>
          {titleInputHasError && (
            <label className="error">Poem must have a title</label>
          )}
          <br />
          <label>Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onBlur={authorBlurHandler}
            onChange={authorChangeHandler}
          ></input>
          {authorInputHasError && (
            <label className="error">
              Poem must have an author, or labeled as anonymous
            </label>
          )}
          <br />
          <label>Poem</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="35"
            rows="10"
            value={message}
            onBlur={messageBlurHandler}
            onChange={messageChangeHandler}
          ></textarea>
          <br />
          {messageInputHasError && (
            <label className="error">Poem must have a body</label>
          )}
          <br />
          {isLoading && <LoadingSpinner />}
          <button
            type="submit"
            onClick={addPoemHandler}
            id="submit"
            disabled={!formIsValid}
          >
            Submit Poem
          </button>
        </div>
      </form>
      <div>
        {poemList.map((poems) => (
          <>
            <h2>{poems.title}</h2>
            <h3>{poems.author}</h3>
            <p>{poems.message}</p>
            <p>{poems.date}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default postpoem;
