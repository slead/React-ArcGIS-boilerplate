const mapConfig = () => {

  // Set the "base" URL for the current environment (eg, UAT, pre-prod, prod, etc). Each ArcGIS environment
  // must follow the same pattern. Eg, the PC_SA2 layer must be follow the same structure on UAT and prod
  const urlBase = "https://services7.arcgis.com/nMBRP09Dx4VqvXeZ/arcgis/rest/services";

  return {

    "basemapId": "gray-vector",
    "xmin": 112.990579,
    "ymin": -43.449491,
    "xmax": 155.0879983,
    "ymax": -11.6045637,

    "layerOptions": {
      "opacity": 0.5
    },

    highlightOptions: {
      // color: "#fff568",
      fillOpacity: 0,
      haloColor: "#fff568",
      // haloOpacity: 1
    },

    communityLayer: {
      "name": "Indigenous communities",
      "url": `${urlBase}/Indigenous_Locations/FeatureServer/0/`
    },

    regionLayers: [
      {
        "name": "States",
        "url": `${urlBase}/State_2016_Boundary/FeatureServer/1/`
      },
      {
        "name": "SA3",
        "url": `${urlBase}/SA3_2016_Boundary/FeatureServer/1/`
      },
      {
        "name": "SA2",
        "url": `${urlBase}/SA2_2016_Boundary/FeatureServer/1/`
      },
      {
        "name": "IARE",
        "url": `${urlBase}/IARE_2016_Boundary/FeatureServer/1/`
      },
      {
        "name": "IAS",
        "url": `${urlBase}/IAS_2016_Boundary/FeatureServer/1/`
      },
      {
        "name": "IREG",
        "url": `${urlBase}/IREG_2016_Boundary/FeatureServer/1/`
      }
    ]

  }
}

export { mapConfig }
