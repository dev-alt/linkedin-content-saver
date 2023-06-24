// content.js

// Listen for user actions on LinkedIn pages
document.addEventListener("click", (event) => {
    if (event.target.matches(".linkedin-link-class")) {
      const link = event.target.href;
      sendMessageToBackgroundScript({ action: "saveLink", link });
    } else if (event.target.matches(".linkedin-image-class")) {
      const imageUrl = event.target.src;
      sendMessageToBackgroundScript({ action: "pullImage", imageUrl });
    } else if (event.target.matches(".linkedin-pdf-class")) {
      const pdfUrl = event.target.href;
      sendMessageToBackgroundScript({ action: "pullPDF", pdfUrl });
    }
  });
  
  function sendMessageToBackgroundScript(message) {
    browser.runtime.sendMessage(message);
  }
  