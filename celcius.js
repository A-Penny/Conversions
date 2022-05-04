//take argv array element at index 2 and return the Farenheit value;
const celsToF = () => {
    let cel = process.argv[2];
    if (isNaN(cel)) {
        return 'Please enter a number value in degrees Celcius.'
    };
    let far = (cel * 1.8) + 32;
    return `${cel} degrees Celcius is equal to ${far} degrees Fahrenheit.`
};
console.log(celsToF());
