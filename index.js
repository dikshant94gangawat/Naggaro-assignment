const containerdelete = document.querySelector(".action-btn");

// Check if container is found
if (containerdelete) {
  containerdelete.addEventListener("click", (event) => {
    console.log("Clicked element:", event.target); // Check clicked element

    if (event.target.classList.contains("delete-component-4")) {
      const box = event.target.parentElement.parentElement;
      console.log("delete " + box);
      box.remove();
    }
  });
} else {
  console.error("Container element not found!"); // Error message if container not found
}

const toggleButton = document.getElementById("toggleButton");
const contentToToggle = document.getElementById("contentTotoggle");

toggleButton.addEventListener("click", () => {
  contentToToggle.style.display =
    contentToToggle.style.display === "none" ? "block" : "none";
  toggleButton.textContent = "Show";
  toggleButton.style.backgroundColor = "green";
});

const statusSelect = document.getElementById("status");
const confirmationPopupnew = document.getElementById("confirmationPopupnew");
statusSelect.addEventListener("change", () => {
  const selectedStatus = statusSelect.value;

  if (selectedStatus === "done") {
    confirmationPopupnew.classList.remove("hidden");
    // Automatically hide popup after 2 seconds
    setTimeout(() => {
      confirmationPopupnew.classList.add("hidden");
      // Redirect to next page with thank you message
      window.location.href = "index.html"; // Replace with your desired URL
    }, 1000);

    if (confirmChange) {
      // Proceed with changing the status to Done
      console.log("Status changed to Done");
    } else {
      // Reset the select element to the previous value
      statusSelect.value =
        statusSelect.options[statusSelect.selectedIndex - 1].value;
    }
  } else {
    // Handle other status changes if needed
    console.log("Status changed to:", selectedStatus);
  }
});

// insert new component

const insertNewLineButton = document.getElementById("insertNewLineButton");
const listOfActions = document.getElementById("listOfActions");

insertNewLineButton.addEventListener("click", () => {
  // Optionally, add content to the new item:
  const firstChild = listOfActions.firstElementChild;
  const clonedChild = firstChild.cloneNode(true);
  listOfActions.appendChild(clonedChild);
});

//clicking on save button

const saveButton = document.getElementById("saveButton");
const confirmationPopup = document.getElementById("confirmationPopup");
const confirmSaveButton = document.getElementById("confirmSave");
const cancelSaveButton = document.getElementById("cancelSave");

saveButton.addEventListener("click", () => {


  confirmationPopup.classList.remove("hidden");

  // Automatically hide popup after 2 seconds
  setTimeout(() => {
    confirmationPopup.classList.add("hidden");
    // Redirect to next page with thank you message
    window.location.href = "thanks.html"; // Replace with your desired URL
  }, 1000);
});
saveButton.addEventListener("click", async () => {
  setTimeout(async () => {
    console.log("Button clicked");
    await loader.classList.remove("hidden");
    console.log("Loader class removed:", loader.classList);
  }, 5000);
});
