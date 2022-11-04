// This page will need to display timer and each question one by one.
// TODO: Diplay timer on screen to count down
function updateTimer() {
  future = Time.parse ("00:05:00");
  console.log(updateTimer)
  // now = new Time();
  // diff = future - now;
}

// TODO: Display Question #1 with the option to select an answer

// TODO: After 'next' button is clicked, display question #2 with the option to select answer

// TODO: After clicking 'next' button, display question #3 with the option to select answer

// TODO: After clicking 'finish' button, display option to view score

const startbtn = document.querySelector("button");

startbtn.addEventListener("click", () => {
  window.location.href="./pages/page1-Quiz/index.html";
  console.log(button)
});