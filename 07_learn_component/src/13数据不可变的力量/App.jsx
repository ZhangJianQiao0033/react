import React, { Component, PureComponent } from 'react'

export class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      books: [
        { name: "你不知道JS", price: 99, count: 1 },
        { name: "JS高级程序设计", price: 88, count: 1 },
        { name: "React高级设计", price: 78, count: 2 },
        { name: "Vue高级设计", price: 95, count: 3 },
      ]
    }
  }
  addNewBook() {
    const newBook = {name: "你不知道JS222", price: 99, count: 1}
    const newBooks = [...this.state.books]
    newBooks.push(newBook)
    this.setState({
      books: newBooks
    })
  }
  addCounter(index) {
    const books = [...this.state.books]
    books[index].count++
    this.setState({
      books
    })
  }
  render() {
    const {books} = this.state
    return (
      <div>
        <h2>数据列表</h2>
        <ul>
          {
            books.map((item, index) => {
              return (
                <li key={index}>
                  <span>name:{item.name}--price:{item.price}--count:{item.count}</span>
                  <button onClick={() => this.addCounter(index)}>+1</button>
                </li>
                
              )
            })
          }
        </ul>
        <button onClick={() => this.addNewBook()}>+1</button>
      </div>
    )
  }
}

export default App