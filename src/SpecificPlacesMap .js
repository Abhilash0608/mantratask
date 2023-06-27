import React from "react";
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  MarkersDirective,
  MarkerDirective,
  Marker,
  Inject,
} from "@syncfusion/ej2-react-maps";

export function SpecificPlacesMap() {
  const places = [
    { name: "Place 1", latitude: 51.505, longitude: -0.09 },
    { name: "Place 2", latitude: 51.51, longitude: -0.1 },
    // Add more places as needed
  ];

  return (
    <MapsComponent id="maps">
      <Inject services={[Marker]} />
      <LayersDirective>
        <LayerDirective>
          <MarkersDirective>
            {places.map((place, index) => (
              <MarkerDirective
                key={index}
                visible={true}
                animationDuration={0}
                dataSource={[place]}
                tooltipSettings={{ visible: true, valuePath: "name" }}
              ></MarkerDirective>
            ))}
          </MarkersDirective>
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
}
export default SpecificPlacesMap;
