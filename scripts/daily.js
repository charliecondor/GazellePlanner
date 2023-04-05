const today = new Date()
const todayString = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
console.log(today)

let newDayInfo = new DayInfo(todayString);

const gratitudeInput = document.querySelector("input[name='gratitudeText']");

gratitudeInput.addEventListener("input", newDayInfo.gratitudeBox.updateText);

console.log(newDayInfo.sleepBox.wenttobedText)
console.log(newDayInfo.date)