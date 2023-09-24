import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";

import styles from "pages/auth/patientForm/patientForm.module.css";
import { position } from "@chakra-ui/react";

const defaultPos = { lat: 28.7041, lng: 77.1025 };

const PatientLocation = ({ setCurrentPos }) => {
  const [loader, setLoader] = useState();
  // const [currentPos, setCurrentPos] = useState();

  useEffect(() => {
    if (!loader) {
      setLoader(
        new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
          version: "weekly",
        })
      );
    }
  }, []);

  useEffect(() => {
    if (!loader) {
      return;
    }

    initMap();
  }, [loader]);

  const initMap = async () => {
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      const map = new Map(document.getElementById("map"), {
        center: defaultPos,
        zoom: 8,
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        mapTypeControlOptions: {
          mapTypeIds: [],
        },
        streetViewControl: false,
        fullscreenControl: false,
      });

      const infoWindow = new google.maps.InfoWindow();

      const locationButton = document.createElement("button");

      const marker = new AdvancedMarkerElement({
        position: defaultPos,
        gmpDraggable: true,
        title: "This marker is draggable.",
      });

      marker.addListener("dragend", (event) => {
        const position = marker.position;

        setCurrentPos({ lat: position.lat, lng: position.lng });

        // infoWindow.close();
        // infoWindow.setContent(
        //   `Pin dropped at: ${position.lat}, ${position.lng}`
        // );
        // infoWindow.open(marker.map, marker);
      });

      locationButton.textContent = "Mark Current Location";
      locationButton.classList.add(styles.currentLocationBtn);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(locationButton);
      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              marker.position = pos;
              marker.map = map;
              setCurrentPos(pos);

              // infoWindow.setPosition(pos);
              // infoWindow.setContent("Location found.");
              // infoWindow.open(map);
              map.setCenter(pos);
              map.setZoom(12);
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            }
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });
    });
  };

  console.log(position);

  return (
    <div
      id="map"
      style={{ width: "600px", height: "600px", borderRadius: "20px" }}
    ></div>
  );
};
export default PatientLocation;
