import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import { City } from '../../types/city';
import { DEFAULT_MARKER } from '../../constant';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  city: City;
  selectedPoint?: number | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// const currentCustomIcon = new Icon({
//   iconUrl: UrlMarker.Current,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });

function Map({ offers, city, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const { location } = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };

  }, [map, offers]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;
