import View from "./view.js";

class AirConditionsView extends View {
  _parentElement = document.querySelector(".weather-kpi");
  _generateMarkup() {
    return `
              <!------------------col---------------------------->
              <div class="kpi-card d-flex">
                <i class="ph ph-thermometer-simple kpi-icon kpi-icon-mobile"></i>

                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">Real Feel</h4>
                  <h3 class="kpi-metrics">${Math.floor(
                    this._data.feelslike
                  )}&deg; <span>C</span></h3>
                </div>
              </div>

              <!------------------col---------------------------->

              <div class="kpi-card d-flex">
                <i class="ph ph-wind kpi-icon kpi-icon-mobile"></i>
                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">Wind</h4>
                  <h3 class="kpi-metrics">
                   ${Math.floor(this._data.windspeed)}
                    <span>kmph</span>
                  </h3>
                </div>
              </div>

              <!------------------col---------------------------->

              <div class="kpi-card d-flex">
                <i class="ph ph-cloud-rain kpi-icon kpi-icon-mobile"></i>

                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">Cloud Cover</h4>
                  <h3 class="kpi-metrics"> ${Math.floor(
                    this._data.cloudcover
                  )}&percnt;</h3>
                </div>
              </div>

              <!------------------col---------------------------->

              <div class="kpi-card d-flex">
                <i class="ph ph-sun kpi-icon kpi-icon-mobile"></i>

                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">UV Index</h4>
                  <h3 class="kpi-metrics">${this._data.uvindex}</h3>
                </div>
              </div>
            `;
  }
}

export default new AirConditionsView();
