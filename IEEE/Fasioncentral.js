document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("send-btn");
  const messageBox = document.getElementById("message-box");

  sendButton.addEventListener("click", function (e) {
    e.preventDefault();
    const message = messageBox.value.trim();

    if (message === "") {
      alert("Please enter a message before sending.");
    } else {
      alert("Message sent: " + message);
      messageBox.value = ""; // Clear the message box
    }
  });

  // Hover effect on the main shop now button
  const shopNowButton = document.querySelector(".heropage-shopnow");
  shopNowButton.addEventListener("mouseenter", function () {
    shopNowButton.style.backgroundColor = "#e5c643";
    shopNowButton.style.color = "black";
  });

  shopNowButton.addEventListener("mouseleave", function () {
    shopNowButton.style.backgroundColor = "black";
    shopNowButton.style.color = "#e5c643";
  });
});
