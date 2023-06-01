import { renderHook } from '@testing-library/react';
import { Map } from 'leaflet';

import { CITIES, CityLocation } from '../constant';
import useMap from './useMap';

const city = {
  name: CITIES[0],
  location: CityLocation[CITIES[0]]
};

const ref = {
  current: document.createElement('div')
};

describe('Hook: useMap', () => {
  it('should return map', () => {
    const { result } = renderHook(() =>
      useMap(ref, city),
    );

    const map = result.current;

    expect(map).toBeInstanceOf(Map);
  });
});
