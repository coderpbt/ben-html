
// Get all copy image elements
const copyImages = document.querySelectorAll(".copyImage");

// Add click event listener to each copy image
copyImages.forEach(function (copyImage) {
    copyImage.addEventListener("click", function () {
        // Get the number to copy
        const number = this.previousElementSibling.textContent;

        // Create a temporary input element
        const tempInput = document.createElement("input");
        tempInput.value = number;
        document.body.appendChild(tempInput);

        // Copy the text to the clipboard
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // Show a custom toast notification
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = "Number Copied!";
        document.body.appendChild(toast);

        setTimeout(function () {
            toast.classList.add("show");
        }, 100);

        setTimeout(function () {
            toast.classList.remove("show");
            setTimeout(function () {
                document.body.removeChild(toast);
            }, 300);
        }, 1500);
    });
});
