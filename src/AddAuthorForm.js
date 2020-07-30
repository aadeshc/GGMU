import React from 'react'
import './AddAuthorForm.css'

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
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddAuthor(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm__input">
                    <lable htmlFor="name"> Name</lable>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange.bind(this)}></input>
                </div>
                <div className="AddAuthorForm__input">
                    <lable htmlFor="image"> Image</lable>
                    <input type="text" name="image" value={this.state.image} onChange={this.onFieldChange.bind(this)}></input>
                </div>

                <div className="AddAuthorForm__input">
                    {this.state.books.map((book) => <p>{book}</p>)}
                </div>
                <div className="AddAuthorForm__input">
                    <lable htmlFor="Book"> Book</lable>
                    <input type="text" name="booktemp" value={this.state.booktemp} onChange={this.onFieldChange.bind(this)}></input>
                    <input type="button" value="+" onClick={this.handleAddbook.bind(this)}></input>
                </div>
                <div className="AddAuthorForm__input">
                    <input type="submit" value="submit"></input>
                </div>

            </form>
        )
    }
}


const AddAuthorForm = ({ match, onAddAuthor }) => {
    return (
        <div className="AddAuthorForm">
            <h1>Add Author Form</h1>
            <AuthorInput onAddAuthor={onAddAuthor} />
        </div>
    )
}


export default AddAuthorForm