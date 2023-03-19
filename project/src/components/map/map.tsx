import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import { City } from '../../types/city';
import { Location } from '../../types/location';
import { CityLocation, CURRENT_MARKER, DEFAULT_MARKER } from '../../constant';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  locations: (Location & { id?: number })[];
  city: City;
  place: 'cities' | 'property';
  activeOffer?: number | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: CURRENT_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ locations, city, place, activeOffer }: MapProps): JSX.Element {
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

        marker
          .setIcon(activeOffer === location.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);

        markers.push(marker);
      });


      const { latitude: lat, longitude: lng} = CityLocation[city.name];
      map.setView({ lat, lng});
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };

  }, [map, locations, city, activeOffer]);

  return (
    <section
      className={`${place}__map map`}
      ref={mapRef}
    />
  );
}

export default Map;
