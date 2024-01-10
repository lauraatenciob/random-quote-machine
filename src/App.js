import "./App.css";
import { useState } from "react";
import { ReactComponent as TwitterIcon } from "./twitter.svg";

import generateRandomQuote, { getRandomColor } from "./generateRandomQuote";

function App() {
  const [quote, setQuote] = useState(generateRandomQuote());
  const [color, setColor] = useState(getRandomColor());

  function handleClick() {
    setQuote(generateRandomQuote());
    setColor(getRandomColor());
  }

  return (
    <main
      style={{
        backgroundColor: color,
        color: color,
      }}
    >
      <section id="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">- {quote.author}</p>
        <div className="buttons">
          <a
            style={{
              backgroundColor: color,
            }}
            id="tweet-quote"
            className="button"
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/intent/tweet?text=${quote.text}`}
          >
            <TwitterIcon/>
          </a>
          <button
            style={{
              backgroundColor: color,
            }}
            className="button"
            onClick={handleClick}
            id="new-quote"
          >
            New quote
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
