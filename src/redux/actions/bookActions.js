// Remember anction send a type and a copy of state to the reducer**
export function createBook(book) {
    return { type: "CREATE_BOOK", payload: book };
} 