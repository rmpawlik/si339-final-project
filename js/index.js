// Personal Greeting Logic

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
  
    let greetingMessage;
    if (hours < 12) {
      greetingMessage = 'Good Morning!';
    } else if (hours < 18) {
      greetingMessage = 'Good Afternoon!';
    } else {
      greetingMessage = 'Good Evening!';
    }
  
      greetingElement.textContent = greetingMessage;

  });
  
  // Random Affirmation Generator
  document.addEventListener("DOMContentLoaded", () => {
    const affirmations = [
      "You are worthy of love and respect.",
      "Today is a new beginning.",
      "You have the power to create change.",
      "Peace begins with me.",
      "Every day is a chance to grow.",
      "You are enough, just as you are.",
      "You are capable of amazing things.",
      "Happiness is within your reach.",
      "Trust yourself; you’ve got this.",
      "Embrace the present moment fully."
    ];
  
    const dateElement = document.querySelector(".date");
    const affirmationElement = document.querySelector(".affirmation");
  
    // Get today's date in a readable format
    const today = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = today.toLocaleDateString(undefined, options);
  
    // Select a random affirmation
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  
    // Update the HTML content
    dateElement.textContent = formattedDate;
    affirmationElement.textContent = randomAffirmation;
  });