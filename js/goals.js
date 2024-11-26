// Goal Tracker List Logic
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
document.addEventListener("DOMContentLoaded", () => {
    const goalForm = document.getElementById("goal-form");
    const goalInput = document.getElementById("goal-input");
    const goalDate = document.getElementById("goal-date");
    const goalList = document.getElementById("goal-list");
  
    // Load goals from localStorage on page load
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    savedGoals.forEach((goal) => addGoalToList(goal.text, goal.date));
  
    // Event listener for form submission
    goalForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      const goalText = goalInput.value.trim();
      const completionDate = goalDate.value;
  
      if (goalText && completionDate) {
        // Add goal to the list and save it in localStorage
        addGoalToList(goalText, completionDate);
        saveGoalToStorage(goalText, completionDate);
  
        // Clear form fields
        goalInput.value = "";
        goalDate.value = "";
      }
    });
  
    // Function to add a goal to the list
    function addGoalToList(goalText, completionDate) {
      const listItem = document.createElement("li");
      listItem.className = "goal-item";
  
      // Create goal text element
      const goalTextSpan = document.createElement("span");
      goalTextSpan.textContent = '• ' + capitalizeFirstLetter(goalText);
      goalTextSpan.className = "goal-text";
  
      // Create date text element
      const goalDateSpan = document.createElement("span");
      goalDateSpan.textContent = `Complete by: ${completionDate}`;
      goalDateSpan.className = "goal-date";
  
      // Create remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Complete";
      removeButton.className = "remove-btn";
  
      removeButton.addEventListener("click", () => {
        listItem.remove();
        removeGoalFromStorage(goalText, completionDate);
      });
  
      // Append all elements to the list item
      listItem.appendChild(goalTextSpan);
      listItem.appendChild(goalDateSpan);
      listItem.appendChild(removeButton);
  
      // Append list item to the goal list
      goalList.appendChild(listItem);
    }
  
    // Function to save a goal to localStorage
    function saveGoalToStorage(goalText, completionDate) {
      const goals = JSON.parse(localStorage.getItem("goals")) || [];
      goals.push({ text: goalText, date: completionDate });
      localStorage.setItem("goals", JSON.stringify(goals));
    }
  
    // Function to remove a goal from localStorage
    function removeGoalFromStorage(goalText, completionDate) {
      let goals = JSON.parse(localStorage.getItem("goals")) || [];
      goals = goals.filter(
        (goal) => goal.text !== goalText || goal.date !== completionDate
      );
      localStorage.setItem("goals", JSON.stringify(goals));
    }
  });