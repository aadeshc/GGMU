import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Author from './AuthorQuiz'
import { shuffle, sample } from "underscore";
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import AddAuthorForm from './AddAuthorForm';
import { UserProvider } from './Context'

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

]


function getTurnData(authors) {
  debugger;
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

let state = resetState()


function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book == answer)
  state.highlight = isCorrect ? 'correct' : 'wrong'
  debugger;
  render();


}

function resetState() {
  debugger;
  return {
    turnData: getTurnData(authors),
    highlight: "",

  }

}

function TopApp() {
  debugger;
  return (
    <Author onAnswerSelected={onAnswerSelected} onContinue={() => {
      state = resetState();
      render();


    }} />
  )
}




const AuthorWrapper = withRouter(({ history }) => {
  debugger;
  return (
    <AddAuthorForm onAddAuthor={(author) => { authors.push(author); history.push('/') }} />

  )
})


function render() {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <UserProvider value={state}>
          <Route exact path="/" component={TopApp}></Route>
          <Route exact path="/Add" component={AuthorWrapper}></Route>
        </UserProvider>
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
