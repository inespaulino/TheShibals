onmessage = function(event) {
    console.log("Message received from main script:", event.data);
    const result = event.data + " - processed by worker";
    postMessage(result);
  };