import express from 'express';
import cors from 'cors';
import routes from './routes/apiRoutes.js';
const app = express();

// Enable CORS for everything
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', "U"]

function applyStyling(word, style) {
  switch (style) {
    case "uppercase":
      return word.toUpperCase();

    case "capital":
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
      
    default:
      return word.toLowerCase();

  }
}


function getStyle(word) {
  if (word === word.toUpperCase())
    return "uppercase";

  if (word[0] === word[0].toUpperCase())
    return "capital"

  return "normal";
}
export function createWording(word) {

  const firstLetter = word[0];
  if (!vowel.includes(firstLetter)) {

    for (let i = 0; i < word.length; i++) {

      if (vowel.includes(word[i])) {
        const prefix = word.slice(0, i);
        const suffix = word.slice(i);
        const wordFinal = suffix + prefix + 'ay';
        const style = getStyle(word);
        console.log("wordF", wordFinal)
        console.log('style', style)
        const correct = applyStyling(wordFinal, style);
        console.log('correct', correct)
        return correct;
        // return suffix + prefix + 'ay';
      }

    }

  }
  else {
    return word + "yay";
  }

}



// pleased to meet you
// easedplay otay eetmay ouyay



export function fixSentence(sentence) {
  return sentence.split(' ').map(word => createWording(word)).join(" ");
}

// console.log(createWording('pig'))
// console.log(createWording('latin'))
// console.log(createWording('smile'))
// console.log(createWording('floor'))
// console.log(createWording('egg'))
// console.log(createWording('explain'))

console.log(fixSentence("A tree whose elements have at most two children is called a BINARY TREE"))


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

export default app;