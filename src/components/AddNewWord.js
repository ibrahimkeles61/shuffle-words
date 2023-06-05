import React, { useState } from "react";
import "../css/AddNewWord.css";
import { useDispatch } from "react-redux";
import { addNewWord } from "../app/wordSlice";
function AddNewWord() {
  const dispatch = useDispatch();
  const [en, setEn] = useState("");
  const [tr, setTr] = useState("");
  const [exp, setExp] = useState("");
  const changing = (inputName, value) => {
    switch (inputName) {
      case "en":
        setEn(value);
        break;
      case "tr":
        setTr(value);
        break;
      case "exp":
        setExp(value);
        break;
      default:
        break;
    }
  };
  const clickSave = () => {
    dispatch(addNewWord(en));
  };
  //
  return (
    <div className="addNewWord">
      <div className="panel panel__addNewWord">
        <form className="newWordForm">
          <input
            type="text"
            value={en}
            onChange={(e) => changing("en", e.target.value)}
            placeholder="English.."
            className="wordInput"
          />
          <input
            type="text"
            value={tr}
            onChange={(e) => changing("tr", e.target.value)}
            placeholder="Turkish.."
            className="wordInput"
          />
          <input
            type="text"
            value={exp}
            onChange={(e) => changing("exp", e.target.value)}
            placeholder="Explanation if its needed.."
            className="expInput"
          />
          <button onClick={clickSave} className="submitInput">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddNewWord;
