const statusCodes = {};

browser.webRequest.onCompleted.addListener(
    e => {
      if (e.tabId === -1 || e.type !== 'main_frame') {
        return;
      }
  
      console.log("I was called onCompleted");
      statusCodes[e.tabId] = e.statusCode;
      OnStatus(e.tabId);
    },
    { urls: ['<all_urls>'] }
  );

function OnStatus(tabId) {
    let statusCode = statusCodes[tabId];
    console.log("I was called");
    alert(statusCode[tabId]);
}