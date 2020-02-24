import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as bookActions from '../redux/actions/bookActions'
import PropTypes from 'prop-types'


class BookPage extends Component {
    state = {
        book : {
            title: ''
        }
    }

    handleChange = (event) => {
        const book = {...this.state.book, title: event.target.value}
        this.setState({
            book: book
        })
        // log console
        //console.log('New State: ', this.state.book)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(bookActions.createBook(this.state.book))
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <h2>Books</h2>
                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.book.title}
                    />
                    <input 
                        type='submit'
                        value='save'
                    />

                    {this.props.books.map(book => (
                        <div key={book.title}>{book.title}</div>
                    ))}
                    
                </form>
        )
    }
}

BookPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

// determines what part of the state we expose to component
// this func determines what state is passed to our component via props

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookPage)
