// ArcGIS libraries
import Map from "esri/Map";
import MapView from "esri/views/MapView";
import Extent from "esri/geometry/Extent";
import SpatialReference from "esri/geometry/SpatialReference";
import FeatureLayer from "esri/layers/FeatureLayer";
import { mapConfig } from '../config/mapConfig.js';

const noop = () => {};

const initializeMap = (container) => {

  const map = new Map({
    basemap: mapConfig().basemapId
  });

  const view = new MapView({
    map: map,
    extent: new Extent({
      xmin: mapConfig().xmin,
      ymin: mapConfig().ymin,
      xmax: mapConfig().xmax,
      ymax: mapConfig().ymax,
      spatialReference: new SpatialReference({wkid:4326})
    }),
    popup: {
      actions: [],
      dockEnabled: false,
      collapseEnabled: false,
      autoCloseEnabled: false
     }
  });

  view.container = container;
  view
    .when()
    .then(_ => {

      console.log("view loaded")
    })
    .catch(noop);
    return { map, view };

}

export { initializeMap }
