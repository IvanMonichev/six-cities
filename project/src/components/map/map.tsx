import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import { City } from '../../types/city';
import { DEFAULT_MARKER } from '../../constant';

type MapProps = {
  offers: Offer[];
  city: City;
  selectedPoint?: number | undefined;
}


// const currentCustomIcon = new Icon({
//   iconUrl: UrlMarker.Current,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });

function Map({ offers, city, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {

      const defaultCustomIcon = new Icon({
        iconUrl: DEFAULT_MARKER,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      offers.forEach((offer) => {
        // eslint-disable-next-line no-console
        const { location } = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });
        console.log(marker);
        console.log(map);
        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }

  }, [map, offers, selectedPoint]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;
