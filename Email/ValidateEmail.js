function isValid(email){
    // Email regex
    const regex = /^abc(\.[a-zA-Z0-9]+)?(@bridgelabz(\.[a-zA-Z]{2,}){0,2})?$/;
    return regex.test(email);
}

// Email Test Cases
let email1 = "abc";

console.log(`Email ${email1} is `,isValid(email1));