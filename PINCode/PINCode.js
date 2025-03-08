function validatePIN(pinCode) {
    // PIN code validation pattern
    const regex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;

    return regex.test(pinCode);
}

// Test PIN codes
const pinCode1 = "400088";
const pinCode2 = "A400088"; 
const pinCode3 = "40008@";

console.log(`Is valid PIN Code (${pinCode1})? `, validatePIN(pinCode1));
console.log(`Is valid PIN Code (${pinCode2})? `, validatePIN(pinCode2));
console.log(`Is valid PIN Code (${pinCode3})? `, validatePIN(pinCode3));