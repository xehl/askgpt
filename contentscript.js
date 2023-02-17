console.log("This prints to the console of the google page");

// when a google search page is detected, send a message to the background script
// background script will handle the api call to OpenAI server
// and send the response back to the content script

// TODO:
// 1. send message to background script
// 2. receive response from background script
// 3. generate UI component to display response + add styles
// 4. append UI component to DOM

// extabar is the div on search results to append to
let exta = document.querySelector("#extabar");
let injected = document.createElement("div");
injected.innerHTML = "Hello World";
injected.style.backgroundColor = "red";

let results = document.querySelector(".LHJvCe");
injected.style.width = results.scrollWidth;

exta.insertBefore(injected, null);
