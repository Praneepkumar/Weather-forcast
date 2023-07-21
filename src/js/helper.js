import { TIMEOUT_SECS } from "./config.js";

function timeOut(s) {
  return new Promise((_, reject) =>
    setTimeout(
      () =>
        reject(new Error(`Request takes too long! Timeout after ${s} seconds`)),
      s * 1000
    )
  );
}

export async function AJAX(url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    let res = await Promise.race([fetchPro, timeOut(TIMEOUT_SECS)]);
    let data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
}

function getCurrentFormattedDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentDate = new Date();
  const dayOfWeek = days[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // Get hours and minutes with AM/PM format
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  // Add leading zeros to minutes if needed
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${dayOfWeek},${dayOfMonth} ${month},${hours}:${formattedMinutes} ${ampm}`;
}

export function splitDateTime(num) {
  return getCurrentFormattedDate().split(",")[num];
}

export function formatDateYMD() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function formatTime(time24hr) {
  // Split the time string into hours and minutes
  const [hours, minutes] = time24hr.split(":").map(Number);
  // Validate the input
  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return "Invalid time format";
  }
  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";
  // Convert to 12-hour format
  const convertedHours = hours % 12 || 12;
  // Format the time string in 12-hour format
  const time12hr = `${convertedHours}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
  return time12hr;
}

export function getDayOfWeek(dateString) {
  const today = new Date();
  const inputDate = new Date(dateString);
  // Check if the input date is today
  if (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  ) {
    return "Today";
  }
  // Create an array with day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // Get the day index (0 for Sunday, 1 for Monday, etc.)
  const dayIndex = inputDate.getDay();
  // Return the day name based on the day index
  return dayNames[dayIndex];
}
