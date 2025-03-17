    // Function to remove Arabic Harakat (diacritics)
    function removeArabicHarakat(text) {
        // Remove Harakat (diacritics) and some other Arabic marks
        return text.replace(/[\u064B-\u065F\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u0610-\u061A\u0640\u0651]/g, '');
    }

    // Apply to all text input fields and textareas
    document.addEventListener("paste", function(event) {
        let target = event.target;

        // Apply only for input and textarea fields
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
            event.preventDefault(); // Prevent default paste behavior

            // Get pasted text
            let pastedText = (event.clipboardData || window.clipboardData).getData("text");

            // Remove Arabic Harakat
            let cleanedText = removeArabicHarakat(pastedText);

            // Insert cleaned text into the input field
            target.value = cleanedText;
        }
    });