import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDict = {
    "🐒": "Monkey",
    "🐕": "Dog",
    "🐈‍⬛": "Cat",
    "🐖": "Pig",
    "🐘": "Elephant",
    "🦁": "Lion",
    "🦍": "Gorilla",
    "🐺": "Fox",
    "🐎": "Horse",
    "🐄": "Cow"
  };
  const animalDict=Object.keys(emojiDict);

  const [meaning, setMeaning] = useState("");
  function changeHandler(event) {
    // console.log(event.target.value);
    let userInput = event.target.value;
    let meaning = emojiDict[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji){
    let meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Animals Emoji Finder🐻</h1>
      <input type="text" onChange={changeHandler} />
      <h2>{meaning}</h2>
      <h3>My Emoji's</h3>
      {
        animalDict.map(items=>{
          return (
          <span onClick={()=>emojiClickHandler(items)} 
          key={items} style={{fontSize:"2rem",
          padding:"1rem",cursor:"pointer"}}>
            {items}
          </span>
        )
        })
      } 
    </div>
  );
}
