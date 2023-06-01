import { StoreSlice } from '../../constant';
import { State } from '../../types/state';
import { City } from '../../types/city';
import { SortName } from '../../types/common';

export const getCity = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): City => SITE_PROCESS.city;
export const getSorting = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): SortName => SITE_PROCESS.sorting;
