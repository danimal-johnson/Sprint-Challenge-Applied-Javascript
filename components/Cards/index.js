// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    response.data.articles.bootstrap.forEach    (item => { createCard(item, "bootstrap")  });
    response.data.articles.javascript.forEach   (item => { createCard(item, "javascript") });
    response.data.articles.jquery.forEach       (item => { createCard(item, "jquery")     });
    response.data.articles.node.forEach         (item => { createCard(item, "node")       });
    response.data.articles.technology.forEach   (item => { createCard(item, "technology") });
   })
  .catch(error => {
    console.error("The data was not returned", error);
  });


// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

const createCard = function(cardData, category) {
    console.log (category + "\t" + cardData.headline);

    // Create the fields
    const newCard = document.createElement("div");
    const newHeadline = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newImageContainer = document.createElement("div");
    const newImage = document.createElement("img");
    const newByline = document.createElement("span");
    
    // Add classes to the fields
    newCard.classList.add("card");
    newCard.classList.add(category);
    newHeadline.classList.add("headline");
    newAuthor.classList.add("author");
    newImageContainer.classList.add("img-container");

    // Add structure to the component
    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImageContainer);
    newImageContainer.appendChild(newImage);
    newAuthor.appendChild(newByline)

    // Populate the fields
    newHeadline.textContent = cardData.headline;
    newImage.src = cardData.authorPhoto;
    newByline.textContent = `by ${cardData.authorName}`;

    // Attach the component to the DOM
    const attachmentPoint = document.querySelector(".cards-container");
    attachmentPoint.appendChild(newCard);
}


/*
const createCard = function(cardData) {
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
*/