import React, { Component } from 'react'

export default class BookPage extends Component {
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
        console.log('gelen state: ', this.state.book)
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
                    
                </form>
        )
    }
}
