const data = {
  authors: [
    { id: "1", name: "Author 1", bookIDs: ["101", "102"] },
    { id: "2", name: "Author 2", bookIDs: ["103"] },
  ],
  books: [
    { id: "101", title: "Book 1", publishedYear: 2000, authorId: "1" },
    { id: "102", title: "Book 2", publishedYear: 2001, authorId: "1" },
    { id: "103", title: "Book 3", publishedYear: 2002, authorId: "2" },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      // console.log({ parent }); // as Author is inside Book; so parent will be Book
      return data.authors.find(
        (authorDetails) => authorDetails.id === parent.authorId
      );
    },
  },

  Author: {
    books: (parent, args, context, info) => {
      console.log({ parent });
      return data.books.filter((book) => parent.bookIDs.includes(book.id));
    },
  },

  Query: {
    authors: () => {
      return data.authors;
    },

    books: () => {
      return data.books;
    },
  },

  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log({ args });
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);

      return newBook;
    },
  },
};

// query ExampleQuery {
//   authors {
//     id
//     name
//     books{
//       id
//       title
//     }
//   }
//   books {
//     id
//     title
//     author {
//       id
//       name
//     }
//   }
// }

// ---------------------------------------------------------

// mutation Mutation($title: String!, $authorId: ID!) {
//   addBook(title: $title, authorId: $authorId) {
//     title
//   }
// }

// ARGS
// {
//   "title": "What If?",
//   "authorId": "1"
// }
