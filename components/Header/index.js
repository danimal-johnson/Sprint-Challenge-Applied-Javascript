// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const header = function() {
    console.log ("Running the Header() function");
    // Create the fields
    const newHeader = document.createElement("div");
    const newDate   = document.createElement("span");
    const newTitle  = document.createElement("h1");
    const newTemp   = document.createElement("span");

    // Add classes to the fields
    newHeader.classList.add("header");
    newDate.classList.add("date");
    newTemp.classList.add("temp");

    // Add structure to the component
    newHeader.appendChild(newDate);
    newHeader.appendChild(newTitle);
    newHeader.appendChild(newTemp);

    // Fill with data. (Should we be doing this here?)
    newDate.textContent = "MARCH 28, 2019";
    newTitle.textContent = "Lambda Times";
    newTemp.textContent = "98°";

    console.log ("Attaching the header");
    // Attach the component to the DOM
    const attachmentPoint = document.querySelector(".header-container");
    attachmentPoint.appendChild(newHeader);

}

header();