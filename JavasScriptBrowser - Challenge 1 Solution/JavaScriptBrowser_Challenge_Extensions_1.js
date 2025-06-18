// --- 7.22: Network Requests with Fetch (CHALLENGE SOLUTION) ---
fetchDataBtn.addEventListener('click', () => {
    console.log("Section 7.22: Making a network request for a list of posts.");
    // The URL is changed to get 5 posts.
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(posts => { // The 'data' is now an array of 'posts'.
        console.log("Fetch successful. Data:", posts);
        // Loop through each post in the returned array.
        posts.forEach(post => {
            // For each post, create a new <li> element.
            const newItem = document.createElement('li');
            // Set its text content to the post's title.
            newItem.textContent = `API: ${post.title}`;
            // Add the 'item' class for consistent styling.
            newItem.classList.add('item');
            // Append the new item to the main list.
            itemList.appendChild(newItem);
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
        // Handle potential errors by displaying a message.
        const errorItem = document.createElement('li');
        errorItem.textContent = "Failed to fetch post titles.";
        errorItem.style.color = "red";
        itemList.appendChild(errorItem);
    });
});
