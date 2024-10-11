// Content script for Project Daedalus Chrome Extension

console.log('Project Daedalus content script loaded');

// Listen for messages from the extension popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageContent') {
    // Get the current page content
    const pageContent = document.body.innerText;
    sendResponse({ content: pageContent });
  }
});

// Export an empty object to satisfy module requirements
export {};