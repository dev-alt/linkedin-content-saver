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
    const pdfUrl = "<PDF URL to pull>";
    sendMessageToBackgroundScript({ action: "pullPDF", pdfUrl });
  });
  
  function sendMessageToBackgroundScript(message) {
    browser.runtime.sendMessage(message);
  }
  