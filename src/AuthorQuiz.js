import UserContext from "./Context";
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
        </div>
    );
}


const Book = ({ title, onClick }) => {
    debugger;
    return (
        <div className="answer" onClick={() => { onClick(title); }}>
            <h4>{title}</h4>
        </div>
    )

}
const Turn = ({ author, books, highlight, onAnswerSelected }) => {
    debugger;
    function highlightToBgColor(highlight) {
        const mapping = {
            none: "",
            correct: "green",
            wrong: "red",
        };
        return mapping[highlight];
    }

    return (
        <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>

            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="author" ></img>
            </div>
            <div className="col-6">
                {books.map((title) => <p>{<Book title={title} key={title} onClick={onAnswerSelected}></Book>}</p>)}
            </div>
        </div>
    )
}


function Continue({ show, onContinue }) {
    debugger;
    return (
        <div className="row continue">
            {show ? (
                <div className="col-11">
                    <button
                        className="btn btn-primary btn-lg float-right"
                        onClick={onContinue}
                    >
                        Continue
            </button>
                </div>
            ) : null}
        </div>
    );
}


const Footer = () => {
    debugger;
    return (
        <div id="footer" className="row">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from{" "}
                    <a href="http://commons.wikimedia.org/wiki/Main_Page">
                        Wikimedia Commons{" "}
                    </a>
              and are in the public domain
            </p>
            </div>
        </div>
    );
}

const Authorquiz = ({ onAnswerSelected, onContinue }) => {
    debugger;
    var authors = useContext(UserContext);
    var turnData = authors.turnData //from context
    var highlight = authors.highlight // from context
    useEffect(() => {
        console.log(authors);
    }, []);

    return (
        <div className="container-fluid">
            <Hero></Hero>
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}></Turn>
            <Continue show={highlight == "correct"} onContinue={onContinue}></Continue>
            <Link to="/Add"> Add New Author</Link>
            <Footer></Footer>
        </div>
    )
}


export default Authorquiz