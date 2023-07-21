"use strict";
import * as model from "./model.js";
import OverviewView from "./views/overviewView.js";
import hourlyForecastView from "./views/hourlyForecastView.js";
import airConditionsView from "./views/airConditionsView.js";
import weekForecastView from "./views/weekForecastView.js";

//control weather details
async function controlWeatherDetails() {
  try {
    await model.getWeatherDetails();
    OverviewView.render(model.geoData);
  } catch (err) {
    console.error(err);
  }
}

async function controlHourlyDetails() {
  try {
    await model.getHourlyData();
    hourlyForecastView.render(model.hourlyData);
  } catch (err) {
    console.error(err);
  }
}

async function controlAirConditionDetails() {
  try {
    airConditionsView.render(model.geoData.currentConditions);
  } catch (err) {
    console.error(err);
  }
}

async function controlWeekForecast() {
  try {
    weekForecastView.render(model.futureData);
  } catch (err) {
    console.error(err);
  }
}

async function init() {
  await controlWeatherDetails();
  await controlHourlyDetails();
  await controlAirConditionDetails();
  await controlWeekForecast();
}

window.addEventListener("load", init);
/* OverviewView.addHandlerRender(controlWeatherDetails);
hourlyForecastView.addHandlerRender(controlHourlyDetails);
 */
