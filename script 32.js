function multiplyValues() {
    const first = getElementNumberValue("first")
    const second = getElementNumberValue("second")
    const multipliedValue = first * second;
    writeResult(multipliedValue)//108
}

function divideInputValues() {
    const first = getElementNumberValue("first")
    const second = getElementNumberValue("second")
    const multipliedValue = first / second;
    writeResult(dividedValue)
} 

function getElementNumberValue(id) {
    const firstElement = document.getElementById("first");
    const valueAsString = firstElement.value;
    // console.log(valueAsString); //12
    // const valueType = typeof value; tikrinam value tipa
    // console.log(valueType);
    const valueAsNumber = Number(valueAsString);
    // console.log(typeof valueAsNumber)
    return valueAsNumber;
}

function writeResult(result) {
    const resultParagraph = document.getElementById("result")
    resultParagraph.innerHTML = "Result is: " + result
}
getElementNumberValue()

// kad funkcija butu kvieciama po migtuko papaudimo
multiplyValues()

