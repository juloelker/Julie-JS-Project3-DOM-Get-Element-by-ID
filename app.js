//JS to practice DOM Manipulation, get element by ID

// wrote this because I was having difficulty
// writing JS to find things in the DOM,
// caused all my conditionals to return incorrect results

//get element by ID "main", returns id and all child elements
const mainSectionID = document.getElementById("main");
// console.log(mainSectionID);

//get element by ID followed by the id itself,
// returns the id name only, no children
// console.log(mainSectionID.id);

// .className property finds the className of the element with an ID
// returns nothing if there is no class
// does NOT return child classes of the parent ID
// console.log(mainSectionID.className);

//change styling of the ID in the console log, not good practice
// console.log((mainSectionID.style.background = "rebeccapurple"));

// separate the above into 2 lines of code, still not good practice
// mainSectionID.style.background = "rebeccapurple";
console.log(mainSectionID);

// style to disappear but keep the blank space, hoisted
// i.e., the property below can be written after the console.log line
// mainSectionID.style.visibility = "hidden";

// style to make the item disappear and remove residual blank space
// also hoisted
mainSectionID.style.display = "none";
