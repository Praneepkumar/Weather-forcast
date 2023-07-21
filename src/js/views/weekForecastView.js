import View from "./view.js";
import { getDayOfWeek } from "../helper.js";
class WeekForecastView extends View {
  _parentElement = document.querySelector(".forecast-container");
  _generateMarkup() {
    return this.markup();
  }
  markup() {
    let weekData = this._data.slice(1, 8);
    let markup = weekData
      .map((obj) => {
        return `<div class="forecast-description d-flex ">
              <p class="forecast-day">${getDayOfWeek(obj.datetime)}</p>
              <div class="forecast-weather d-flex">
                <img class="img-responsive" src="../img/icons/${
                  obj.icon
                }.svg" alt=${obj.icon}>
                <h4 class="forecast-heading">${obj.conditions}</h4>
              </div>
              <p class="forecast-temp">
                <span>${Math.floor(obj.temp)}&deg;</span> C
              </p>
            </div>`;
      })
      .join(" ");
    return markup;
  }
}

export default new WeekForecastView();
