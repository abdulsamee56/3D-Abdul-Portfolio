import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale:320, // Adjust the scale to control the zoom level
        center: [-86.5, 43.5], // Center the map on the Great Lakes region
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography="/img/features.json" fill="#1C043E" stroke="#FFFFFF" strokeWidth={0.5}>
        {({ geographies }) => (
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        )}
      </Geographies>
      <Annotation
        subject={[-84.5, 43.5]} // Adjust the subject to place the annotation in Michigan
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#EE3E38",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#EE3E38">
          {"Michigan"}
        </text>
      </Annotation>
    </ComposableMap>
  
  );
};

export default Map;