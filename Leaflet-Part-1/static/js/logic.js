// Creating the map object
let myMap = L.map("map", {
    center: [39.3210, -111.0937],
    zoom: 3
  });
  
  // Adding the tile layer
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
// Use this link to get the GeoJSON data.
  let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

  

// The function that will determine the color of the marker based on earthquake depth
  function getColor(d) {
    if (d < 10) return '#98ee00';
    else if (d <30) return '#d4ee00';
    else if (d <50) return '#eecc00';
    else if (d <70) return "#ee9c00";
    else if (d <90) return '#ea822c';
    else return '#ea2c2c';
  }
  
// Getting our GeoJSON data
  d3.json(geoData).then(function(data) {
  
    // Create a new choropleth layer.
    let earthquakes = L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
          let markerCh = L.circleMarker(latlng, {
              radius: feature.properties.mag * 5,
              fillColor: getColor(feature.geometry.coordinates[2]),
              color: "#000",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8
          })
          markerCh.bindPopup("<h3>" + feature.properties.title+"</h3><hr><p>" + `Depth: ${feature.geometry.coordinates[2]}` + "</p>"); // Or whatever
          return markerCh;
        }
  });
  
  // Create a baseMaps object to hold the streetmap layer.
  let baseMaps = {
    Street: street,
    Topography: topo
  };
  
// Create an overlayMaps object to hold the earthquake layer.
  let overlayMaps = {
    Earthquakes: earthquakes,
  };
  
  L.control.layers(baseMaps, overlayMaps,{collapsed: false}).addTo(myMap);
  
  //  Create a legend to display information about our map
   let legend = L.control({
    position: "bottomright"
  });

  // When the layer control is added, insert a div with the class of "legend"
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend"),
    depth = [-10, 10, 30, 50, 70, 90];
  
    div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
  
    for (let i = 0; i < depth.length; i++) {
      div.innerHTML +=
      '<i style="background:' + getColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
    }
    return div;
  };
  legend.addTo(myMap);
  
  });
  
  
  
  
  
  