// Problem Statement-1:
// Create a function that prints a sentence containing the name and age of a user.
const printUser = (name: string, age: number): string => {
    return `${name} is ${age} years old.`
}

const result = printUser('Amina', 25);
console.log(result)



// Problem Statement:
// Store the name, price, and availability of a product using primitive types.
const products = (product: object): string => {
    const { name, price, isAvailable } = product;
    return `${name} costs ${price} and is available: ${isAvailable}`
}

const productDetails: {
    name: string,
    price: number,
    isAvailable: boolean
} = {
    name: 'Laptop',
    price: 45000,
    isAvailable: true
}

const result = products(productDetails);
console.log(result);



// Problem Statement:
// Create an array that contains the names of students and the number of students that the console will display.
const studentsLength = (students: string[]): string => {
    return `Total student:${students.length}`
}


const students: string[] = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
const result = studentsLength(students);
console.log(result);



// Create a tuple that contains a person's name and age.
const personInfo = (person: [string, number]): string => {
    const [name, age] = person;
    return `${name} is ${age} years old.`
}

const personDetails: [string, number] = ['Amina', 22];
const result = personInfo(personDetails);
console.log(result);



const userInfo = (personInfo: { name: string, email?: string }): string => {
    const { name, email } = personInfo;
    return `Name: ${name}, Email: ${email || 'Not Provided'},`
}

const personInfo: { name: string, email?: string } = { name: 'Amina', email: 'amina@example.com' };
const result = userInfo(personInfo);
console.log(result);



const checkEven = (number: number): boolean => {
    return number % 2 === 0;
}

const numbers: number = 10;
const result = checkEven(numbers);
console.log(result);


const sumAll = (numbers: number[]): number => {
    const total = numbers.reduce((total, num) => total + num, 0);
    return total;
}
const numbers: number[] = [1, 2, 3, 4, 5];
const result = sumAll(numbers);
console.log(result)



const arrayMerge = (array1: number[], array2: number[]): number[] => {
    return [...array1, ...array2];
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const mergedArray = arrayMerge(array1, array2);
console.log(mergedArray);



const positiveNegative = (number: number): string => {
    return number >= 0 ? 'Positive' : 'Negative';
}

const number: number = -5;
const result = positiveNegative(number);
console.log(result);



const defaultValue = (userName: string | undefined = 'Guest'): string => {
    return userName;
}

const userName = undefined;
const result = defaultValue(userName);
console.log(result);



const userInformation = (userInfo: {
    name: string,
    age: number,
    email: string,
    skills: string[],
    active: boolean
}) => {

    const { name, age, email, skills, active } = userInfo;
    const [skill1, skill2, skill3] = skills;

    return {
        Name: name,
        Age: age,
        Email: email,
        Skills: `${skill1}, ${skill2} ${skill3}`,
        Active: active
    };
}




const userInfo: {
    name: string;
    age: number;
    email: string;
    skills: string[];
    active: boolean;
} = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
}

const result = userInformation(userInfo);
console.log(result);



const cart: {
    id: number,
    name: string,
    price: number,
    quantity: number,
    category: string,
    inStock: boolean
} =
{
    id: 1,
    name: "Laptop",
    price: 75000,
    quantity: 1,
    category: "Electronics",
    inStock: true
}



const checkLogin = (user: {
    email: string,
    password: string
}): string => {
    if (user.email === "admin@gmail.com" && user.password === "123456") {
        return 'Login Successful';
    }
    return 'Invalid email or password'
}


const user: {
    email: string,
    password: string
} = {
    email: "admin@gmail.com",
    password: "12346"
}

const result = checkLogin(user);
console.log(result);