document.addEventListener("DOMContentLoaded", function () {
    // Array of books with name, author, and summary
    const books = [
        {
            name: "[Data] Data Wrangling with Python (2016)",
            author: "Jacqueline Kazil & Katharine Jarmul",
            file: "books/[Data] Data Wrangling with Python (2016).pdf",
            summary: "A hands-on guide to data transformation and processing using Python."
        },
        {
            name: "[NLP] Natural Language Processing with PyTorch (2019)",
            author: "Delip Rao & Brian McMahan",
            file: "books/[NLP] Natural Language Processing with PyTorch (2019).pdf",
            summary: "Learn NLP techniques using PyTorch, covering deep learning models for text."
        },
        {
            name: "[THE] Pattern Recognition and Machine Learning (2016)",
            author: "Christopher Bishop",
            file: "books/[THE] Pattern Recognition and Machine Learning (2016).pdf",
            summary: "A comprehensive introduction to statistical pattern recognition and machine learning."
        }
    ];

    const bookList = document.getElementById("book-list");

    books.forEach(book => {
        const li = document.createElement("li");
        li.classList.add("book-item");

        const title = document.createElement("a");
        title.href = book.file;
        title.target = "_blank"; // Opens in new tab
        title.textContent = book.name;
        title.classList.add("book-title");

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;
        author.classList.add("book-author");

        const summary = document.createElement("p");
        summary.textContent = book.summary;
        summary.classList.add("book-summary");

        li.appendChild(title);
        li.appendChild(author);
        li.appendChild(summary);

        bookList.appendChild(li);
    });
});
