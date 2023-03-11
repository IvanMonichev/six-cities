// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';

import { useRef } from 'react';
import { UrlMarker } from '../../constant';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { Icon } from 'leaflet';

type MapProps = {
  offers: Offer[];
}

function Map({ offers }: MapProps): JSX.Element {
  const city = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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

  return (
    <section className="cities__map map" ref={mapRef}>
    </section>
  );
}

export default Map;
