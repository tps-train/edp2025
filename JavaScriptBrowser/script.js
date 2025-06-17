/*
=========================================================
WA3232 - Chapter 7 Lab: JavaScript in the Browser
=========================================================
*/

// --- DOM Element Selections ---
// We select all the elements we need to interact with at the top for clarity.
const changeTitleBtn = document.getElementById('changeTitleBtn');
const navigateBtn = document.getElementById('navigateBtn');
const infoPara = document.getElementById('info-p');
const highlightItemsBtn = document.getElementById('highlightItemsBtn');
const itemList = document.getElementById('item-list');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const changeHtmlBtn = document.getElementById('changeHtmlBtn');
const showAttributesBtn = document.getElementById('showAttributesBtn');
const userInput = document.getElementById('userInput');
const fetchDataBtn = document.getElementById('fetchDataBtn');
const dataContainer = document.getElementById('data-container');


// --- 7.8: The 'window' Object ---
// The 'window' object is the global object in the browser.
console.log("Section 7.8: The window Object");
console.log("Window inner width:", window.innerWidth);
console.log("Current page URL:", window.location.href);


// --- 7.9: 'window' Lifecycle Methods ---
// These events fire at different points in the window's lifecycle.
window.onload = () => {
  console.log("Section 7.9: window.onload event fired. Page and all resources are fully loaded.");
  infoPara.textContent = "Page loaded at: " + new Date().toLocaleTimeString();
};

window.onresize = () => {
  console.log("Section 7.9: window.onresize event fired. Window resized to", window.innerWidth, "x", window.innerHeight);
};


// --- 7.10: The 'history' Object ---
// Allows interaction with the browser's session history.
navigateBtn.addEventListener('click', () => {
  console.log("Section 7.10: history.back() called.");
  history.back(); // Navigate back one step in history.
});


// --- 7.11 & 7.12: The 'document' Object & Its Properties ---
console.log("Section 7.11/7.12: The document Object");
console.log("Document Title:", document.title);
console.log("Document Body:", document.body);
changeTitleBtn.addEventListener('click', () => {
  document.title = "JS Rocks the Browser!"; // Change the page title
  console.log("Document title changed to:", document.title);
});


// --- 7.15, 7.16 & 7.17: querySelector and Element Properties ---
// querySelectorAll is a powerful way to select multiple elements using CSS selectors.
highlightItemsBtn.addEventListener('click', () => {
    console.log("Section 7.15: Using document.querySelectorAll('.item')");
    const allItems = document.querySelectorAll('.item'); // Returns a NodeList (like an array)
    allItems.forEach(item => {
        item.classList.toggle('highlight'); // 'style' is one property, 'classList' is another!
    });
});

changeHtmlBtn.addEventListener('click', () => {
    console.log("Section 7.17: Changing innerHTML");
    const firstItem = document.querySelector('.item'); // querySelector gets the FIRST match
    if(firstItem) {
        firstItem.innerHTML = "<strong>First</strong> Item (HTML changed!)";
    }
});


// --- 7.18: Element Methods ---
// Methods that manipulate the DOM structure.
addItemBtn.addEventListener('click', () => {
    console.log("Section 7.18: Using document.createElement and appendChild");
    const newItem = document.createElement('li'); // 1. Create a new <li> element
    newItem.textContent = "A new dynamic item"; // 2. Set its content
    newItem.setAttribute('data-info', 'dynamic'); // 3. Set an attribute
    newItem.classList.add('item');
    itemList.appendChild(newItem); // 4. Add it to the list in the DOM
});

removeItemBtn.addEventListener('click', () => {
    console.log("Section 7.18: Using removeChild");
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem); // Remove a child element
    } else {
        console.log("No items to remove.");
    }
});

showAttributesBtn.addEventListener('click', () => {
    console.log("Section 7.18: Using getAttribute");
    const firstItem = document.querySelector('.item');
    if (firstItem) {
        const info = firstItem.getAttribute('data-info');
        alert(`The 'data-info' attribute of the first item is: "${info}"`);
    }
});


// --- 7.19, 7.20 & 7.21: Handling Element Events ---
// Modern way: addEventListener
userInput.addEventListener('keyup', (event) => {
    console.log(`Section 7.21: 'keyup' event. You typed: "${event.target.value}"`);
});

// Legacy way (defined in HTML): onclick attribute
function alertOnClick() {
    console.log("Section 7.20: Event handler function called from HTML onclick attribute.");
    alert('This alert was triggered by an onclick attribute!');
}


// --- 7.22: Network Requests with Fetch ---
// Making an asynchronous request to get data from a server.
fetchDataBtn.addEventListener('click', () => {
    console.log("Section 7.22: Making a network request with fetch().");
    dataContainer.textContent = "Fetching data...";
    
    // Using a public test API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        // The first .then() handles the initial response object
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Extracts the JSON data from the response
      })
      .then(data => {
        // The second .then() works with the actual JSON data
        console.log("Fetch successful. Data:", data);
        dataContainer.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.body}</p>
        `;
      })
      .catch(error => {
        // The .catch() handles any errors during the fetch process
        console.error('Fetch error:', error);
        dataContainer.textContent = "Failed to fetch data. See console for details.";
      });
});
