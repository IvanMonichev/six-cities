import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import { City } from '../../types/city';
import { Location } from '../../types/location';
import { CURRENT_MARKER, DEFAULT_MARKER } from '../../constant';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  locations: Location[];
  city: City;
  place: 'cities' | 'property';
}

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentCustomIcon = new Icon({
  iconUrl: CURRENT_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ locations, city, place }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      locations.forEach((location) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(defaultCustomIcon).addTo(map);

        markers.push(marker);
      });

      map.fitBounds([[city.location.latitude, city.location.longitude]], {
        maxZoom: city.location.zoom
      });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };

  }, [map, locations, city]);

  return (
    <section
      className={`${place}__map map`}
      ref={mapRef}
    />
  );
}

export default Map;
