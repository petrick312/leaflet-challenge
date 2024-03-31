# leaflet-challenge
Module 15 Challenge

## Instructions
Create the Earthquake Visualization <br />

## Create the Earthquake Visualization
# Your first task is to visualize an earthquake dataset. Complete the following steps: <br />
    Get your dataset. To do so, follow these steps:<br />
        The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON page and choose a dataset to visualize.<br />
        When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. <br />
    Import and visualize the data by doing the following:<br />
        Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.<br />
        Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.<br />
        Include popups that provide additional information about the earthquake when its associated marker is clicked.<br />
        Create a legend that will provide context for your map data.<br />
        Your visualization should look something like the preceding map.<br />

## Requirements
# These requirements apply only to "Part 1: Create the Earthquake Visualization" as "Part 2" is optional with no extra points earning. <br />
    Map (60 points) <br />
        TileLayer loads without error (20 points) <br />
        Connects to geojson API using D3 without error (20 points) <br />
        Markers with size corresponding to earthquake magnitude (10 points) <br />
        A legend showing the depth and their corresponding color (10 points) <br />
    Data Points (40 points) <br />
        Data points scale with magnitude level (10 points) <br />
        Data points colors change with depth level (10 points) <br />
        Each point has a tooltip with the Magnitude, the location and depth (10 points) <br />
        All data points load in the correct locations (10 points) <br />