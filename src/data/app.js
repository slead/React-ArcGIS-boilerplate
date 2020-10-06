// Custom Libraries
import { initializeMap } from '../modules/maps.js';

console.log("app.js")

export const initialize = async (container) => {

  console.log("initialize")

  let selectedMap = initializeMap(container);
  const { view, map, graphicsLayer } = selectedMap;

};
