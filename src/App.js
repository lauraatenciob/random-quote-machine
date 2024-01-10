import "./App.css";
import { useState } from "react";

import generateRandomQuote from "./generateRandomQuote"

function App() {
  const [quote, setQuote] = useState(generateRandomQuote());

  function handleClick() {
    setQuote(generateRandomQuote())
  }

  return (
    <main>
      <section id="quote-box">
        <p id="text">
          {quote.text}
        </p>
        <p id="author">- {quote.author}</p>
        <button onClick={handleClick} id="new-quote">New quote</button>
        <a id="tweet-quote" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${quote.text}`}>Tweet</a>
      </section>
    </main>
  );
}

export default App;
