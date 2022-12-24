import React from 'react'
import "./Quotes.css"
const Quotes = ({text, author}) => {
  return (
    <div className="quote">
      <p className="quote-text">{text}</p>
      <small className="quote-author">{author}</small>
    </div>
  )
}

export default Quotes;