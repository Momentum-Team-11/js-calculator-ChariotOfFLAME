//results using innerHTML and Template literals
// document.getElementById("results").innerHTML = `<h1>${input}</h1>`;

// First attempt. Good! Close to operational. Could spell out every id, make them clicky, and make it work!
// let bgString = ''
// let resultsString = ''
// let results = document.querySelector("#results")

// let cButton = document.querySelector("#C")
// cButton.addEventListener('click', function() {
//     bgString = ''
//     results.innerHTML = ''
// })

// let equals = document.querySelector ("#equals")
// equals.addEventListener('click', function(equals) {
//     results.innerHTML = eval(bgString)
//     results.innerHTML.splice(0, 1)
// })

// document.addEventListener("click", function(event){
//     bgString += event.target.innerHTML
//     results.innerHTML += event.target.innerHTML
//     console.log(`${event.target.innerHTML} was clicked!`)
//     results.removeEventListener('click', function(event){
//         bgString += event.target.innerHTML
//         results.innerHTML += event.target.innerHTML
//         console.log(`${event.target.innerHTML} was clicked!`)
//     })
// })

let results = document.getElementById("results") //make the results box an object
let math = Array.from(document.getElementsByClassName("math")); //make all the buttons into an array

math.map( button => { //loop over the array and call each element "button" when called, then...
    button.addEventListener('click', function(event) { //make each "button" clicky, passing the function to the object "event"
        switch(event.target.innerText){ //evaluate the inner text of each button, and
            case "C": //if it's "C"
                results.innerText = '' //change the inner text of the results box to an empty string
                break; //don't do anything else
            case '=': //if it's "="
                results.innerText = eval(results.innerText) //make the inner text of the results box the evaluation of what was in there already
                break;
            case "x": //if it's "x"
                results.innerText += '*' //add "*" to the string INSTEAD of "x" (as eval breaks with "x" in the string)
                break;
            default: //but in every other case (or by default)
                results.innerText += event.target.innerText; //add the inner text from the clicked "button" to the end of the result boxes inner text string
        }
    })
})
