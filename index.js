document.addEventListener('DOMContentLoaded', function() {
    const dailyThoughtElement = document.getElementById('daily-thought');
    const newThoughtBtn = document.getElementById('newThoughtBtn');

    const thoughts = [
        "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
        "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
        "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch",
        "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
        "The only true wisdom is in knowing you know nothing. - Socrates",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt"
    ];

    function getRandomThought() {
        const randomIndex = Math.floor(Math.random() * thoughts.length);
        return thoughts[randomIndex];
    }

    // Set an initial thought when the page loads
    dailyThoughtElement.textContent = getRandomThought();

    // Add event listener to the button
    newThoughtBtn.addEventListener('click', function() {
        dailyThoughtElement.textContent = getRandomThought();
    });
});