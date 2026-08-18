const books: string[] = ['book1', 'book2', 'book3'];
const runs: number[] = [10, 20, 30, 40, 50];

// const shoppingList: [string, number] = ['iphone', 15000];

// optional property
const book: {
    name: string,
    author: string,
    price: number,
    pages: number,
    isUsed?: boolean,
} = {
    name: 'Chemistry',
    author: 'Naag',
    price: 500,
    pages: 200,
    // isUsed: true,
}

// book.name =