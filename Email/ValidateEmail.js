function isValid(email){
    // Email regex
    const regex = /^abc(\.[a-zA-Z0-9]+)?(@bridgelabz(\.[a-zA-Z]{2,}){0,2})?$/;
    return regex.test(email);
}

// Email Test Cases
let email1 = "abc";
let email2 = "abc.xyz";

console.log(`Email ${email1} is `,isValid(email1));
console.log(`Email "${email2}" is `, isValid(email2));