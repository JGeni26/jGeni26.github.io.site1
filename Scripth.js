
const expressionType = prompt("Select expression type: Email, Phone, Postcode");

const userInput = prompt(`Enter the value to validate as ${expressionType}`);

let regex;
let isValid = false;

switch(expressionType.toLowerCase()) {
    case 'email':
        regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        isValid = regex.test(userInput);
        break;
    case 'phone':
        regex = /^\+?[0-9]{10,12}$/; 
        isValid = regex.test(userInput);
        break;
    case 'postcode':
        regex = /^\d{4}$/; 
        isValid = regex.test(userInput);
        break;
    default:
        alert("Invalid expression type selected!");
        break;
}

if (isValid) {
    alert('Valid input!');
} else {
    alert('Invalid input!');
}
