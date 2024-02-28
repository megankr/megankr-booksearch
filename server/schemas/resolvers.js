const typeDefs = `

type Auth {
    token: ID!
    user: User
  }

type Book {
    bookId
    authors
    description
    title
    image
    link

}

type User {
    _id: ID
    username: String
    email: String
    bookCount
    savedBooks
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    saveBook
    removeBook
}

type Query {
    me: User
  }
  ;`