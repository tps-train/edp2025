// --- CHALLENGE: User-Driven Highlighting ---

// 1. Select the new HTML elements.
const selectorInput = document.getElementById('selectorInput');
const highlightSelectorBtn = document.getElementById('highlightSelectorBtn');
const clearHighlightsBtn = document.getElementById('clearHighlightsBtn');

// 2. Add an event listener to the "Highlight" button.
highlightSelectorBtn.addEventListener('click', () => {
    // Get the selector string from the input field.
    const selector = selectorInput.value;
    
    // Proceed only if the user has typed something.
    if (selector) {
        try {
            // Use the user's input to query the DOM.
            const elementsToHighlight = document.querySelectorAll(selector);
            console.log(`Found ${elementsToHighlight.length} elements with selector "${selector}"`);
            
            // Loop through the found elements and add the 'highlight' class.
            elementsToHighlight.forEach(element => {
                element.classList.add('highlight');
            });
        } catch (error) {
            // Handle cases where the user types an invalid CSS selector.
            console.error("Invalid selector:", error);
            alert("You entered an invalid CSS selector. Please try again.");
        }
    } else {
        alert("Please enter a CSS selector in the input box.");
    }
});

// 3. Add an event listener to the "Clear" button.
clearHighlightsBtn.addEventListener('click', () => {
    // Find all elements that currently have the 'highlight' class.
    const highlightedElements = document.querySelectorAll('.highlight');
    console.log(`Clearing ${highlightedElements.length} highlighted elements.`);
    
    // Loop through them and remove the class.
    highlightedElements.forEach(element => {
        element.classList.remove('highlight');
    });
});
