import View from "./view.js";
import { splitDateTime } from "../helper.js";

class OverviewView extends View {
  _parentElement = document.querySelector(".overview__header");
  _generateMarkup() {
    console.log(this._data);
    return `
            <div class="location-info d-flex">
              <div class="location-heading d-flex">
                <h3 class="heading-secondary">${
                  this._data.locationDetails.split(",")[0]
                },<span> ${this._data.locationDetails.split(",")[1]} ${
      this._data.locationDetails.split(",")[2]
    }</span></h3>
                <div class="text-placeholder">
                  <p class="current-date">
                   ${splitDateTime(0)}, ${splitDateTime(1)}
                    <span> ${splitDateTime(2)}</span>
                  </p>
                  <div class="temperature-info d-flex">
                    <span><i class="ph ph-cloud-rain kpi-icon"></i></span>
                    <p>
                      Chance of Raining:
                      <span>${this._data.currentConditions.humidity}%</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="temperature-measure">
                <h2 class="heading-primary">${Math.floor(
                  this._data.currentConditions.temp
                )}&deg; <span>c</span></h2>
                <p class="weather-img-desc">${
                  this._data.currentConditions.description
                }
               </p>
              </div>
              </div>
              <div class="weather-img">
              <img src="../img/icons/${
                this._data.currentConditions.icon
              }.svg" alt=${this._data.currentConditions.icon} />
               
            </div>
            </div>
            
          `;
  }
  kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
}
export default new OverviewView();
