import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }){
    
    let emoji = "☕️";
    let emojiCount;
    
    if (minutes < 30) {
    // Round up to the nearest 5 and calculate the number of coffee cups
    emojiCount = Math.ceil(minutes / 5);
} else {
    // Round up to the nearest 10 and calculate the number of bento boxes
    emoji = "🍱";
    emojiCount = Math.ceil(minutes / 10);
  }

  // Create the emoji string
  const emojis = emoji.repeat(emojiCount);
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>

        </article>
    )
}

export default Article;