import { setCity, setSorting, siteProcess } from './site-process';
import { CITIES, CityLocation, Sorting } from '../../constant';
import { SortName } from '../../types/common';


describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(siteProcess.reducer(void 0, { type: 'UNKNOWN_ACTION'}))
      .toEqual({
        city: {
          name: CITIES[0],
          location: CityLocation[CITIES[0]],
        },
        sorting: Sorting.Popular
      });
  });

  it('should set city by a given name', () => {
    const state = {
      city: {
        name: CITIES[0],
        location: CityLocation[CITIES[0]],
      },
      sorting: Sorting.Popular as SortName
    };

    expect(siteProcess.reducer(state, setCity(CITIES[1])))
      .toEqual({
        city: {
          name: CITIES[1],
          location: CityLocation[CITIES[1]],
        },
        sorting: Sorting.Popular
      });
  });

  it('should set sorting by a given name', () => {
    const state = {
      city: {
        name: CITIES[0],
        location: CityLocation[CITIES[0]],
      },
      sorting: Sorting.Popular as SortName
    };

    expect(siteProcess.reducer(state, setSorting(Object.keys(Sorting)[1] as SortName)))
      .toEqual({
        city: {
          name: CITIES[0],
          location: CityLocation[CITIES[0]],
        },
        sorting: Object.keys(Sorting)[1]
      });
  });
});
