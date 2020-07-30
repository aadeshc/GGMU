import React from 'react';
import logo from './logo.svg';
import './App.css';
import Author from './AuthorQuiz'
import { shuffle, sample } from "underscore";


const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    books: ['The Adventures of Huckleberry Finn', "Life on missisippi"]
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.jpg',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  },
]


function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) => title === answer)
    ),
  };
}
function render() {
  App()
}

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book == answer)
  state.highlight = isCorrect ? 'correct' : 'wrong'
  render();


}
const state = {
  turnData: getTurnData(authors),
  highlight: "",

}



function App() {

  return (
    <div className="App">
      <Author {...state} onAnswerSelected={onAnswerSelected} />
    </div>
  );
}

export default App;
