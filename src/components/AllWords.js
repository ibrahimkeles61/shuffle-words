import React from "react";
import "../css/AllWords.css";
// import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Card from "./Card";
function AllWords() {
  const words = useSelector((state) => state.wordSlice.words);
  // const params = useParams(); //adres çubuğundan kendi tanımladığım değişkenleri çekebilmek için
  const enWords = words.map((e) => e.en).sort();
  return (
    <div className="allWords">
      <div className="cards">
        {enWords.map((en, i) => (
          <Card
            key={words.find((x) => x.en === en).id}
            id={words.find((x) => x.en === en).id}
            en={en}
            tr={words.find((x) => x.en === en).tr}
          />
        ))}
      </div>
    </div>
  );
}
export default AllWords;
