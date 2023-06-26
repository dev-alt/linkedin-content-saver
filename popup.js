// popup.js

document.getElementById("saveLinkBtn").addEventListener("click", () => {
    const link = "<LinkedIn link to save>";
    sendMessageToBackgroundScript({ action: "saveLink", link });
  });
  
  document.getElementById("pullImageBtn").addEventListener("click", () => {
    const imageUrl = "<Image URL to pull>";
    sendMessageToBackgroundScript({ action: "pullImage", imageUrl });
  });
  
  document.getElementById("pullPDFBtn").addEventListener("click", () => {
    const pdfUrls = [ /* Array of PDF URLs to pull */ ];
    pdfUrls.forEach((pdfUrl) => {
      sendMessageToBackgroundScript({ action: "pullPDF", pdfUrl });
    });
  });
  
  function sendMessageToBackgroundScript(message) {
    browser.runtime.sendMessage(message);
  }
  