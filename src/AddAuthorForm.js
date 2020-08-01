import React, { useReducer, useState } from 'react'
import './AddAuthorForm.css'

const AuthorFunction = (props) => {
    const [state, setstate] = useState({ name: '', imageUrl: '', books: [], Booktemp: '' })

    const handleAddbook = (e) => {

        debugger;

        setstate({ ...state, books: state.books.concat([state.Booktemp]) })



    }
    const handleSubmit = (e) => {
        debugger;

        props.onAddAuthor(state)
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className="AddAuthorForm__input">
                <lable htmlFor="name"> Name</lable>
                <input type="text" name="name" value={state.name} onChange={(e) => setstate({ ...state, name: e.target.value })}></input>
            </div>
            <div className="AddAuthorForm__input">
                <lable htmlFor="image"> Image</lable>
                <input type="text" name="image" value={state.image} onChange={(e) => setstate({ ...state, image: e.target.value })}></input>
            </div>

            <div className="AddAuthorForm__input">
                {state.books.map((book) => <p>{book}</p>)}
            </div>
            <div className="AddAuthorForm__input">
                <lable htmlFor="Book"> Book</lable>
                <input type="text" name="booktemp" value={state.Booktemp} onChange={(e) => setstate({ ...state, Booktemp: e.target.value })}></input>
                <input type="button" value="+" onClick={handleAddbook}></input>
            </div>
            <div className="AddAuthorForm__input">
                <input type="submit" value="submit"></input>
            </div>

        </form>
    )

}

class AuthorInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            image: "",
            books: [],
            booktemp: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onFieldChange(e) {
        this.setState({

            [e.target.name]: e.target.value
        })
    }


    handleAddbook(e) {
        debugger;
        this.setState({
            books: this.state.books.concat([this.state.booktemp]),
            booktemp: '',
        })
    }


    render() {
        return (
            <div></div>
        )
    }
}









const AddAuthorForm = ({ match, onAddAuthor }) => {
    return (
        <div className="AddAuthorForm">
            <h1>Add Author Form</h1>
            <AuthorFunction onAddAuthor={onAddAuthor} />
        </div>
    )
}


export default AddAuthorForm