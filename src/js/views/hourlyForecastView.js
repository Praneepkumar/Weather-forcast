import View from "./view.js";
import { formatTime } from "../helper.js";

class HourlyForecastView extends View {
  _parentElement = document.querySelector(".temperature-timings");
  currentDate = new Date();
  hours = this.currentDate.getHours();
  formattedTime = this.hours.toString().padStart(2, "0");
  _generateMarkup() {
    return this.markup();
  }
  markup() {
    let specificHours = this.getCurrentTimePlus6Hours(this._data);
    console.log(specificHours);
    let markup = specificHours
      .map(
        (obj) => `<div class="time-col col d-flex">
                <p>${formatTime(obj.datetime)}</p>
                <div class="timings-img">
                  <img class="img-responsive" src="../img/icons/${
                    obj.icon
                  }.svg" alt=${obj.icon}>
                </div>
                <h2 class="today-temp">${Math.floor(
                  obj.temp
                )}&deg; <span>C</span></h2>
              </div>`
      )
      .join(" ");

    return markup;
  }
  getCurrentTimePlus6Hours(data) {
    // Find the index of the current time in the data array
    const currentIndex = data.findIndex(
      (obj) => obj.datetime.split(":")[0] === this.formattedTime
    );
    console.log(currentIndex);
    // If the current time is not found in the data array, return an empty array
    if (currentIndex === -1) {
      return [];
    }

    // Get the next 6 objects from the current time, considering the circular nature of time (e.g., 23:00 -> 00:00)
    const next6HoursData = data.slice(currentIndex + 1, currentIndex + 7);
    return next6HoursData.length === 6
      ? next6HoursData
      : next6HoursData.concat(data.slice(0, currentIndex + 7 - data.length));
  }
}
export default new HourlyForecastView();
