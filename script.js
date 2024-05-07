document.getElementById('openWindowBtn').addEventListener('click', function() {
    // Open a new window with the specified title
    var newWindow = window.open('', 'myWindow', 'width=400,height=400');

        console.log("hi3");


     // Wait for a brief moment to ensure the new window is fully initialized
    setTimeout(function() {
        // Populate the new window with content from contentScript.html
        console.log("hi1");
        fetch('contentScript.html')
            .then(response => response.text())
            .then(html => {
                newWindow.document.write(html);
            });
    }, 100);


    
    
});
