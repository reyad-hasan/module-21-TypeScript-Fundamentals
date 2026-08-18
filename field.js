"use strict";
const checkLogin = (user) => {
    if (user.email === "admin@gmail.com" && user.password === "123456") {
        return 'Login Successful';
    }
    return 'Invalid email or password';
};
const user = {
    email: "admin@gmail.com",
    password: "12346"
};
const result = checkLogin(user);
console.log(result);
