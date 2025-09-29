// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track Attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  // Check if Attendee Count is within limit.
  if (count <= maxCount) {
    count++;

    // Update Attendee Counter
    const attendeeCounter = document.getElementById("attendeeCount");
    attendeeCounter.textContent = count;
    console.log("Total Check-Ins:", count);

    // Update Progress Bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage;
    console.log(`Progress: ${percentage}`);

    // Update Team Counter
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    // Show welcome message
    const message = `🎉 Welcome, ${name} from ${teamName}`;
    const greetingMessage = document.getElementById("greeting");
    greetingMessage.textContent = message;
    greetingMessage.style.display = "block";
    console.log(message);
  }

  // Reset form
  form.reset();
});
