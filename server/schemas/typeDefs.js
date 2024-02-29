const typeDefs = `

type Auth {
    token: ID
    user: User
  }

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: String!): User
}

type BookInput {
    author: String
    description: String
    title: String
    bookId: ID
    image: String
    link: String
}

type Query {
    me: User
  }
`;

module.exports = typeDefs;