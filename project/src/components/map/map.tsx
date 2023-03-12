import { useEffect, useRef } from 'react';
import { UrlMarker } from '../../constant';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';

type MapProps = {
  offers: Offer[];
  city: City;
  selectedPoint?: number | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, city, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  // eslint-disable-next-line no-console
  console.log(map);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { location } = offer;

        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker.setIcon(
          selectedPoint !== undefined && offer.id === selectedPoint
            ? currentCustomIcon
            : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <section
      style={{ height: '500px' }}
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;
