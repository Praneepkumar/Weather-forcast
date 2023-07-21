"use strict";
import { WEATHER_URL, GEOCODE_URL, GENERATE_KEY } from "./config.js";
import { AJAX } from "./helper.js";
import { formatDateYMD } from "./helper.js";

export let geoData = {
  locationDetails: {},
  currentConditions: {},
};

export let futureData = [];
export let hourlyData = [];
/*********Fetching Lat, Lng using navigator api**************/

function geoPromisify() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

/*********Fetching Current Location using API**************/

async function getGeolocation() {
  try {
    let res = await geoPromisify();
    let { latitude: lat, longitude: lon } = res.coords;
    /* console.log(lat, lon); */
    let data = await AJAX(`${GEOCODE_URL}?lat=${lat}&lon=${lon}`);
    let {
      address: { city, state_district, county },
    } = data;
    let countySplit = county.split(" ")[0];
    return city ? city : countySplit || state_district;
  } catch (err) {
    throw err;
  }
}

export async function getWeatherDetails() {
  try {
    let city = await getGeolocation();

    let weatherData = await AJAX(
      `${WEATHER_URL}/${city}?unitGroup=metric&key=${GENERATE_KEY(
        "visualCrossing"
      )}&contentType=json`
    );

    let { resolvedAddress, currentConditions, days, description } = weatherData;
    let {
      temp,
      feelslike,
      humidity,
      dew,
      windspeed,
      pressure,
      visibility,
      cloudcover,
      uvindex,
      conditions,
      icon,
    } = currentConditions;
    geoData.locationDetails = resolvedAddress;
    futureData = [...days];
    geoData.currentConditions = {
      temp,
      feelslike,
      humidity,
      dew,
      windspeed,
      pressure,
      visibility,
      cloudcover,
      uvindex,
      conditions,
      icon,
      description,
    };
    console.log(geoData.currentConditions);
  } catch (err) {
    throw err;
  }
}
export async function getHourlyData() {
  let todayDate = formatDateYMD();
  hourlyData = futureData
    .filter((obj) => obj.datetime === todayDate)
    .flatMap((obj) => obj.hours);
}
