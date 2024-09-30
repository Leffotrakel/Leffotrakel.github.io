function onPageLoaded() {
    // Write your javascript code here
    console.log("page loaded");
}

document.addEventListener('DOMContentLoaded', function() {
    // Listen for clicks on elements with the class 'play-button'
    document.querySelectorAll('.play-button').forEach(function(button) {
        button.addEventListener('click', function() {
            // When a play button is clicked, simulate a click on the <a> tag within the same .video-container
            this.parentNode.querySelector('a').click();
        });
    });

        // Set interval to repeat effect every 5 seconds (5000 milliseconds)
    setInterval(function() {
        // Perform a task every 5 seconds
        document.querySelectorAll('.play-button').forEach(function(button) {
            // Trigger a simulated click on each button
            button.click();
        });
    }, 5000); // 5000 ms = 5 seconds
});
