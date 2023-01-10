import React, { useState, useEffect } from "react";
import useInput from "../../hooks/use-input";
import LoadingSpinner from "../../components/LoadingSpinner";
import Meta from "../../components/Meta";

function PostPoem() {
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
    const messageWithLineBreaks = message.replace(/\n/g, "\n");
    if (!formIsValid) {
      return;
    }
    const poem = {
      key: title.trim(),
      title: title.trim(),
      author: author.trim(),
      message: messageWithLineBreaks,
      date: date.toLocaleString("en-US", options),
    };
    console.log(poem)
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
    console.log(loadedPoems)
    setPoemList(loadedPoems);
    setIsLoading(false);
  }

  //output an initial poem when page loads
  useEffect(() => {
    fetchPoemHandler();
  }, []);
  return (
    <>
      <Meta
        title="Catchin Up With Kat- Write Your Own Poem"
        keywords="blog, katherine k, message, contact, email"
        description="A form to reach me"
      />
      <div className="center">
        <h2>PUBLISH A POEM</h2>
        <p> This form connects to a FireBase database that I created to store a title, author, poem, and date published from each submission.</p>
        <p>
          Fill it out below to publish your own poem to the
          database for all visitors to see! After filling out all fields, press &quot;Submit&quot; at the bottom of the form to send it to the database.
        </p>
        <p>Be sure to leave your name, or type anonymous</p>
      </div>
      <form>
        <div>
          <h4>Poem Form</h4>
          <label>Title</label>
          <br/>
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
          <br/>

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
          <label>Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onBlur={messageBlurHandler}
            onChange={messageChangeHandler}
          ></textarea>
          <br />
          {messageInputHasError && (
            <label className="error">Poem must have a message</label>
          )}
          {isLoading && <LoadingSpinner />}
          <button
            type="submit"
            onClick={addPoemHandler}
            id="submit"
            disabled={!formIsValid}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="poem-container">
        {poemList.map((poems) => (
          <div className="poem-card" key={poems.key}>
            <div className="poem-title">{poems.title}</div>
            <div className="poem-message">{poems.message}</div>
            <div className="poem-author">{poems.author}</div>
            <div className="poem-date">{poems.date}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostPoem;
