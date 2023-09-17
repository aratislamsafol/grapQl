import { books,author,users } from "./dataset.js";

export const resolvers = {
    Query: {
      books: () => books,
      book:(_,{id})=>books.find(book=>book.id == id),
      author:()=>author,
      authors:(_,{id})=>author.filter(data=>data.id == id),
      users:()=> users,
      user:(_,{id})=>users.find(user=>user.id == id)
    },
    Book:{
        author:(bd)=>author.filter(data=>data.id == bd.id) 
    },
    User:{
      book:(uID)=>books.filter(data=>data.ubconnect == uID.userConnect)
    }
  };
