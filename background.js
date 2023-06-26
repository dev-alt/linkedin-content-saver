// background.js

// Listen for messages from the content script
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "saveLink") {
      saveLink(message.link);
    } else if (message.action === "pullImage") {
      pullImage(message.imageUrl);
    } else if (message.action === "pullPDF") {
      pullPDF(message.pdfUrl);
    }
  });
  
  function saveLink(link) {
    // Implement code to save the LinkedIn link
    // e.g., store the link in browser storage
  }
  
  function pullImage(imageUrl) {
    // Implement code to pull the image
    // e.g., use the downloads API to download the image
  }
  
  function pullPDF(pdfUrl) {
    // Use the downloads API to download the PDF
    chrome.downloads.download({
      url: pdfUrl,
      filename: 'downloaded_pdf.pdf',
      saveAs: false // Change to true if you want to prompt the user to choose the download location
    }, function(downloadId) {
      // Handle the download completion
      if (downloadId !== undefined) {
        console.log('PDF download started.');
      } else {
        console.log('PDF download failed.');
      }
    });
  }
  