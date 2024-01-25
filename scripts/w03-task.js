/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumber(num1, num2){
    return num1 + num2;
}
function getValue()
{
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    return document.querySelector("#sum").value = addNumber(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", getValue);


/* Function Expression - Subtract Numbers */
const subtraction = function(sub1, sub2)
{
    return sub1 - sub2;
}
const subtractNumbers = function()
{
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    return document.querySelector("#difference").value = subtraction(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (multiply1, multiply2) => multiply1 * multiply2;

const multiplication = () => {
    const multi1 = Number(document.querySelector("#factor1").value);
    const multi2 = Number(document.querySelector("#factor2").value);
    return document.querySelector("#product").value = multiply(multi1, multi2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplication);


/* Open Function Use - Divide Numbers */
function division(div1, div2){
    return div1/div2;
}

function divide()
{
    let divideInput1 = Number(document.querySelector("#dividend").value);
    let divideInput2 = Number(document.querySelector("#divisor").value);
    return document.querySelector("#quotient").value = division(divideInput1, divideInput2);
}

document.querySelector("#divideNumbers").addEventListener("click", divide);

/* Decision Structure */
// const getTotal = document.querySelector("#getotal");
// const clubMember = document.querySelector("#member");
// const subTotal = document.querySelector("#subTotal");
// const total = document.querySelector("#total");

function convert()
{
    let subTotalConvert = Number(document.querySelector("#subtotal").value);
    let clubMember = document.querySelector("#member").value;
    let totals = document.querySelector("#total");

    if (isNaN(subTotalConvert))
    {
        return alert("You just entered an invalid number!");
    }
// This code is another form of if statement and i read about it from MDN, i alos read about the did validating online.
    let discount = !(clubMember.checked) ? 0.15 : 0;

    let total = subTotalConvert * discount;
    let realDiscount = subTotalConvert - total;
    let twoPlaces = realDiscount.toFixed(2);

    return totals.textContent = twoPlaces;

}
document.querySelector("#getTotal").addEventListener("click", convert);




/* ARRAY METHODS - Functional Programming */
let arrayNum = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").innerHTML = arrayNum;

/* Output Odds Only Array */
function oddNumber(num){
    return num % 2 === 1;
      
}

document.querySelector("#odds").innerHTML = arrayNum.filter(oddNumber);

/* Output Evens Only Array */
function evenNumber(num){
    return num % 2 === 0;
      
}
document.querySelector("#evens").innerHTML = arrayNum.filter(evenNumber);


/* Output Sum of Org. Array */
sumValue = 0;
let initial = arrayNum.reduce((accumulator, current) => accumulator + current, sumValue);

document.querySelector("#sumOfArray").innerHTML = initial;

/* Output Multiplied by 2 Array */
let arrayMultiply = arrayNum.map((x) => x*2);
document.querySelector("#multiplied").innerHTML = arrayMultiply;

/* Output Sum of Multiplied by 2 Array */
mapReduce = 0;
let sumOfMultiplied = arrayMultiply.reduce((sum, value) => sum + value, mapReduce);

document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied