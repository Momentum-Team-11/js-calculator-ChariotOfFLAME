//results using innerHTML and Template literals
// document.getElementById("results").innerHTML = `<h1>${input}</h1>`;

//lighten background when clicked
let cButton = document.querySelector("#C")
console.log(cButton)
document.addEventListener("click", function(event){
    let value = event.target.innerHTML
    console.log(parseInt(value))
    console.log('CLICKED')
})