import React, {useState} from 'react';

const AddBookComponent = ({setBookList, bookList}) => {

    const [
        title,
        setTitle,
        author,
        setAuthor,
        isbn,
        setIsbn
    ] = AddBookInputHook();

    const handleAddBook = () => {
        const newBookList = [...bookList];
        newBookList.push({
            title: title,
            author: author,
            isbn: isbn
        });
        setBookList(newBookList);
    }

    return (
        <div className={"page-container"}>
            <div className={"add-book-input-container"}>

                <div className={"book-container"}>
                    <div>
                        Title:
                    </div>
                    <input onChange={event => {
                        setTitle(event.target.value);
                    }}
                           value={title}
                    />
                </div>

                <div className={"book-container"}>
                    <div>
                        Author:
                    </div>
                    <input onChange={event => {
                        setAuthor(event.target.value);
                    }}
                           value={author}
                    />
                </div>

                <div className={"book-container"}>
                    <div>
                        ISBN:
                    </div>
                    <input onChange={event => {
                        setIsbn(event.target.value);
                    }}
                           value={isbn}
                    />
                </div>
                <button onClick={handleAddBook}>
                    Add Book
                </button>
            </div>
        </div>
    );
}

const AddBookInputHook = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

    return [
        title,
        setTitle,
        author,
        setAuthor,
        isbn,
        setIsbn
    ];
}

export default AddBookComponent;
