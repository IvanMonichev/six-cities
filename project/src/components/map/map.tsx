import { useEffect, useRef } from 'react';
import { UrlMarker } from '../../constant';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

  // const currentCustomIcon = new Icon({
  //   iconUrl: UrlMarker.Current,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { location } = offer;

        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker.setIcon(defaultCustomIcon).addTo(map);

      });
    }
  }, [map, offers]);

  return (
    <section style={{height: '500px'}} className="cities__map map" ref={mapRef}>
    </section>
  );
}

export default Map;
