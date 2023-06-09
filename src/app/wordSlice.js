import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  words: [
    {
      id: 1,
      en: "yes",
      tr: "evet",
    },
    {
      id: 2,
      en: "no",
      tr: "hayır",
    },
    {
      id: 3,
      en: "pencil",
      tr: "kalem",
    },
    {
      id: 4,
      en: "truck",
      tr: "kamyon",
    },
    {
      id: 5,
      en: "fast",
      tr: "hızlı",
    },
    {
      id: 6,
      en: "phone",
      tr: "telefon",
    },
    {
      id: 7,
      en: "kid",
      tr: "çocuk",
    },
    {
      id: 8,
      en: "hero",
      tr: "kahraman",
    },
    {
      id: 9,
      en: "team",
      tr: "takım",
    },
    {
      id: 10,
      en: "want",
      tr: "istemek",
    },
    {
      id: 11,
      en: "keyboard",
      tr: "klavye",
    },
    {
      id: 12,
      en: "till",
      tr: "-a kadar",
    },
    {
      id: 13,
      en: "pillow",
      tr: "yastık",
    },
    {
      id: 14,
      en: "down",
      tr: "aşağı",
    },
    {
      id: 15,
      en: "up",
      tr: "yukarı",
    },
    {
      id: 16,
      en: "unstoppable",
      tr: "durdurulamaz",
    },
    {
      id: 17,
      en: "loud",
      tr: "yüksek sesle",
    },
    {
      id: 18,
      en: "apple",
      tr: "elma",
    },
    {
      id: 19,
      en: "banana",
      tr: "muz",
    },
    {
      id: 20,
      en: "student",
      tr: "öğrenci",
    },
    {
      id: 21,
      en: "baby",
      tr: "bebek",
    },
    {
      id: 22,
      en: "man",
      tr: "adam",
    },
    {
      id: 23,
      en: "person",
      tr: "insan",
    },
  ],
};
const wordSlice = createSlice({
  name: "wordSlice",
  initialState,
  reducers: {
    addNewWord: (state, { payload }) => {
      // state.words.push({ en: payload.en, tr: payload.tr, exp: payload.exp });
      // console.log(state.words[state.words.length - 1]);
    },
  },
});
export const { addNewWord } = wordSlice.actions;
export default wordSlice.reducer;
