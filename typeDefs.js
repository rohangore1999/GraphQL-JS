export const typeDefs = `#graphlq struc
    type Author {
        id: ID!
        name: String!
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
    }

    #to get the data
    type Query {
        authors: [Author]
        books: [Book]
    }
`