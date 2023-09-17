export const typeDefs = `
  
    type Query {
        books: [Book]
        book(id:ID!):Book
        author:[Author]
        authors(id:ID!):[Author]
        users:[User]
        user(id:ID):User
    }

    type Book {
        id:ID!
        name:String
        title: String
        ubconnect:String
        author: [Author]
    }

    type Author{
        id:ID!
        fullName:String
        author:String
    }

    type User{
        id:ID!
        firstName:String
        lastName:String
        email:String
        password:String
        userConnect:String
        book:[Book]
    }

    type Mutation{
        signUpUserDummy(userNew:UserInput):User
    }

    input UserInput{
        firstName:String!
        lastName:String!
        email:String!
        password:String!
    }
`;
