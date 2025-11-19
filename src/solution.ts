const formatValue = (
  
  value: string | number | boolean

): string | number | boolean => {


  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return value;
};








const getLength =  (value: string | any[]): number => {


    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)){
        return value.length;
    }
   
    return value;

}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));







class man {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

}


const person1 = new man("John", 25);
console.log(person1);









type items = {
  title: string;
  rating: number;
};

const filterByRating = (items: items[]): items[] => {
  return items.filter((item) => {
    return item.rating >= 4;
  });

};



const products : items[] = [
{ title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
]

const topProducts = filterByRating(products)

console.log(topProducts);









type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};


const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((item) => item.isActive === true);
};


const person: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



const activeUsers = filterActiveUsers(person);
console.log(activeUsers);










interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (bookItem: Book) => {
  console.log(
    `Title: ${bookItem.title}. Author: ${bookItem.author}. Published Year: ${bookItem.publishedYear}. Available: ${bookItem.isAvailable}`
  );

};

const myBookItem: Book = {
    title: "Best Seller Book",
    author: "Jhon",
    publishedYear: 2024,
    isAvailable: true,
}

console.log(myBookItem);
