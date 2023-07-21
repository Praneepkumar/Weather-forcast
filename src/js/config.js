"use strict";
export const WEATHER_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
export const GEOCODE_URL = `https://geocode.maps.co/reverse`;

export const TIMEOUT_SECS = 10;

export function GENERATE_KEY(name) {
  if (name === "visualCrossing") return "SP4ZBC92NXUNSGNUN6MAVUKUQ";
}
