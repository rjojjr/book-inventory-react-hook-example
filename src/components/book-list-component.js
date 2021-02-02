import React from 'react';

const BookListComponent = ({bookList}) => {

    return(
        <div>
            <div>
                My Books
            </div>
            {bookList.map((book, index) => {
                return <BookComponent book={book} index={index}/>
            })}
        </div>
    );
}

const BookComponent = ({book, index}) => {

    return (
        <div className={"book-container"}>
            <div>
                Book #{index + 1}
            </div>
            <div>
                 Title: {book.title}
            </div>
            <div>
                 Author: {book.author}
            </div>
            <div>
                 ISBN: {book.isbn}
            </div>
        </div>
    );
}

export default BookListComponent;
