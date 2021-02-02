import React, { useState } from 'react';
import BookListComponent from "./book-list-component";
import AddBookComponent from "./add-book-component";

const BookInventoryPage = ({}) => {

    const [bookList, setBookList] = useState([]);

    return(
        <div className={"page-container"}>
            <h1>
                My Book Library
            </h1>
            <BookListComponent bookList={bookList}/>
            <AddBookComponent bookList={bookList} setBookList={setBookList}/>
        </div>
    );
}

export default BookInventoryPage;
