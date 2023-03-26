import { AuthorizationStatus, StoreSlice } from '../../constant';
import { State } from '../../types/state';
import { User } from '../../types/user';

export const getAuthorizationStatus = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getUser = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): User['email'] => USER_PROCESS.user;
