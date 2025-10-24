

function launchBrowser () {

var browserName = "Edge"

if (browserName == "Chrome") {

console.log(`The browser name entered is ${browserName}`)

} else {

console.log(`The browser name entered is not Chrome`)

}

}

launchBrowser()



function runTests () {

let testType = "Sanity"

switch (testType){

case "Smoke" :

console.log("The test type selected is smoke")

break;

case "Sanity" : 

console.log("The test type selected is Sanity")

break;

case "Regression" : 

console.log("The test type selected is Regression")

break;

default: 

console.log("The default value should be Smoke")

}

}

runTests()