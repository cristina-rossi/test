document.getElementById('openWindowBtn').addEventListener('click', function() {
    // Open a new window with the specified title
    var newWindow = window.open('', 'myWindow', 'width=400,height=400');

    // Load content into the new window only after it has fully loaded
    newWindow.onload = function() {
        // Populate the new window with content from contentScript.html
        fetch('contentScript.html')
            .then(response => response.text())
            .then(html => {
                newWindow.document.write(html);
            });
    };
});
